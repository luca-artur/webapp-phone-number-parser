import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Cookie Policy - Phone Number Parser",
  description: "Information about cookies and tracking on our website",
}

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="mb-8 text-4xl font-bold text-foreground">Cookie Policy</h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-foreground">
              <div>
                <h2 className="mb-2 text-2xl font-semibold">What Are Cookies?</h2>
                <p className="text-sm leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">How We Use Cookies</h2>
                <p className="text-sm leading-relaxed">
                  This website has a minimal cookie footprint. We prioritize your privacy and do not use cookies for tracking, analytics, or advertising purposes.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">Types of Cookies We Use</h2>
                
                <h3 className="mb-2 mt-4 text-xl font-medium">1. Essential Technical Cookies</h3>
                <p className="text-sm leading-relaxed">
                  Our hosting provider (Vercel) may set essential cookies required for the website to function properly. These cookies are necessary for:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance optimization</li>
                  <li>Basic functionality of the website</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  <strong>Purpose:</strong> Technical functionality<br />
                  <strong>Duration:</strong> Session or as required by Vercel<br />
                  <strong>Third Party:</strong> Vercel Inc.
                </p>

                <h3 className="mb-2 mt-4 text-xl font-medium">2. No Analytics or Tracking Cookies</h3>
                <p className="text-sm leading-relaxed">
                  We do not currently use any analytics, advertising, or tracking cookies. We do not use services like Google Analytics, Facebook Pixel, or similar tracking technologies.
                </p>

                <h3 className="mb-2 mt-4 text-xl font-medium">3. Local Storage</h3>
                <p className="text-sm leading-relaxed">
                  The phone number parser uses your browser's local storage to temporarily store your input and settings during your session. This data:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Never leaves your device</li>
                  <li>Is not transmitted to any servers</li>
                  <li>Can be cleared by closing your browser or clearing browser data</li>
                  <li>Is used only for your convenience (maintaining your input)</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">Third-Party Cookies</h2>
                <p className="text-sm leading-relaxed">
                  When you use external services linked from this website (such as Apify for bulk processing), those services may set their own cookies. We have no control over these cookies. Please refer to the respective privacy policies:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com/legal/privacy-policy</a></li>
                  <li>Apify: <a href="https://apify.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://apify.com/privacy-policy</a></li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">Managing Cookies</h2>
                <p className="text-sm leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  Please note that deleting or blocking cookies may impact your experience on this and other websites.
                </p>

                <h3 className="mb-2 mt-4 text-xl font-medium">How to Manage Cookies in Your Browser:</h3>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">Changes to This Cookie Policy</h2>
                <p className="text-sm leading-relaxed">
                  We may update this Cookie Policy from time to time. If we add analytics or tracking in the future, we will update this policy and notify users accordingly.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
                <p className="text-sm leading-relaxed">
                  If you have questions about our use of cookies, please contact us using the information in our Impressum.
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
