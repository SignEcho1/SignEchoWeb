# frontend

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

This is what the working directory should look like

SignEcho/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── InputSelector.tsx
│   │   ├── SignLanguageToText.tsx
│   │   ├── TextToSignLanguage.tsx
│   │   ├── AudioVideoToText.tsx
│   │   ├── VideoPlayer.tsx
│   ├── context/
│   │   └── CommunicationContext.ts (for managing different input/output states)
│   ├── pages/
│   │   ├── Home.tsx
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
├── tailwind.config.js
├── tsconfig.json
├── bunfig.toml
└── package.json

