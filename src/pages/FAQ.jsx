import Seo from '../components/Seo'

const questions = [
  ['What is included with a template?', 'Each DEMO package contains HTML, CSS, JavaScript and the local visual assets used by that template, together with a README for setup.'],
  ['Do I need React or Node.js?', 'No. Every downloadable template is a standalone static HTML/CSS/JavaScript website and can be opened directly in a browser.'],
  ['Can I customize the template?', 'Yes. You can edit the HTML text, styles, colors, links and assets with a text editor or VS Code.'],
  ['How does the current download work?', 'This MVP offers demonstration ZIP downloads without payment. It does not represent an automatically issued commercial license or live payment checkout.'],
  ['Can I use a template for a real client project?', 'Use is subject to the license and terms displayed on this marketplace. Commercial use rules should be reviewed before publication.'],
  ['Do the forms send real messages?', 'The marketplace forms and template booking forms are demonstrations in this MVP. They validate input and show success states; no email or backend submission is configured.'],
]

export default function FAQ() {
  return (
    <section className="section faq-page">
      <Seo title="FAQ — LOCAL SITE" description="Answers to common questions about LOCAL SITE website templates, customization and demo downloads." />
      <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
      <h1>Clear answers,<br /><em>before you begin.</em></h1>
      <div className="faq-list">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
