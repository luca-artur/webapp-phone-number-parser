import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Phone Number Parser",
  description: "Terms and conditions for using the Phone Number Parser service",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="mb-8 text-4xl font-bold text-foreground">Terms of Service</h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-foreground">
              <div>
                <h2 className="mb-2 text-2xl font-semibold">1. Acceptance of Terms</h2>
                <p className="text-sm leading-relaxed">
                  By accessing and using this Phone Number Parser website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">2. Use License</h2>
                <p className="text-sm leading-relaxed">
                  Permission is granted to use this phone number parsing tool for personal and commercial purposes, subject to the following conditions:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>The service is provided "as is" for phone number validation and formatting</li>
                  <li>You may not attempt to reverse engineer or exploit the tool</li>
                  <li>You may not use the service for illegal purposes or to violate any laws</li>
                  <li>Bulk processing via API is subject to Apify's terms of service</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">3. Service Description</h2>
                <p className="text-sm leading-relaxed">
                  This website provides a free phone number parsing and validation tool that:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Validates international phone numbers</li>
                  <li>Formats phone numbers to E.164 standard</li>
                  <li>Detects country codes and validates formats</li>
                  <li>Processes data entirely in your browser (client-side)</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  No phone numbers are transmitted to or stored on our servers.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">4. Disclaimer of Warranties</h2>
                <p className="text-sm leading-relaxed">
                  The service is provided "as is" without any warranties, expressed or implied. We make no guarantees regarding:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>The accuracy of phone number validation</li>
                  <li>The availability or uptime of the service</li>
                  <li>The fitness for any particular purpose</li>
                  <li>That the service will be error-free or uninterrupted</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  You use this tool at your own risk. Always verify critical data independently.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">5. Limitation of Liability</h2>
                <p className="text-sm leading-relaxed">
                  <strong>General Limitations:</strong> To the maximum extent permitted by applicable law, in no event shall Stack-House.io, Luca & Artur - Luca Schwärmer, or any of its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, damages for loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Your access to or use of or inability to access or use the service</li>
                  <li>Any conduct or content of any third party on the service</li>
                  <li>Any content obtained from the service</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  <strong>Statutory Liability:</strong> Nothing in these Terms of Service shall exclude or limit liability for:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Death or personal injury caused by negligence</li>
                  <li>Fraud or fraudulent misrepresentation</li>
                  <li>Any liability that cannot be excluded or limited under applicable law</li>
                  <li>Liability under the German Product Liability Act (Produkthaftungsgesetz)</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  <strong>Germany-Specific Liability:</strong> In accordance with German law (§§ 280, 281, 283, 311a BGB), we are liable for damages resulting from injury to life, limb, or health that are based on a negligent or intentional breach of duty by us or one of our legal representatives or vicarious agents. For other damages based on a grossly negligent breach of duty by us or one of our legal representatives or vicarious agents, as well as for damages based on the breach of essential contractual obligations (cardinal obligations), our liability is limited to typical and foreseeable damages for the respective contract.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">6. Third-Party Services</h2>
                <p className="text-sm leading-relaxed">
                  This website provides links to third-party services (such as Apify) for bulk processing. Your use of those services is governed by their respective terms of service:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Apify Terms: <a href="https://apify.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://apify.com/terms-of-use</a></li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">7. Privacy and Data</h2>
                <p className="text-sm leading-relaxed">
                  All phone number processing on this website happens in your browser. We do not collect, store, or transmit your phone number data. For more information, please see our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">8. Modifications to Service</h2>
                <p className="text-sm leading-relaxed">
                  We reserve the right to modify or discontinue the service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">9. Governing Law</h2>
                <p className="text-sm leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Germany, without regard to its conflict of law provisions. The place of jurisdiction for all disputes arising from or in connection with these Terms of Service is Oldenburg, Germany, provided that the user is a merchant, a legal entity under public law, or a special fund under public law.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">10. Consumer Rights (EU and German Law)</h2>
                <h3 className="mb-2 mt-4 text-xl font-medium">Right of Withdrawal (Widerrufsrecht)</h3>
                <p className="text-sm leading-relaxed">
                  If you are a consumer (Verbraucher) within the meaning of German law and the EU Consumer Rights Directive, you may have a right to withdraw from certain contracts within 14 days. However, since this is a free online tool and no contract for paid services is concluded through this website, the right of withdrawal does not apply to the use of this tool. If you purchase services through linked third-party providers (such as Apify), their respective withdrawal policies apply.
                </p>
                
                <h3 className="mb-2 mt-4 text-xl font-medium">EU Online Dispute Resolution</h3>
                <p className="text-sm leading-relaxed">
                  The European Commission provides a platform for online dispute resolution (ODR) which can be accessed at: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>. We are not obligated or willing to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">11. Severability</h2>
                <p className="text-sm leading-relaxed">
                  If any provision of these Terms of Service is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not in any way be affected or impaired. Such invalid, illegal, or unenforceable provision shall be replaced by a valid, legal, and enforceable provision that comes closest to the intention underlying the invalid provision.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">12. Changes to Terms</h2>
                <p className="text-sm leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service. We recommend reviewing these terms periodically.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">13. Contact Information</h2>
                <p className="text-sm leading-relaxed">
                  For questions about these Terms of Service, please contact us:<br />
                  <strong>Stack-House.io - Luca & Artur - Luca Schwärmer</strong><br />
                  Anne-Frank-Platz 1<br />
                  26123 Oldenburg, Germany<br />
                  Email: legal-compliance@stack-house.io
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
