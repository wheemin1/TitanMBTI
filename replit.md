# Attack on Titan MBTI Quiz Application

## Overview

This is a full-stack web application that provides an Attack on Titan themed MBTI personality test. The application features a 39-question quiz with 5-point Likert scale responses, smooth scrolling between questions, real-time progress tracking, and character matching based on MBTI results. It's designed as a fan entertainment quiz rather than an official MBTI assessment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Attack on Titan theme variables
- **State Management**: React hooks with TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and scroll effects

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas for request/response validation

### Development Architecture
- **Monorepo Structure**: Shared code between client and server
- **Development Server**: Vite dev server with HMR
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **Type Safety**: Strict TypeScript configuration across all packages

## Key Components

### Quiz System
- **Question Flow**: Single-page application with smooth scrolling between questions
- **Progress Tracking**: Real-time progress bar showing completion percentage
- **Answer Management**: Ability to modify previous answers with navigation controls
- **Session Management**: Unique session IDs for tracking quiz attempts

### MBTI Calculation Engine
- **Scoring Algorithm**: Maps 39 questions to 4 MBTI dimensions (E/I, S/N, T/F, J/P)
- **Character Matching**: Associates MBTI types with Attack on Titan characters
- **Result Generation**: Provides detailed personality analysis and character descriptions

### User Interface
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Theme System**: Custom Attack on Titan color palette integrated with Tailwind
- **Accessibility**: ARIA labels and keyboard navigation support
- **Loading States**: Smooth transitions and loading indicators

### Data Storage
- **In-Memory Storage**: Development implementation using Map data structures
- **Database Schema**: PostgreSQL tables for users and quiz results
- **Result Persistence**: Stores answers, MBTI scores, and character matches
- **Statistics**: Aggregated data for quiz completion analytics

## Data Flow

1. **Quiz Initialization**: User starts quiz, generates unique session ID
2. **Question Navigation**: Smooth scrolling between questions with answer persistence
3. **Answer Collection**: 5-point Likert scale responses stored in session state
4. **MBTI Calculation**: Answers mapped to personality dimensions using scoring algorithm
5. **Character Matching**: MBTI type matched with Attack on Titan character
6. **Result Storage**: Complete quiz data saved to database with session ID
7. **Result Display**: Personality type, character match, and detailed analysis shown
8. **Social Sharing**: Generated share cards for social media distribution

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for UI elements

### Data Management
- **TanStack Query**: Server state management and caching
- **Drizzle ORM**: Type-safe database interactions
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Form state management and validation

### Development Tools
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Static type checking and improved developer experience
- **ESLint/Prettier**: Code formatting and linting (implied by project structure)

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds React app to static files in `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.js`
- **Asset Optimization**: Automatic code splitting and asset optimization

### Environment Configuration
- **Database URL**: PostgreSQL connection string via environment variable
- **Production Mode**: NODE_ENV-based configuration switching
- **Static File Serving**: Express serves built client files in production

### Database Management
- **Schema Migration**: Drizzle Kit for database schema management
- **Connection Pooling**: Neon serverless database handles connection management
- **Data Persistence**: PostgreSQL for production data storage

### Hosting Considerations
- **Single Server Deployment**: Express serves both API and static files
- **Database Hosting**: Neon Database provides serverless PostgreSQL
- **CDN Ready**: Static assets can be served from CDN for performance
- **Environment Variables**: Secure configuration management for sensitive data

The application follows a modern full-stack architecture with TypeScript throughout, ensuring type safety and maintainability. The quiz system is designed for smooth user experience with immediate feedback and the ability to modify answers, while the MBTI calculation provides entertainment value through character matching rather than clinical assessment.