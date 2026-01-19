"use client"

import { Phone, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Phone className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">PhoneParser</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="/api"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            API
          </a>
          <Button asChild className="gap-2">
            <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer">
              <Coffee className="h-4 w-4" />
              Buy me a coffee
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
