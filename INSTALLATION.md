# Installation Guide

## Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm
- MySQL database (local or remote)
- Git

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/bmcodex/Car-Photo-Enhancer.git
cd Car-Photo-Enhancer
```

### 2. Install Dependencies

```bash
pnpm install
```

Or with npm:
```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and update with your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
- `DATABASE_URL`: Your MySQL connection string
- `VITE_APP_ID`: Your OAuth application ID
- `JWT_SECRET`: A secure random string for session signing

### 4. Setup Database

```bash
pnpm db:push
```

This will create all necessary tables in your database.

### 5. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Production Deployment

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Docker Setup (Optional)

### Build Docker Image

```bash
docker build -t car-photo-enhancer .
```

### Run Docker Container

```bash
docker run -p 3000:3000 \
  -e DATABASE_URL="mysql://user:password@db:3306/car_photo_enhancer" \
  -e VITE_APP_ID="your-app-id" \
  -e JWT_SECRET="your-secret" \
  car-photo-enhancer
```

## Database Setup

### MySQL Connection String Format

```
mysql://username:password@host:port/database_name
```

### Example with Local MySQL

```
mysql://root:password@localhost:3306/car_photo_enhancer
```

### Example with Remote Database

```
mysql://user:password@db.example.com:3306/car_photo_enhancer
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
PORT=3001 pnpm dev
```

### Database Connection Error

1. Verify MySQL is running
2. Check connection string in `.env.local`
3. Ensure database exists or is created automatically

### Missing Dependencies

If you encounter missing dependencies:

```bash
pnpm install --force
pnpm db:push
```

### Build Errors

Clear cache and rebuild:

```bash
pnpm clean
pnpm install
pnpm build
```

## Development Commands

```bash
# Start dev server
pnpm dev

# Type checking
pnpm type-check

# Build for production
pnpm build

# Start production server
pnpm start

# Database migrations
pnpm db:push
pnpm db:generate

# Clean build artifacts
pnpm clean
```

## System Requirements

### Minimum
- CPU: 1 GHz processor
- RAM: 512 MB
- Storage: 500 MB

### Recommended
- CPU: 2+ GHz processor
- RAM: 2+ GB
- Storage: 2+ GB

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Next Steps

1. Read the [Features Documentation](FEATURES.md)
2. Check out [Contributing Guidelines](CONTRIBUTING.md)
3. Review [Usage Guide](USAGE.md)

