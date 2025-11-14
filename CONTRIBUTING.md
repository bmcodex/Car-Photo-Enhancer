# Contributing to Car Photo Enhancer

Thank you for your interest in contributing to Car Photo Enhancer! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `pnpm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run type checking
pnpm type-check

# Build for production
pnpm build
```

## Code Style

- Use TypeScript for all new code
- Follow existing code patterns and conventions
- Use meaningful variable and function names
- Add comments for complex logic

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, etc.)
- Keep commits focused on a single change

## Pull Request Process

1. Ensure your code passes type checking
2. Test your changes thoroughly
3. Update documentation if needed
4. Create a descriptive pull request

## Project Structure

```
client/src/
  components/     - React components
  pages/         - Page components
  hooks/         - Custom React hooks
  utils/         - Utility functions
  
server/
  db.ts          - Database queries
  routers.ts     - tRPC procedures
  
shared/
  presets.ts     - Filter presets
  constants.ts   - Application constants
```

## Features

### Adding a New Preset

1. Add preset configuration to `shared/presets.ts`
2. Update the preset UI in `client/src/components/PhotoEditor.tsx`
3. Test the preset with various car photos

### Adding a New Filter

1. Create filter logic in `shared/imageProcessing.ts`
2. Add UI controls in the appropriate component
3. Update types if needed

## Testing

- Test your changes with various image sizes
- Test on different browsers
- Test responsive design on mobile devices

## Questions?

Feel free to open an issue for questions or suggestions.

