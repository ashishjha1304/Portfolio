# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design using shadcn/ui components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type-Safe**: Full TypeScript support for better development experience
- **Contact Form**: Functional contact form with email integration
- **SEO Friendly**: Optimized for search engines

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Email Service**: EmailJS for contact form
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state

## 📦 Installation

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code linting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Services.tsx    # Services offered
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── Navigation.tsx  # Navigation bar
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── services/           # External service integrations
```

## 🚀 Deployment

This project can be deployed to any static hosting service like:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

To build for production:

```sh
npm run build
```

The built files will be in the `dist/` directory.

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!
