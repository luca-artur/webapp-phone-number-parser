# Phone Number Parser & Validator

A powerful, privacy-first web application for parsing, validating, and formatting international phone numbers instantly. Process messy phone number data intelligently with support for 100+ countries.

**🚀 Live Demo:** [phonenumberparser.stack-house.io](https://phonenumberparser.stack-house.io)

---

## Why Phone Number Parser?

### For Users
- **100% Privacy-First**: All phone numbers are processed in your browser. Nothing is stored on our servers.
- **Zero Dependencies**: No sign-ups, no API keys required. Start parsing immediately.
- **Intelligent Parsing**: Automatically handles messy formats like "Contact: 00972 (0)53 3218196", "(7)/93103413", "906916697 ;ext=907"
- **Multiple Export Formats**: Copy results as TXT, JSON, or download as CSV
- **Smart Region Detection**: Set a default country to automatically format numbers without country codes

### For Developers
- **Free & Open Source**: MIT licensed, fully transparent code on GitHub
- **Easy Integration**: Embed the web tool or use the Apify Actor API for bulk processing
- **Well-Documented**: Clear legal compliance, privacy policy, and terms of service included
- **Professional Backend**: Built with Next.js 16, TypeScript, and React 19

---

## Features

✅ **Parse International Phone Numbers**
- Detects 150+ country codes automatically
- Validates phone number format and length
- Outputs in E.164 format (+1234567890)
- Returns structured data (country, country code, national number)

✅ **Intelligent Input Handling**
- Removes common labels (Contact:, Phone:, Tel:, Mobile:, etc.)
- Handles extensions (ext=123, x456, etc.)
- Removes special characters and formatting
- Converts 00 prefix to international + format
- Handles (0) patterns and slashes intelligently

✅ **Default Region Support**
- Set a default country for numbers without country codes
- 50+ popular countries in the dropdown
- Automatically removes leading zeros for local numbers

✅ **Multiple Export Options**
- **Copy TXT**: Simple line-separated E.164 numbers
- **Copy JSON**: Full structured data with all fields
- **Download CSV**: Excel/Sheets compatible spreadsheet format

✅ **Bulk Processing via API**
- Use our Apify Actor for enterprise-scale phone number processing
- Supports 1000s of numbers at once
- Perfect for lead validation, CRM data cleaning, and more

---

## Quick Start

### Web Version
1. Visit [phonenumberparser.stack-house.io](https://phonenumberparser.stack-house.io)
2. Paste your phone numbers (one per line)
3. Select a default region if needed (default: +1 USA/Canada)
4. Click "Parse Now"
5. Copy or download your results

### Local Development
```bash
# Clone the repository
git clone https://github.com/luca-artur/webapp-phone-number-parser.git
cd webapp-phone-number-parser

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## Use Cases

**Lead Validation**: Verify phone numbers in your contact lists before outreach
**CRM Data Cleaning**: Standardize phone number formats across your database
**Support Tickets**: Parse and validate customer phone numbers from support requests
**Marketing Lists**: Prepare phone number data for SMS marketing campaigns
**International Operations**: Handle phone numbers from multiple countries seamlessly
**Bulk Processing**: Use the Apify Actor API for processing thousands of numbers

---

## API Integration

For bulk processing of phone numbers at scale, use our **Apify Actor**:

🔗 [Phone Number Parser Apify Actor](https://apify.com/luca-artur/phone-number-parser-and-formatter-bulk)

The Apify integration allows you to:
- Process thousands of phone numbers automatically
- Integrate with your existing workflows
- Schedule recurring parsing jobs
- Export results in multiple formats

---

## Input Examples

The parser intelligently handles messy phone number formats:

```
Contact: 00972 (0)53 3218196
11/65423511
(7)/93103413
3128327648 (main)
6/72423884
906916697 ;ext=907
+1 (555) 123-4567
+49 30 12345678
```

All these will be parsed into clean E.164 format automatically.

---

## Legal & Privacy

- **Privacy Policy**: Full GDPR compliance, no data stored server-side
- **Terms of Service**: Clear terms for individual and commercial use
- **Cookie Policy**: Transparent about minimal cookie usage
- **Data Processing**: All phone numbers processed client-side only

📄 **Legal Pages:**
- [Privacy Policy](/privacy)
- [Terms of Service](/terms)
- [Cookie Policy](/cookies)

---

## Supported Countries

Phone numbers from 150+ countries are automatically detected, including:

**Americas:** USA, Canada, Mexico, Brazil, Argentina, Chile, Colombia

**Europe:** Germany, UK, France, Spain, Italy, Netherlands, Switzerland, Poland, Nordic countries, and more

**Asia:** Japan, China, India, South Korea, Singapore, Malaysia, Thailand, Vietnam, Philippines, Indonesia

**Middle East:** Israel, UAE, Saudi Arabia, Turkey

**Africa:** South Africa, Nigeria, Egypt

**Oceania:** Australia, New Zealand

---

## Technology Stack

- **Frontend**: React 19, Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Language**: TypeScript for type safety
- **Phone Parsing**: Custom intelligent parsing engine
- **Hosting**: Vercel Edge Network
- **Components**: shadcn/ui components

---

## Project Structure

```
├── app/
│   ├── page.tsx                 # Homepage
│   ├── api/page.tsx            # API documentation page
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── terms/page.tsx          # Terms of Service
│   ├── cookies/page.tsx        # Cookie Policy
│   └── layout.tsx              # Root layout
├── components/
│   ├── phone-parser.tsx        # Main parser component
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer with links
│   ├── info-section.tsx        # Features overview
│   ├── use-cases.tsx           # Use cases section
│   ├── faq-section.tsx         # FAQ accordion
│   ├── api-section.tsx         # API information
│   └── ui/                     # shadcn/ui components
├── lib/
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
└── styles/
    └── globals.css             # Global styles & design tokens
```

---

## How It Works

### Client-Side Processing
1. User enters phone numbers in the input area
2. Selects a default region if needed
3. Clicks "Parse Now"
4. JavaScript parses each number:
   - Cleans messy input (removes labels, extensions, special chars)
   - Detects country code from input or uses default
   - Validates phone number length
   - Generates E.164 format
5. Results displayed instantly in the browser
6. User can copy/export without server involvement

**Zero Server Storage**: Your phone numbers never leave your browser.

---

## Contributing

We welcome contributions! To get involved:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact & Support

**Project by:** Stack-House.io - Luca & Artur  
**Developers:** Luca Schwärmer  
**Email:** legal-compliance@stack-house.io  
**Location:** Oldenburg, Germany

**Links:**
- 🌐 [Website](https://phonenumberparser.stack-house.io)
- 📦 [Apify Actor](https://apify.com/luca-artur/phone-number-parser-and-formatter-bulk)
- 💻 [GitHub](https://github.com/luca-artur/webapp-phone-number-parser)
- 🔐 [Privacy Policy](https://phonenumberparser.stack-house.io/privacy)

---

## Roadmap

- [ ] Batch file upload support (CSV/Excel)
- [ ] Phone number verification via SMS
- [ ] Advanced filtering and sorting options
- [ ] Mobile app version
- [ ] Real-time validation webhooks
- [ ] Multi-language interface support

---

## FAQ

**Q: Is my data safe?**  
A: Yes! All processing happens in your browser. We don't store, transmit, or access your phone numbers.

**Q: Which countries are supported?**  
A: We support 150+ countries with automatic detection.

**Q: Can I use this for commercial purposes?**  
A: Yes! Check our Terms of Service for details on commercial use.

**Q: Can I process thousands of numbers?**  
A: Yes! Use our Apify Actor for bulk processing of large datasets.

**Q: Is there an API?**  
A: Yes! The Apify Actor provides API access for automated processing.

**Q: Do I need to create an account?**  
A: No! The web tool is completely free and requires no registration.

---

Made with ❤️ by Stack-House.io
