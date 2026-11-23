import Seo from '../components/Seo'

export default function Legal() {
  return (
    <section className="section legal-page">
      <Seo title="License and Terms — LOCAL SITE" description="Review the LOCAL SITE demonstration license and marketplace terms." />
      <p className="eyebrow">LICENSE & TERMS</p>
      <h1>Simple, transparent terms.</h1>
      <div className="legal-content">
        <section>
          <h2>Demonstration access</h2>
          <p>LOCAL SITE is currently an MVP. Demo ZIP downloads are available without payment and are provided for evaluation and development. They do not activate a commercial transaction or create a real customer account.</p>
        </section>
        <section>
          <h2>Permitted use</h2>
          <p>When a commercial license is granted or agreed separately, it should clearly identify the permitted project and permitted users. Until then, demo files should be used only for evaluation, prototyping and local presentation.</p>
        </section>
        <section>
          <h2>Restrictions</h2>
          <p>You may not redistribute, resell or present standalone demo source files as a separate template product without a separate written license. Do not imply that LOCAL SITE endorses a third-party website, business or product.</p>
        </section>
        <section>
          <h2>Images and content</h2>
          <p>Template imagery and text are demonstration content. Before commercial publication, replace all demo content and verify that every image, font and asset is correctly licensed for the intended use.</p>
        </section>
        <section>
          <h2>Forms and payments</h2>
          <p>Checkout, contact and booking forms are demonstration interfaces. This MVP does not process payments, send email, issue files automatically or store submitted forms on a backend.</p>
        </section>
        <section>
          <h2>Updates to terms</h2>
          <p>These terms describe the current MVP and may be updated as real licensing, payment and delivery systems are introduced.</p>
        </section>
      </div>
    </section>
  )
}
