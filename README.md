# SQMC India – Official Website

The official website for **SQMC India**, an ISO certification consultancy providing expert guidance to organizations across industries since 2003.

🌐 **Live Site:** [sqmcindia.com](https://www.sqmcindia.com) &nbsp;

---

## About SQMC India

SQMC India is a team of seasoned consultants dedicated to helping organizations achieve and maintain ISO certification. Their services cover the entire certification journey — from initial gap analysis to post-certification ongoing support.

**Services offered:**
- Gap Analysis
- Documentation
- System Implementation
- Internal Audit
- Certification
- Training

---

## Tech Stack

| Technology | Usage |
|---|---|
| Next.js | React framework with file-based routing |
| TypeScript | Primary language (98.8% of codebase) |
| Vercel | Hosting & deployment |

---

## Project Structure

```
SQMCWebsite/
├── sqmc-website/       # Next.js application root
│   ├── app/ or pages/  # Route pages
│   ├── components/     # Reusable UI components
│   ├── public/         # Static assets
│   └── ...
└── .gitignore
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/SoumojitDalui/SQMCWebsite.git

# Navigate into the project directory
cd SQMCWebsite/sqmc-website

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm start
```

---

## Deployment

This project is deployed on **Vercel**. Every push to the `master` branch triggers an automatic deployment.

To deploy your own fork:

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Set the **root directory** to `sqmc-website`
3. Vercel will auto-detect Next.js — no additional configuration needed

---

## Pages

| Route | Description |
|---|---|
| `/` | Home – company overview and hero section |
| `/services/gap-analysis` | Gap Analysis service detail |
| `/services/documentation` | Documentation service detail |
| `/services/system-implementation` | System Implementation detail |
| `/services/internal-audit` | Internal Audit detail |
| `/services/certification` | Certification service detail |
| `/services/training` | Training service detail |
| `/contact` | Contact Us |
| `/costing-quote` | Get a Quote / Costing form |

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is proprietary. All rights reserved © SQMC India 2003–present.

---

## Contact

**SQMC India**
- Website: [sqmcindia.com](https://www.sqmcindia.com)
- Developer: [@SoumojitDalui](https://github.com/SoumojitDalui)
