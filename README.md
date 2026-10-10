# Krish Sharma – Personal Portfolio

[Live Demo](https://portfolio-roan-delta-35h5y5a69b.vercel.app/)

## About Me
Backend & Software Engineer with a passion for building scalable distributed systems, real‑time applications, and AI/ML solutions. Currently completing a Computer Science degree and exploring cloud‑native architectures.

## Tech Stack
- **Frontend:** React, TypeScript, Vite, CSS (glassmorphism, micro‑animations)
- **Backend:** Node.js, Express, PostgreSQL, Docker, Redis
- **DevOps:** GitHub Actions, Vercel, Docker Compose
- **AI/ML:** Python, PyTorch, Scikit‑learn

## Featured Projects
| Project | Demo | Repo |
|---------|------|------|
| **Job Orchestrator** | [Live](https://jobflowkrish.duckdns.org:3000/) | [GitHub](https://github.com/Krish2600/job-orchestrator) |
| **CodeCraft Studio** | [Live](https://codecraft-studio.vercel.app/) | [GitHub](https://github.com/Krish2600/codecraft) |
| **Nexus Compiler** | [Live](https://nexuscompiler.vercel.app/) | [GitHub](https://github.com/Krish2600/nexus-compiler) |
| **QuantFlow** | [Live](https://quantflow-8fu9.onrender.com/) | [GitHub](https://github.com/Krish2600/quantflow) |
| **FlipStudy** | [Live](https://flipstudy-three.vercel.app/) | [GitHub](https://github.com/Krish2600/flipstudy) |
| **MediMitra** | [Live](https://medimitra-ai.streamlit.app/) | [GitHub](https://github.com/Krish2600/medimitra) |
| **ChurnPredict** | [Live](https://churnpredict-5lq5.onrender.com/) | [GitHub](https://github.com/Krish2600/churn-probability-predictor) |

*(All projects display real screenshots in the UI.)*

## Getting Started
```bash
# Clone the repo
git clone https://github.com/Krish2600/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The dev server will be available at `http://localhost:5174`.

## Deployment
The site is deployed on **Vercel**. To deploy your own copy:
1. Push to a GitHub repository.
2. Sign in to Vercel (github.com/vercel) and import the repo.
3. Vercel automatically detects the Vite project and creates a production build.

## License
MIT © 2026 Krish Sharma

Live Demo: https://portfolio-roan-delta-35h5y5a69b.vercel.app/
This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
