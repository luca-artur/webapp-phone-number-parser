import { Header } from "@/components/header"
import { PhoneParser } from "@/components/phone-parser"
import { InfoSection } from "@/components/info-section"
import { UseCases } from "@/components/use-cases"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PhoneParser />
        <InfoSection />
        <UseCases />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
