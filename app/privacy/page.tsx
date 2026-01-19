import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - Phone Number Parser",
  description: "Privacy policy and data protection information",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="mb-8 text-4xl font-bold text-foreground">Privacy Policy / Datenschutzerklärung</h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-foreground">
              <div>
                <h2 className="mb-2 text-2xl font-semibold">1. Data Protection at a Glance</h2>
                <h3 className="mb-2 mt-4 text-xl font-medium">General Information</h3>
                <p className="text-sm leading-relaxed">
                  The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can personally identify you. This privacy policy complies with the EU General Data Protection Regulation (GDPR), the German Federal Data Protection Act (BDSG), and the German Telemedia Act (TMG).
                </p>
                <p className="text-sm leading-relaxed">
                  <strong>Data Controller:</strong> Luca & Artur - Luca Schwärmer, Anne-Frank-Platz 1, 26123 Oldenburg, Germany. Email: legal-compliance@stack-house.io
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">2. Data Collection on This Website</h2>
                <h3 className="mb-2 mt-4 text-xl font-medium">Who is responsible for data collection on this website?</h3>
                <p className="text-sm leading-relaxed">
                  Data processing on this website is carried out by the website operator. You can find their contact details in the section "Notice concerning the party responsible for this website" in our Impressum.
                </p>

                <h3 className="mb-2 mt-4 text-xl font-medium">How do we collect your data?</h3>
                <p className="text-sm leading-relaxed">
                  Your data is collected when you provide it to us. This could, for example, be data you enter into a contact form. Other data is collected automatically or after you consent to its collection by our IT systems when you visit the website. This data primarily consists of technical information (e.g., web browser, operating system, or time of page access).
                </p>

                <h3 className="mb-2 mt-4 text-xl font-medium">What do we use your data for?</h3>
                <p className="text-sm leading-relaxed">
                  Some data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior.
                </p>

                <h3 className="mb-2 mt-4 text-xl font-medium">Phone Number Processing</h3>
                <p className="text-sm leading-relaxed">
                  <strong>Important:</strong> All phone number parsing and formatting on this website happens entirely in your browser using client-side JavaScript. No phone numbers you enter are transmitted to our servers or stored by us. The data you input never leaves your device.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">3. Your Rights Under GDPR</h2>
                <p className="text-sm leading-relaxed">
                  Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li><strong>Right of Access (Art. 15 GDPR):</strong> You have the right to obtain confirmation as to whether personal data concerning you is being processed and, where that is the case, access to the personal data.</li>
                  <li><strong>Right to Rectification (Art. 16 GDPR):</strong> You have the right to obtain the rectification of inaccurate personal data concerning you without undue delay.</li>
                  <li><strong>Right to Erasure (Art. 17 GDPR):</strong> You have the right to obtain the erasure of personal data concerning you without undue delay under certain circumstances.</li>
                  <li><strong>Right to Restriction of Processing (Art. 18 GDPR):</strong> You have the right to obtain restriction of processing under certain circumstances.</li>
                  <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> You have the right to receive your personal data in a structured, commonly used and machine-readable format.</li>
                  <li><strong>Right to Object (Art. 21 GDPR):</strong> You have the right to object to the processing of your personal data on grounds relating to your particular situation.</li>
                  <li><strong>Right to Withdraw Consent (Art. 7(3) GDPR):</strong> If you have given consent to data processing, you can revoke this consent at any time for the future.</li>
                  <li><strong>Right to Lodge a Complaint (Art. 77 GDPR):</strong> You have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement.</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  To exercise any of these rights, please contact us at: legal-compliance@stack-house.io
                </p>
                <p className="text-sm leading-relaxed">
                  <strong>Competent Supervisory Authority for Germany:</strong><br />
                  Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
                  Prinzenstraße 5, 30159 Hannover, Germany<br />
                  <a href="https://lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://lfd.niedersachsen.de</a>
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">4. Hosting and Server Logs</h2>
                <h3 className="mb-2 mt-4 text-xl font-medium">External Hosting</h3>
                <p className="text-sm leading-relaxed">
                  This website is hosted by Vercel Inc. When you visit our website, Vercel collects various access logs. These logs may include:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>IP address</li>
                  <li>Date and time of request</li>
                  <li>Time zone difference to GMT</li>
                  <li>Content of request (specific page)</li>
                  <li>Access status/HTTP status code</li>
                  <li>Amount of data transferred</li>
                  <li>Website from which the request comes</li>
                  <li>Browser, language and version of browser software</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  For more information on Vercel's data processing, please see: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com/legal/privacy-policy</a>
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">5. Third-Party Services</h2>
                <h3 className="mb-2 mt-4 text-xl font-medium">Apify Integration</h3>
                <p className="text-sm leading-relaxed">
                  This website provides information about and links to Apify Actor services for bulk phone number processing. When you use the Apify API (not this website's front-end tool), your data is processed according to Apify's privacy policy: <a href="https://apify.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://apify.com/privacy-policy</a>
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">6. Cookies</h2>
                <p className="text-sm leading-relaxed">
                  This website currently does not use cookies for tracking or analytics purposes. Some cookies may be set by our hosting provider (Vercel) for technical functionality. For more information, see our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">7. Legal Basis for Data Processing</h2>
                <p className="text-sm leading-relaxed">
                  We process personal data only when we have a legal basis to do so under GDPR:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li><strong>Art. 6(1)(a) GDPR (Consent):</strong> When you have given explicit consent for specific processing purposes.</li>
                  <li><strong>Art. 6(1)(b) GDPR (Contract):</strong> When processing is necessary for the performance of a contract to which you are party.</li>
                  <li><strong>Art. 6(1)(f) GDPR (Legitimate Interests):</strong> When processing is necessary for the purposes of our legitimate interests, such as improving our service, preventing fraud, and ensuring network and information security, except where such interests are overridden by your interests or fundamental rights and freedoms.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">8. Data Retention</h2>
                <p className="text-sm leading-relaxed">
                  Since this website processes phone numbers entirely client-side in your browser, we do not retain any phone number data on our servers. Technical log data collected by our hosting provider (Vercel) is retained in accordance with their data retention policies and legal obligations. Typically, server logs are retained for a limited period necessary for security and technical troubleshooting purposes.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">9. International Data Transfers</h2>
                <p className="text-sm leading-relaxed">
                  Our hosting provider, Vercel Inc., is based in the United States. Data transfers to the United States and other third countries are conducted in compliance with GDPR requirements, including appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission. For more information about Vercel's data protection measures, please visit: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com/legal/privacy-policy</a>
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">10. Security Measures</h2>
                <p className="text-sm leading-relaxed">
                  We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>SSL/TLS encryption for all data transmission</li>
                  <li>Client-side processing of sensitive phone number data (data never leaves your browser)</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure hosting infrastructure provided by Vercel</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">11. Automated Decision-Making and Profiling</h2>
                <p className="text-sm leading-relaxed">
                  We do not use automated decision-making or profiling as defined in Art. 22 GDPR. The phone number validation performed by this tool is a technical function that does not involve personal data processing or automated decision-making affecting your legal rights.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">12. Contact</h2>
                <p className="text-sm leading-relaxed">
                  If you have questions about privacy or data protection, please contact us:<br />
                  <strong>Data Controller:</strong> Luca & Artur - Luca Schwärmer<br />
                  <strong>Address:</strong> Anne-Frank-Platz 1, 26123 Oldenburg, Germany<br />
                  <strong>Email:</strong> legal-compliance@stack-house.io
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
