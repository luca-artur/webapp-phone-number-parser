import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Users, Database, Headphones, BarChart } from "lucide-react"

const useCases = [
  {
    icon: Users,
    title: "Lead Validation",
    description:
      "Validate phone numbers from lead generation campaigns before passing them to your sales team. Filter out invalid numbers early.",
  },
  {
    icon: Database,
    title: "CRM Data Cleaning",
    description:
      "Clean and standardize phone numbers in your CRM database. Ensure consistent formatting and identify duplicates.",
  },
  {
    icon: Headphones,
    title: "Support Tickets",
    description:
      "Parse customer phone numbers from support tickets to enable callback features and improve response times.",
  },
  {
    icon: BarChart,
    title: "Marketing Lists",
    description:
      "Validate and segment marketing contact lists by country and phone type for targeted campaigns.",
  },
]

export function UseCases() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Common Use Cases
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how teams use our phone number parser to streamline their workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <useCase.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
