# Code Style & Conventions

## TypeScript Configuration
- **Target**: ES6
- **Strict mode**: Enabled
- **Path mapping**: `@/*` points to root directory
- **JSX**: preserve mode for Next.js

## Component Conventions
- **File naming**: PascalCase for components (`HeroSection.tsx`)
- **Export style**: Default exports for components
- **Client components**: Use `"use client"` directive when needed
- **Props interfaces**: Named with `Props` suffix

## Styling Conventions
- **CSS Framework**: Tailwind CSS with custom component variants
- **Component library**: Radix UI primitives
- **Utility function**: `cn()` for class name merging
- **Responsive**: Mobile-first approach with `sm:`, `lg:` breakpoints

## State Management
- **Local state**: React `useState` for component state
- **Forms**: React Hook Form with Zod validation
- **Error handling**: Currently using `alert()` (should be improved to toast)

## Import Organization
- **Internal imports**: Use `@/` path alias
- **Component imports**: Usually grouped by type (UI components, icons, etc.)
- **Type imports**: Use `type` keyword when importing types only

## Code Quality Standards
- **TypeScript**: Strict typing enabled
- **Linting**: Next.js ESLint configuration
- **No console.log**: Should be removed in production
- **Error boundaries**: Not implemented (potential improvement)