# iBall Graphics Designer Portfolio

## Overview

This is a full-stack web application for a graphics designer portfolio named "iBall". The application features a modern, dark-themed design with smooth animations and interactive elements. It serves as a professional showcase for a graphics designer's work, skills, and contact information.

The application is built as a single-page application with multiple sections including a hero section, about section, skills showcase, portfolio gallery, and contact form. It emphasizes visual appeal with gradient designs, smooth scrolling, and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Strategy**: In-memory storage implementation with interface abstraction for easy database migration
- **API Design**: RESTful endpoints with proper error handling and validation

### Data Storage Solutions
- **Database**: PostgreSQL (configured but using in-memory storage currently)
- **ORM**: Drizzle ORM with Zod schema validation
- **Migration System**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless driver for PostgreSQL connections

### Authentication and Authorization
- Currently uses a basic user schema setup but no active authentication implementation
- Session management configured with connect-pg-simple for PostgreSQL session storage
- Ready for future authentication implementation with user management endpoints

### Development Environment
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: ESBuild for server bundling, Vite for client bundling
- **Type Checking**: TypeScript with strict mode enabled
- **Development Tools**: Replit-specific plugins for enhanced development experience

## External Dependencies

### Database and Storage
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Migration and schema management tool
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **@radix-ui/***: Collection of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx**: Utility for conditional CSS class names
- **embla-carousel-react**: Carousel component for portfolio gallery

### Data Management and Forms
- **@tanstack/react-query**: Server state management and API caching
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution environment for development
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancement

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command menu component
- **wouter**: Lightweight routing library
- **nanoid**: Unique ID generation
- **lucide-react**: Icon library

### Fonts and Assets
- **Google Fonts**: Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono
- **Font Awesome**: Icon library for UI elements
- **Unsplash/Pixabay**: External image sources for portfolio and about sections