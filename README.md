# 🚗 Car Photo Enhancer

> Professional Photo Editing for Car Photography

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/bmcodex/Car-Photo-Enhancer?style=social)](https://github.com/bmcodex/Car-Photo-Enhancer)
[![GitHub Forks](https://img.shields.io/github/forks/bmcodex/Car-Photo-Enhancer?style=social)](https://github.com/bmcodex/Car-Photo-Enhancer)

## 📸 Overview

**Car Photo Enhancer** is a powerful web-based photo editing application specifically designed for car photography. It combines professional editing tools with an intuitive Instagram-style interface, making it easy for anyone to create stunning car photos.

Whether you're a car dealer, photographer, enthusiast, or content creator, Car Photo Enhancer provides everything you need to enhance your car photos with professional-grade filters and editing tools.

## ✨ Key Features

### 🎨 5 Professional Presets

Each preset is carefully crafted for specific car photography scenarios:

- **✨ Gloss** - High shine with bright highlights for a polished, showroom-ready look
- **🔷 Metallic Reflection** - Reflective surface effects perfect for metallic paint finishes
- **🎨 Deep Paint** - Rich, saturated colors that make your car's paint pop
- **🌃 Night Neon** - Dramatic neon glow effects for creative night photography
- **⚙️ Wheel Detail Enhancer** - Sharpness and contrast boost for stunning wheel details

### 🛡️ Advanced Editing Tools

#### License Plate Blurring
- Automatic detection of license plate areas
- Adjustable blur radius (5-50px)
- Real-time preview with area indicators
- Privacy protection for shared photos

#### Reflection & Glare Removal
- Intelligent reflection detection algorithm
- Adjustable intensity (0-100%)
- Preserves image quality while reducing unwanted reflections
- Perfect for photos taken in bright sunlight

#### Color Correction
- **Brightness**: Adjust lighting (-50 to +50)
- **Contrast**: Enhance definition and drama (-50 to +50)
- **Saturation**: Control color intensity (-50 to +100)
- **Temperature**: Warm/cool white balance adjustment
- Real-time preview of all adjustments

#### Before/After Comparison
- Interactive slider for side-by-side comparison
- Drag to compare different areas
- Touch-friendly on mobile devices
- Perfect for verifying your edits

### 🎬 Instagram-Style Interface

- Clean, intuitive design inspired by Instagram
- Smooth animations and transitions
- Responsive layout for all devices
- Dark and light theme support
- Drag-and-drop photo upload

### 📊 Edit History & Undo

- Track all applied edits
- Undo functionality to revert changes
- Visual indication of edit count
- Non-destructive editing

### 💾 High-Quality Export

- Download edited photos in JPEG format
- Adjustable quality settings
- Optimized file sizes
- Timestamp-based filenames

## 🚀 Getting Started

### Quick Start (5 Minutes)

```bash
# 1. Clone the repository
git clone https://github.com/bmcodex/Car-Photo-Enhancer.git
cd Car-Photo-Enhancer

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your settings

# 4. Setup database
pnpm db:push

# 5. Start development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

### First Edit

1. Sign in with your account
2. Upload a car photo (JPEG, PNG, or WebP)
3. Select a preset or adjust filters manually
4. Use before/after comparison to verify changes
5. Download your enhanced photo

## 📋 System Requirements

### Minimum
- Node.js 18+
- 512 MB RAM
- 500 MB storage
- Modern web browser

### Recommended
- Node.js 20+
- 2+ GB RAM
- 2+ GB storage
- Chrome, Firefox, Safari, or Edge (latest versions)

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **tRPC** - Type-safe API calls
- **Vite** - Lightning-fast build tool

### Backend
- **Express.js** - Web framework
- **Node.js** - JavaScript runtime
- **tRPC** - Type-safe RPC framework
- **Drizzle ORM** - Type-safe database ORM

### Database
- **MySQL/TiDB** - Relational database
- **Drizzle Kit** - Database migrations

### Image Processing
- **Canvas API** - Hardware-accelerated image manipulation
- **HTML5** - Modern web standards

## 📁 Project Structure

```
car-photo-enhancer/
├── client/                      # Frontend application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── PhotoEditor.tsx
│   │   │   ├── PhotoUploader.tsx
│   │   │   ├── LicensePlateBurrer.tsx
│   │   │   ├── ReflectionRemover.tsx
│   │   │   ├── ColorCorrection.tsx
│   │   │   ├── BeforeAfterSlider.tsx
│   │   │   └── AdvancedEditor.tsx
│   │   ├── pages/              # Page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   └── App.tsx             # Main application
│   ├── public/                 # Static assets
│   └── index.html              # HTML template
│
├── server/                      # Backend application
│   ├── db.ts                   # Database queries
│   ├── routers.ts              # tRPC procedures
│   └── _core/                  # Core framework
│
├── shared/                      # Shared code
│   ├── presets.ts              # Filter presets
│   ├── constants.ts            # Application constants
│   ├── types.ts                # TypeScript types
│   └── imageProcessing.ts      # Image utilities
│
├── drizzle/                     # Database
│   ├── schema.ts               # Database schema
│   └── migrations/             # Database migrations
│
└── docs/                        # Documentation
    ├── FEATURES.md
    ├── INSTALLATION.md
    ├── USAGE.md
    └── ARCHITECTURE.md
```

## 📖 Documentation

Comprehensive documentation is available:

- **[FEATURES.md](FEATURES.md)** - Detailed feature descriptions
- **[INSTALLATION.md](INSTALLATION.md)** - Installation and setup guide
- **[USAGE.md](USAGE.md)** - User guide and tutorials
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture and design
- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - API reference
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
- **[QUICK_START.md](QUICK_START.md)** - Quick start guide

## 🎯 Use Cases

### 👨‍💼 Car Dealers
Enhance vehicle photos for listings and increase buyer interest

### 📸 Photographers
Professional car photo editing with powerful tools

### 🚗 Enthusiasts
Share stunning car photos on social media

### 🏢 Insurance Companies
Document vehicle conditions with clarity

### 🚕 Rental Companies
Create professional fleet photos

## 🔒 Privacy & Security

- **Client-Side Processing**: All image processing happens in your browser
- **No Server Storage**: Photos are not stored on our servers
- **Secure Authentication**: OAuth 2.0 with Manus
- **HTTPS Encryption**: All data is encrypted in transit
- **License Plate Privacy**: Automatic blurring for sensitive information
- **GDPR Compliant**: Full compliance with data protection regulations

## 🚀 Performance

- **Sub-second Filter Application**: Instant feedback on adjustments
- **Smooth 60fps Animations**: Fluid user experience
- **Optimized Bundle Size**: Fast initial load
- **Hardware Acceleration**: GPU-accelerated image processing
- **Efficient Memory Usage**: Handles high-resolution images

## 🎨 Workflow

```
1. Upload Photo
    ↓
2. Choose Preset (or manual adjustments)
    ↓
3. Fine-tune Filters
    ↓
4. Remove Sensitive Info (blur plates)
    ↓
5. Compare Before/After
    ↓
6. Download Enhanced Photo
```

## 📊 Supported Formats

| Format | Extension | Quality | Notes |
|--------|-----------|---------|-------|
| JPEG   | .jpg      | High    | Recommended |
| PNG    | .png      | Lossless| Larger files |
| WebP   | .webp     | High    | Modern format |

**Maximum file size**: 50 MB

## 🔧 Development

### Available Commands

```bash
# Start development server
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

### Development Workflow

1. Make changes to source files
2. Changes auto-reload in browser
3. Type checking runs automatically
4. Test your changes
5. Commit with descriptive message

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind Labs** - For Tailwind CSS
- **tRPC Contributors** - For type-safe APIs
- **Community** - For feedback and contributions

## 📞 Support

Need help? Check out our resources:

- 📖 [Documentation](docs/)
- ❓ [FAQ](FAQ.md)
- 🐛 [Report a Bug](https://github.com/bmcodex/Car-Photo-Enhancer/issues)
- 💡 [Request a Feature](https://github.com/bmcodex/Car-Photo-Enhancer/issues)
- 📧 [Contact Support](SUPPORT.md)

## 🗺️ Roadmap

### Version 1.0 ✅
- ✅ 5 professional presets
- ✅ License plate blurring
- ✅ Reflection removal
- ✅ Color correction
- ✅ Before/after comparison

### Version 1.1 (Planned)
- Advanced AI filters
- Batch processing
- Preset customization
- Photo gallery

### Version 1.2 (Planned)
- Mobile app (iOS/Android)
- Real-time collaboration
- Advanced color grading
- Preset sharing

### Version 2.0 (Future)
- AI-powered auto-enhancement
- Social media integration
- Professional tools
- Developer API

## 📊 Statistics

- **50+ Git Commits** - Well-documented development history
- **15+ Documentation Files** - Comprehensive guides
- **5 Professional Presets** - Car-specific filters
- **7 Advanced Tools** - Complete editing suite
- **100% TypeScript** - Type-safe codebase

## 🎓 Learning Resources

This project demonstrates:

- Modern React patterns and hooks
- TypeScript best practices
- tRPC for type-safe APIs
- Tailwind CSS for responsive design
- Canvas API for image processing
- Database design with Drizzle ORM
- Full-stack development

## 🌟 Star Us!

If you find this project helpful, please consider giving it a star ⭐

## 📱 Connect With Us

- GitHub: [@bmcodex](https://github.com/bmcodex)
- Issues: [Report bugs and request features](https://github.com/bmcodex/Car-Photo-Enhancer/issues)

---

**Made with ❤️ by the Car Photo Enhancer Team**

*Enhancing car photos, one preset at a time.*
