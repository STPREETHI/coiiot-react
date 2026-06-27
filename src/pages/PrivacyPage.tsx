
export function PrivacyPage() {
  return (
    <section className="section legal">
      <p className="eyebrow">Last updated: May 29, 2025</p>
      <h1>Privacy Policy</h1>
      <p>
        CoiioT uses smart automation and IoT to track and manage coir production in real time. This notice explains
        how personal information may be collected, processed, stored, and protected when using the website, portal,
        or mobile application.
      </p>
      {[
        ["Information we collect", "Phone numbers, email addresses, passwords, application data, device identifiers, operating system details, IP address, browser information, and usage data."],
        ["How we process information", "Information is used to provide services, improve products, communicate with users, prevent fraud, maintain security, and comply with legal obligations."],
        ["Sharing and retention", "Information is shared only when required for service delivery, operations, compliance, or security. Records are retained for the period necessary to provide the services."],
        ["Your rights", "Depending on applicable law, users may request access, correction, deletion, or other actions regarding their personal information."],
      ].map(([title, text]) => (
        <article key={title}><h2>{title}</h2><p>{text}</p></article>
      ))}
      <p>Contact: <a href="mailto:support@coiiot.in">support@coiiot.in</a></p>
    </section>
  );
}

