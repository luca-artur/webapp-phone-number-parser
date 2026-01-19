import { Header } from "@/components/header"
import { APISection } from "@/components/api-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'API Documentation - Phone Number Parser',
  description: 'Bulk phone number parsing API powered by Apify. Process thousands of phone numbers with our scalable API solution.',
}

export default function APIPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <APISection />
      </main>
      <Footer />
    </div>
  )
}
