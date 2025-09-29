# Suggested Commands for DoktorOnline

## Development Commands
```bash
# Start development server
npm run dev           # or pnpm dev

# Build for production  
npm run build         # or pnpm build

# Start production server
npm run start         # or pnpm start

# Run linting
npm run lint          # or pnpm lint
```

## System Commands (macOS)
```bash
# File operations
ls -la                # List files with details
find . -name "*.tsx"  # Find TypeScript React files
grep -r "pattern"     # Search in files

# Git operations
git status
git add .
git commit -m "message"
git push

# Package management
pnpm install          # Install dependencies
pnpm add package      # Add new package
pnpm remove package   # Remove package
```

## Project-Specific Tasks
```bash
# Check for unused dependencies
npx depcheck

# Type checking
npx tsc --noEmit

# Format code (if prettier configured)
npx prettier --write .
```