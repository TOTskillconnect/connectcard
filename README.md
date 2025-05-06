# ConnectCard

A mobile-first, responsive landing page that acts as a branded Linktree-style hub for SkillConnect.

## Features

- Mobile-first design with responsive layout
- Centered header with profile image, name, and tagline
- Featured cards with call-to-action buttons
- Customizable button stack for external links
- Social media icons
- Configuration-driven content via JSON file
- Dark/light mode toggle with system preference detection and local storage persistence

## Tech Stack

- React
- Tailwind CSS
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Customization

All content is loaded from `connectcard.config.json`. Edit this file to customize:

- Profile information (name, tagline, image)
- Featured cards
- Link buttons
- Social media links

## Dark Mode

The application includes dark mode support that:

- Automatically detects user's system preferences
- Provides a toggle button to switch between light and dark mode
- Persists user preference in localStorage
- Applies appropriate styling for all components

## Deployment

This project is ready to deploy on Vercel or Netlify.

## License

MIT 