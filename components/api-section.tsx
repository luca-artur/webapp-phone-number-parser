import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Zap, Database, CheckCircle2 } from "lucide-react"

export function APISection() {
  return (
    <section id="api" className="border-t bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Phone Number Parser API</h2>
            <p className="text-balance text-lg text-muted-foreground">
              Process thousands of phone numbers in bulk with our Apify Actor integration
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Bulk Processing Power</h3>
                  <p className="text-muted-foreground">
                    Normalize, validate, and format phone numbers at scale. Perfect for CRM imports, data cleanup,
                    and outreach tools.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild size="lg" className="gap-2 text-base">
                  <a
                    href="https://apify.com/luca-artur/phone-number-parser-and-formatter-bulk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    View on Apify
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">What It Does</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Extracts numbers from multi-line text</li>
                  <li>• Validates using libphonenumber-js</li>
                  <li>• Formats to E164, INTERNATIONAL, NATIONAL, RFC3966</li>
                  <li>• Stable output schema for automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">Input & Output</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Paste multi-line text with phone numbers</li>
                  <li>• Choose default region (ISO-2 country code)</li>
                  <li>• Select output formats</li>
                  <li>• Get clean dataset items per number</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h4 className="mb-4 font-semibold text-foreground">Example API Request</h4>
              <div className="overflow-x-auto rounded-lg bg-background p-4">
                <pre className="text-xs text-foreground">
                  <code>{`curl -X POST "https://api.apify.com/v2/acts/luca-artur~phone-number-parser/run-sync-get-dataset-items?token=YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "numbersText": "+1 (212) 555-0100 x12\\n0049 (0)30 1234567 ext 99",
    "defaultRegion": "US",
    "outputFormats": ["E164", "INTERNATIONAL"]
  }'`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h4 className="mb-3 font-semibold text-foreground">Typical Workflow</h4>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>1. Paste phone numbers from spreadsheets or CRM exports</li>
              <li>2. Set your default region for numbers without country codes</li>
              <li>3. Run the actor in Apify</li>
              <li>4. Download clean, normalized formats ready for imports</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
