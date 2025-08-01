# WEBTEMPLATE Project Context

## Overview
WEBTEMPLATE is a modern, production-ready website template specifically designed for local service businesses. Built with Next.js 14, TypeScript, and Tailwind CSS, it provides a complete foundation for creating high-performance, SEO-optimized websites for plumbers, electricians, HVAC contractors, landscapers, and other local service providers.

## Target Users
- **Primary**: Local service businesses including:
  - Plumbing companies
  - Electrical contractors
  - HVAC service providers
  - Landscaping businesses
  - Home repair services
  - Cleaning services
  - Pest control companies
  - Roofing contractors

- **Secondary**: Web developers and agencies building sites for local businesses

## Key Requirements
1. **SEO Excellence**
   - Local SEO optimization with structured data
   - Fast Core Web Vitals scores
   - Mobile-first responsive design
   - Semantic HTML structure
   - Dynamic sitemap generation

2. **Lead Generation**
   - Multiple contact forms with validation
   - Click-to-call functionality
   - Quote request system
   - Netlify Forms integration
   - Emergency contact options

3. **Performance**
   - Server-side rendering (SSR)
   - Image optimization
   - Lazy loading
   - Minimal JavaScript bundle
   - Edge-ready deployment

4. **Customization**
   - Easy branding updates
   - Modular component system
   - MDX content support
   - Theme configuration
   - Service-specific templates

## Tech Stack

### Core Framework
- **Next.js 14.2.22**: React framework with App Router
- **React 18**: UI library
- **TypeScript 5**: Type safety and better DX

### Styling & UI
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind class merging

### Content & SEO
- **MDX**: Markdown with JSX support
- **next-sitemap**: Automatic sitemap generation
- **JSON-LD**: Structured data for SEO

### Forms & Validation
- **Netlify Forms**: Server-side form handling
- **React Hook Form**: (planned) Form state management
- **Zod**: (planned) Schema validation

### Development
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: (planned) Git hooks
- **Commitlint**: (planned) Commit message linting

## Project Structure

```
WEBTEMPLATE/
   app/                    # Next.js App Router pages
      layout.tsx         # Root layout with metadata
      page.tsx           # Homepage
      about/             # About page
      services/          # Services listing & individual pages
      contact/           # Contact page with form
      blog/              # Blog listing & posts (MDX)
   components/            # React components
      ui/               # Core UI components
      layout/           # Layout components (Header, Footer)
      sections/         # Page sections (Hero, Features, etc.)
      forms/            # Form components
      mdx/              # MDX-specific components
   content/              # MDX content files
      services/         # Service descriptions
      blog/             # Blog posts
   lib/                  # Utility functions
      utils.ts          # Helper functions
      mdx.ts            # MDX processing
   config/               # Configuration files
      site.ts           # Site metadata & settings
   public/               # Static assets
      images/           # Image assets
   styles/               # Global styles
       globals.css       # Tailwind imports & custom CSS
```

## Component Architecture

### Design Principles
1. **Atomic Design**: Components follow atomic design methodology
2. **Composition**: Favor composition over inheritance
3. **Accessibility**: WCAG 2.1 AA compliance
4. **Performance**: Lazy loading and code splitting
5. **Reusability**: Generic, configurable components

### Component Categories
- **UI Components**: Buttons, cards, forms, modals
- **Layout Components**: Header, footer, navigation
- **Section Components**: Hero, features, testimonials
- **Business Components**: Service cards, contact forms, hours
- **SEO Components**: Structured data, meta tags

## Key Features

### Current Features
- Mobile-responsive design
- Service pages with MDX content
- Blog system with MDX
- Contact form with Netlify Forms
- SEO-ready structure
- Dark mode support (partial)
- Component-based architecture

### Planned Features
- Complete local SEO implementation
- Review/testimonial system
- Service area mapping
- Online booking/scheduling
- Multi-location support
- A/B testing framework
- Analytics integration
- Progressive Web App (PWA)

## Development Workflow

### Setup
1. Clone repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Customize site configuration
5. Add content and branding

### Development
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Run production build
- `npm run lint`: Run ESLint

### Deployment
- Optimized for Netlify deployment
- Supports Vercel and other platforms
- Environment variable configuration
- Automatic form handling with Netlify

## Performance Targets
- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1

## Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Android

## Accessibility Standards
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader optimization
- Color contrast ratios
- Focus indicators
- ARIA labels and landmarks

## Security Considerations
- No client-side API keys
- Server-side form validation
- Content Security Policy headers
- XSS protection
- HTTPS enforcement
- Regular dependency updates

## Future Roadmap
1. **Phase 1**: Documentation and developer experience
2. **Phase 2**: Component library expansion
3. **Phase 3**: Advanced SEO features
4. **Phase 4**: Business feature enhancements
5. **Phase 5**: Testing and quality assurance
6. **Phase 6**: Performance optimizations
7. **Phase 7**: Deployment and monitoring tools

This project context serves as the foundation for all development decisions and should be updated as the project evolves.