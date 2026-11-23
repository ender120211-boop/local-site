import AdmZip from 'adm-zip'
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const templatesDir = path.join(root, 'public', 'templates')
const downloadsDir = path.join(root, 'public', 'downloads')

mkdirSync(downloadsDir, { recursive: true })

const templateIds = readdirSync(templatesDir).filter((name) =>
  statSync(path.join(templatesDir, name)).isDirectory(),
)

async function createZip(templateId) {
  const templateDir = path.join(templatesDir, templateId)
  const requiredFiles = ['index.html', 'styles.css', 'script.js']
  const missing = requiredFiles.filter((file) => !existsSync(path.join(templateDir, file)))

  if (missing.length) {
    throw new Error(`${templateId}: missing ${missing.join(', ')}`)
  }

  const outputPath = path.join(downloadsDir, `${templateId}.zip`)
  const zip = new AdmZip()
  zip.addLocalFolder(templateDir, templateId)
  zip.addFile(
    `${templateId}/README.md`,
    Buffer.from(`# ${templateId}\n\n## Demo HTML template\n\n1. Extract this archive.\n2. Open index.html in your browser.\n3. Replace the demo text and SVG resources as needed.\n4. Upload the folder to any static hosting service.\n\n## Included files\n\n- index.html\n- styles.css\n- script.js\n- assets/\n\nThis package is provided for demonstration purposes.\n`),
  )
  zip.writeZip(outputPath)

  console.log(`Created public/downloads/${templateId}.zip`)
}

for (const templateId of templateIds) {
  await createZip(templateId)
}
