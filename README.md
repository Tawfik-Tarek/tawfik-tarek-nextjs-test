# E-Commerce Shop - Next.js Implementation

## Project Overview

This project is an implementation of an e-commerce shopping website using Next.js 15 with App Router. The application features product browsing, detailed product views, and shopping cart functionality.

## Features Implemented

- **Home Page**: Displays a list of products with images, prices, and basic details
- **Product Details Page**: Shows comprehensive information about selected products
- **Cart Functionality**: Allows adding/removing items and displays a summary

## Technology Stack

### Core Technologies

- **Next.js 15**: Utilized for server-side rendering, routing, and overall application structure
- **TypeScript**: Implemented for type safety and improved developer experience
- **Zustand**: Selected for state management
- **Tailwind CSS**: Used for styling and responsive design

### Key Libraries

- **Native Fetch API**: For data fetching with Next.js built-in data fetching utilities
- **Lucide React**: For high-quality icons and visual elements
- **clsx**: For conditional class name construction

## Technical Decisions & Justifications

### Why Next.js 15 with App Router?

Next.js 15 provides a modern framework with improved performance, server components, and simplified routing through the App Router. This choice facilitates:

- SEO optimization through server-side rendering
- Better code organization with the new folder structure

### State Management: Why Zustand over Redux?

Zustand was chosen over Redux for several reasons:

1. **Simplicity**: Zustand has minimal boilerplate compared to Redux
2. **Performance**: Smaller bundle size and efficient re-renders
3. **TypeScript Integration**: Excellent type inference without excessive type declarations
4. **Hooks-based**: Naturally integrates with React's functional components

### Rendering Strategies

Different rendering strategies were implemented based on page requirements:

- **Home Page**: Server-Side Rendering (SSR) for better SEO and initial page load performance

- **Cart Page**: Client-Side Rendering (CSR) since it's heavily interactive and user-specific

## Code Architecture

The project follows a clean architecture pattern:

```
/app                   # App Router pages
/components            # Reusable UI components
  /ui                  # Basic UI elements
  /layout              # Layout components
  /products            # Product-specific components
  /cart                # Cart-related components
/lib                   # Utility functions and shared logic
/stores                # Zustand store definitions
/types                 # TypeScript type definitions
/public                # Static assets
```

## Running the Project

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```
