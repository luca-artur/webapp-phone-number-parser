import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What phone number formats are supported?",
    answer:
      "Our parser supports a wide variety of formats including international format (+1 555 123 4567), national format ((555) 123-4567), and raw digits (5551234567). Numbers can include spaces, dashes, parentheses, and dots as separators.",
  },
  {
    question: "How accurate is the validation?",
    answer:
      "Our validation is highly accurate for format and structure validation. We check against known country code patterns, number length rules, and regional formatting standards. However, we cannot verify if a number is actually in service—that would require carrier lookup services.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "We support phone numbers from over 200 countries and territories worldwide. Our database includes all major country codes and their associated validation rules, including special handling for countries with multiple formats.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All phone number parsing happens directly in your browser using JavaScript. Your phone numbers are never sent to any server, stored, or logged. This ensures complete privacy and compliance with data protection regulations.",
  },
  {
    question: "Can I process bulk phone numbers?",
    answer:
      "Yes! Simply paste multiple phone numbers (one per line) into the input field and click Parse Now. There's no limit to how many numbers you can process at once, and the processing happens instantly in your browser.",
  },
  {
    question: "What output format do I get?",
    answer:
      "The parser returns structured JSON output for each phone number including: validity status, detected country, country code, national number, international format, national format, and phone type (mobile, landline, toll-free, etc.).",
  },
]

export function FAQSection() {
  return (
    <section className="border-t bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about our phone number parser.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
