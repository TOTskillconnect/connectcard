Create a responsive, mobile-first landing page called ConnectCard using React and Tailwind CSS. This page acts as a branded Linktree-style hub for SkillConnect.

✅ Key Features:

A centered header with a circular profile image, name ("SkillConnect"), and one-line tagline: "Hiring Simplified. Results Amplified."

3 to 4  featured cards at the top with a callout (e.g. “Join Early Adopter Program”) linking to https://skillconnect.app/early-adopter, "🔍 Team Vibe Checker – Know your team, hire who fits." , "🧠 Role Fit Predictor – Drop a title, see who fits." )

A stack of buttons with customizable text + URL loaded from a connectcard.config.json file

A row of social media icons (LinkedIn, Facebook) that link externally and open in new tabs

Tailwind-based layout with padding, spacing, hover effects, #FFB130 as accent color

All link data (profile, buttons, socials) should come from a config file to allow easy backend edits

Use clean, rounded button styles and responsive typography

Deploy-ready on Vercel or Netlify

Wrap components into a components/ folder for easy management

Mobile first design

connectcard/
├── public/
│   └── logo.jpg
├── components/
│   ├── Header.jsx
│   ├── LinkButton.jsx
│   ├── FeaturedCard.jsx
│   └── SocialIcons.jsx
├── connectcard.config.json
├── App.jsx or index.jsx
├── tailwind.config.js
└── package.json
