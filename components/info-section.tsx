import { CheckCircle, Globe, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Supports phone numbers from 200+ countries and territories with accurate country detection and formatting rules.",
  },
  {
    icon: CheckCircle,
    title: "Accurate Validation",
    description:
      "Advanced validation algorithms check number length, format patterns, and regional rules for reliable results.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description:
      "Parse thousands of phone numbers in seconds with our optimized processing engine. No rate limits.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "All processing happens in your browser. Your phone numbers never leave your device or get stored anywhere.",
  },
]

export function InfoSection() {
  return (
    <section className="border-t bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Use Our Phone Parser?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A powerful, free tool that analyzes international phone numbers and delivers structured, validated output
            for your applications.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
