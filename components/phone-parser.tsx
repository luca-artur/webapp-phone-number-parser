"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Copy, Check, Download } from "lucide-react"

interface ParsedPhone {
  original: string
  isValid: boolean
  e164?: string
  country?: string
  countryCode?: string
  nationalNumber?: string
  error?: string
}

const countryData: Record<string, { name: string; pattern: RegExp }> = {
  "1": { name: "United States/Canada", pattern: /^1\d{10}$/ },
  "44": { name: "United Kingdom", pattern: /^44\d{10}$/ },
  "49": { name: "Germany", pattern: /^49\d{10,11}$/ },
  "33": { name: "France", pattern: /^33\d{9}$/ },
  "39": { name: "Italy", pattern: /^39\d{9,10}$/ },
  "34": { name: "Spain", pattern: /^34\d{9}$/ },
  "81": { name: "Japan", pattern: /^81\d{9,10}$/ },
  "86": { name: "China", pattern: /^86\d{11}$/ },
  "91": { name: "India", pattern: /^91\d{10}$/ },
  "61": { name: "Australia", pattern: /^61\d{9}$/ },
  "55": { name: "Brazil", pattern: /^55\d{10,11}$/ },
  "7": { name: "Russia", pattern: /^7\d{10}$/ },
  "82": { name: "South Korea", pattern: /^82\d{9,10}$/ },
  "31": { name: "Netherlands", pattern: /^31\d{9}$/ },
  "46": { name: "Sweden", pattern: /^46\d{9}$/ },
  "41": { name: "Switzerland", pattern: /^41\d{9}$/ },
  "43": { name: "Austria", pattern: /^43\d{10,11}$/ },
  "48": { name: "Poland", pattern: /^48\d{9}$/ },
  "351": { name: "Portugal", pattern: /^351\d{9}$/ },
  "32": { name: "Belgium", pattern: /^32\d{8,9}$/ },
  "972": { name: "Israel", pattern: /^972\d{9}$/ },
}

function cleanPhoneInput(input: string): string {
  let cleaned = input

  // Remove common labels and prefixes
  cleaned = cleaned.replace(/^(contact|phone|tel|fax|mobile|cell|office|home|work|main)[\s:]+/gi, "")
  
  // Remove trailing labels like "(main)", "(office)", "(home)", etc.
  cleaned = cleaned.replace(/\s*\((main|office|home|work|mobile|cell|fax)\)\s*$/gi, "")
  
  // Remove extensions: ;ext=XXX, ext:XXX, x123, extension 123, etc.
  cleaned = cleaned.replace(/\s*[;,]\s*ext[=:\s]*\d+/gi, "")
  cleaned = cleaned.replace(/\s+ext[=:\s]*\d+/gi, "")
  cleaned = cleaned.replace(/\s+x\d+$/gi, "")
  cleaned = cleaned.replace(/\s+extension\s*\d+/gi, "")
  
  // Handle (0) pattern - common in some countries, the 0 should be removed
  // e.g., 00972 (0)53 3218196 -> 00972 53 3218196
  cleaned = cleaned.replace(/\(0\)/g, "")
  
  // Handle single digit in parentheses like (7) - keep the digit
  // e.g., (7)/93103413 -> 7/93103413
  cleaned = cleaned.replace(/\((\d)\)/g, "$1")
  
  // Replace / with nothing (it's often used as separator)
  cleaned = cleaned.replace(/\//g, "")
  
  // Convert 00 prefix to + (international format)
  if (cleaned.startsWith("00") && !cleaned.startsWith("+")) {
    cleaned = "+" + cleaned.slice(2)
  }
  
  // Remove all remaining non-digit characters except leading +
  const hasPlus = cleaned.startsWith("+")
  cleaned = cleaned.replace(/\D/g, "")
  if (hasPlus) {
    cleaned = "+" + cleaned
  }
  
  return cleaned
}

function parsePhoneNumber(input: string, defaultRegion: string): ParsedPhone {
  const cleaned = cleanPhoneInput(input)
  let normalized = cleaned.startsWith("+") ? cleaned.slice(1) : cleaned

  if (!/^\d{7,15}$/.test(normalized)) {
    return {
      original: input,
      isValid: false,
      error: "Invalid format: Phone number must contain 7-15 digits",
    }
  }

  let countryCode = ""
  let country = ""
  let nationalNumber = normalized
  let hasCountryCode = false

  // Check if the number already starts with a known country code
  for (const code of Object.keys(countryData).sort((a, b) => b.length - a.length)) {
    if (normalized.startsWith(code)) {
      countryCode = code
      country = countryData[code].name
      nationalNumber = normalized.slice(code.length)
      hasCountryCode = true
      break
    }
  }

  // If no country code found and default region is set, prepend the default country code
  if (!hasCountryCode && defaultRegion && defaultRegion !== "none") {
    // Remove leading zero if present (common in local numbers)
    if (normalized.startsWith("0")) {
      normalized = normalized.slice(1)
    }
    normalized = defaultRegion + normalized
    countryCode = defaultRegion
    country = countryData[defaultRegion]?.name || "Unknown"
    nationalNumber = normalized.slice(defaultRegion.length)
  }

  const isValid = nationalNumber.length >= 6 && nationalNumber.length <= 12

  const e164 = `+${normalized}`

  return {
    original: input,
    isValid,
    e164,
    country: country || "Unknown",
    countryCode: countryCode || "Unknown",
    nationalNumber,
  }
}

const exampleInput = `Contact: 00972 (0)53 3218196
11/65423511
(7)/93103413
3128327648 (main)
6/72423884
906916697 ;ext=907
+1 (555) 123-4567
+49 30 12345678`

const regionOptions = [
  { code: "none", label: "No default (detect from input)" },
  // North America
  { code: "1", label: "+1 United States/Canada" },
  { code: "52", label: "+52 Mexico" },
  // Europe
  { code: "44", label: "+44 United Kingdom" },
  { code: "49", label: "+49 Germany" },
  { code: "33", label: "+33 France" },
  { code: "39", label: "+39 Italy" },
  { code: "34", label: "+34 Spain" },
  { code: "351", label: "+351 Portugal" },
  { code: "31", label: "+31 Netherlands" },
  { code: "32", label: "+32 Belgium" },
  { code: "41", label: "+41 Switzerland" },
  { code: "43", label: "+43 Austria" },
  { code: "46", label: "+46 Sweden" },
  { code: "47", label: "+47 Norway" },
  { code: "45", label: "+45 Denmark" },
  { code: "358", label: "+358 Finland" },
  { code: "48", label: "+48 Poland" },
  { code: "420", label: "+420 Czech Republic" },
  { code: "36", label: "+36 Hungary" },
  { code: "30", label: "+30 Greece" },
  { code: "353", label: "+353 Ireland" },
  { code: "7", label: "+7 Russia" },
  { code: "380", label: "+380 Ukraine" },
  { code: "40", label: "+40 Romania" },
  // Middle East
  { code: "972", label: "+972 Israel" },
  { code: "971", label: "+971 UAE" },
  { code: "966", label: "+966 Saudi Arabia" },
  { code: "90", label: "+90 Turkey" },
  // Asia
  { code: "81", label: "+81 Japan" },
  { code: "86", label: "+86 China" },
  { code: "852", label: "+852 Hong Kong" },
  { code: "886", label: "+886 Taiwan" },
  { code: "82", label: "+82 South Korea" },
  { code: "91", label: "+91 India" },
  { code: "65", label: "+65 Singapore" },
  { code: "60", label: "+60 Malaysia" },
  { code: "62", label: "+62 Indonesia" },
  { code: "63", label: "+63 Philippines" },
  { code: "66", label: "+66 Thailand" },
  { code: "84", label: "+84 Vietnam" },
  // Oceania
  { code: "61", label: "+61 Australia" },
  { code: "64", label: "+64 New Zealand" },
  // South America
  { code: "55", label: "+55 Brazil" },
  { code: "54", label: "+54 Argentina" },
  { code: "56", label: "+56 Chile" },
  { code: "57", label: "+57 Colombia" },
  // Africa
  { code: "27", label: "+27 South Africa" },
  { code: "234", label: "+234 Nigeria" },
  { code: "20", label: "+20 Egypt" },
]

export function PhoneParser() {
  const [input, setInput] = useState(exampleInput)
  const [output, setOutput] = useState<ParsedPhone[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [defaultRegion, setDefaultRegion] = useState("1")

  const handleParse = () => {
    setIsProcessing(true)
    setTimeout(() => {
      const lines = input
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
      const results = lines.map((line) => parsePhoneNumber(line, defaultRegion))
      setOutput(results)
      setIsProcessing(false)
    }, 300)
  }

  const handleCopyTXT = () => {
    const outputText = output
      .map((item) => (item.isValid ? item.e164 : item.original))
      .join("\n")
    navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyJSON = () => {
    const outputText = JSON.stringify(output, null, 2)
    navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadCSV = () => {
    const headers = ["original", "isValid", "e164", "country", "countryCode", "nationalNumber", "error"]
    const csvContent = [
      headers.join(","),
      ...output.map((row) =>
        headers
          .map((header) => {
            const value = row[header as keyof ParsedPhone]
            if (value === undefined) return ""
            const stringValue = String(value)
            if (stringValue.includes(",") || stringValue.includes('"') || stringValue.includes("\n")) {
              return `"${stringValue.replace(/"/g, '""')}"`
            }
            return stringValue
          })
          .join(",")
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "parsed_phone_numbers.csv"
    link.click()
    URL.revokeObjectURL(link.href)
  }

  const handleCopy = () => {
    const outputText = JSON.stringify(output, null, 2)
    navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Phone Number Parser & Validator
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
            Parse, validate, and format international phone numbers instantly. Get country detection, format validation,
            and structured output in seconds.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
                <span className="text-sm font-medium text-foreground">Input</span>
                <span className="text-xs text-muted-foreground">One number per line</span>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="h-64 w-full resize-none border-0 bg-background p-4 font-mono text-sm text-foreground focus:outline-none focus:ring-0"
                placeholder="Enter phone numbers (one per line)..."
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
                <span className="text-sm font-medium text-foreground">Output (E.164 Format)</span>
                {output.length > 0 && (
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" onClick={handleCopyTXT} className="h-7 gap-1.5 text-xs">
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      TXT
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleCopyJSON} className="h-7 gap-1.5 text-xs">
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      JSON
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleDownloadCSV} className="h-7 gap-1.5 text-xs">
                      <Download className="h-3 w-3" />
                      CSV
                    </Button>
                  </div>
                )}
              </div>
              <div className="h-64 overflow-auto bg-muted/20 p-4">
                {output.length === 0 ? (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    Click &quot;Parse Now&quot; to see results
                  </div>
                ) : (
                  <div className="space-y-1 font-mono text-sm">
                    {output.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 rounded px-2 py-1 ${
                          item.isValid ? "bg-primary/10 text-foreground" : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        <span className="font-medium">{item.isValid ? item.e164 : item.original}</span>
                        {item.isValid ? (
                          <span className="text-xs text-muted-foreground">{item.country}</span>
                        ) : (
                          <span className="text-xs">Invalid</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button size="lg" onClick={handleParse} disabled={isProcessing} className="h-14 gap-2 px-12 text-lg">
            <Zap className="h-6 w-6" />
            {isProcessing ? "Processing..." : "Parse Now"}
          </Button>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-3">
              <label htmlFor="default-region" className="text-sm font-medium text-foreground" title="Used when input numbers have no country code">
                Default Region:
              </label>
              <select
                id="default-region"
                value={defaultRegion}
                onChange={(e) => setDefaultRegion(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {regionOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {output.length > 0 && (
          <div className="mt-8 flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">{output.length}</div>
              <div className="text-sm text-muted-foreground">Total Numbers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{output.filter((r) => r.isValid).length}</div>
              <div className="text-sm text-muted-foreground">Valid</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-destructive">{output.filter((r) => !r.isValid).length}</div>
              <div className="text-sm text-muted-foreground">Invalid</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
