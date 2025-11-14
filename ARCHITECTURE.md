# Architecture Overview

## System Design

Car Photo Enhancer is built with a modern, scalable architecture using React, TypeScript, and tRPC.

## Technology Stack

### Frontend
- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks
- **API Client**: tRPC
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **API**: tRPC
- **Database ORM**: Drizzle ORM
- **Authentication**: OAuth 2.0 (Manus)

### Database
- **Type**: MySQL/TiDB
- **Migrations**: Drizzle Kit

## Project Structure

```
car-photo-enhancer/
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── PhotoEditor.tsx
│   │   │   ├── PhotoUploader.tsx
│   │   │   ├── LicensePlateBurrer.tsx
│   │   │   ├── ReflectionRemover.tsx
│   │   │   ├── ColorCorrection.tsx
│   │   │   ├── BeforeAfterSlider.tsx
│   │   │   └── AdvancedEditor.tsx
│   │   ├── pages/            # Page components
│   │   │   └── Home.tsx
│   │   ├── hooks/            # Custom React hooks
│   │   │   └── usePhotoEditor.ts
│   │   ├── utils/            # Utility functions
│   │   │   └── imageUtils.ts
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── public/               # Static assets
│   └── index.html            # HTML template
│
├── server/                    # Backend application
│   ├── db.ts                 # Database queries
│   ├── routers.ts            # tRPC procedures
│   └── _core/                # Core framework files
│
├── shared/                    # Shared code
│   ├── presets.ts            # Filter presets
│   ├── constants.ts          # Application constants
│   ├── types.ts              # TypeScript types
│   └── imageProcessing.ts    # Image processing utilities
│
├── drizzle/                   # Database
│   ├── schema.ts             # Database schema
│   └── migrations/           # Database migrations
│
└── docs/                      # Documentation
    ├── FEATURES.md
    ├── INSTALLATION.md
    ├── USAGE.md
    └── ARCHITECTURE.md
```

## Data Flow

### Image Upload Flow
```
User Upload
    ↓
PhotoUploader Component
    ↓
File Validation
    ↓
Convert to Data URL
    ↓
Pass to PhotoEditor
    ↓
Store in Component State
```

### Image Processing Flow
```
Original Image
    ↓
Select Preset/Adjust Filters
    ↓
Canvas API Processing
    ↓
Apply Filters
    ↓
Generate Data URL
    ↓
Display Preview
    ↓
User Downloads
```

### License Plate Blurring Flow
```
Original Image
    ↓
Load in Canvas
    ↓
Calculate Blur Area
    ↓
Apply Blur Filter
    ↓
Extract Image Data
    ↓
Generate Blurred Image
    ↓
Return Data URL
```

## Component Hierarchy

```
App
├── Home (Page)
│   ├── PhotoUploader
│   └── AdvancedEditor
│       ├── Tabs
│       ├── PhotoEditor
│       │   ├── Preset Grid
│       │   └── Filter Sliders
│       ├── LicensePlateBurrer
│       ├── ReflectionRemover
│       ├── ColorCorrection
│       └── BeforeAfterSlider
```

## State Management

### Component State
- Image URLs (original, current, edited)
- Filter values (brightness, contrast, etc.)
- Edit history
- UI state (active tab, preview mode)

### Custom Hooks
- `usePhotoEditor`: Manages photo editing state
- `useAuth`: Manages authentication state

## Image Processing Pipeline

### Filter Application
1. Load image into Canvas
2. Build filter string from settings
3. Apply filter via Canvas context
4. Extract image data
5. Convert to Data URL

### Supported Filters
- Brightness
- Contrast
- Saturation
- Hue rotation
- Blur
- Sepia (for temperature)

## API Architecture

### tRPC Procedures

#### Public Procedures
- `photos.list`: Get user photos
- `photos.getById`: Get photo by ID
- `photos.upload`: Upload new photo
- `photos.update`: Update photo metadata

#### Protected Procedures
- `auth.me`: Get current user
- `auth.logout`: User logout

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  openId VARCHAR(64) UNIQUE NOT NULL,
  name TEXT,
  email VARCHAR(320),
  loginMethod VARCHAR(64),
  role ENUM('user', 'admin'),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  lastSignedIn TIMESTAMP
);
```

### Photos Table
```sql
CREATE TABLE photos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT NOT NULL,
  originalImageUrl TEXT NOT NULL,
  editedImageUrl TEXT,
  presetName VARCHAR(64),
  title VARCHAR(255),
  description TEXT,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);
```

### Edit History Table
```sql
CREATE TABLE editHistory (
  id INT PRIMARY KEY AUTO_INCREMENT,
  photoId INT NOT NULL,
  userId INT NOT NULL,
  presetName VARCHAR(64) NOT NULL,
  filters TEXT,
  editedImageUrl TEXT,
  createdAt TIMESTAMP
);
```

## Performance Considerations

### Frontend
- **Lazy Loading**: Components load on demand
- **Memoization**: React.memo for expensive components
- **Canvas API**: Hardware-accelerated image processing
- **Efficient Rendering**: Minimal re-renders

### Backend
- **Connection Pooling**: MySQL connection reuse
- **Query Optimization**: Indexed database queries
- **Caching**: Session caching for users

### Image Processing
- **Client-Side**: All image processing happens in browser
- **Canvas API**: Hardware acceleration for filters
- **Efficient Formats**: JPEG compression for exports

## Security

### Authentication
- OAuth 2.0 via Manus
- Session-based authentication
- JWT token signing

### Data Protection
- HTTPS encryption
- Secure session cookies
- Input validation

### Privacy
- Client-side image processing
- No server-side image storage
- License plate blurring for privacy

## Scalability

### Horizontal Scaling
- Stateless API servers
- Database replication
- Load balancing

### Vertical Scaling
- Optimized database queries
- Efficient image processing
- Memory management

## Deployment

### Development
- Local development server
- Hot module reloading
- TypeScript type checking

### Production
- Optimized build output
- Minified CSS and JavaScript
- Asset optimization

## Future Enhancements

- Advanced AI-powered filters
- Batch processing
- Mobile app
- Real-time collaboration
- Advanced color grading
- Preset sharing
- Social media integration

