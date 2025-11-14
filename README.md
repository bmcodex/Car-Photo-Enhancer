# 🚗 Car Photo Enhancer

> **Professional Photo Editing for Car Photography**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/bmcodex/Car-Photo-Enhancer?style=social)](https://github.com/bmcodex/Car-Photo-Enhancer)
[![GitHub Forks](https://img.shields.io/github/forks/bmcodex/Car-Photo-Enhancer?style=social)](https://github.com/bmcodex/Car-Photo-Enhancer)
[![Commits](https://img.shields.io/badge/Commits-53-blue)](https://github.com/bmcodex/Car-Photo-Enhancer/commits/main)

---

## 🌐 Select Language / Wybierz Język

<div align="center">

### **[📖 English Documentation](README_EN.md)** | **[📖 Dokumentacja Polska](README_PL.md)**

</div>

---

## 📊 Project Statistics

<div align="center">

| Metric | Value |
|--------|-------|
| **Total Commits** | 53 🎯 |
| **Documentation Files** | 15+ 📚 |
| **React Components** | 7+ ⚛️ |
| **Photo Presets** | 5 🎨 |
| **Editing Tools** | 7 🛠️ |
| **Lines of Code** | 5000+ 💻 |
| **License** | MIT 📄 |
| **Repository** | GitHub 🔗 |

</div>

---

## ✨ Key Features at a Glance

### 🎨 **5 Professional Presets**
- ✨ **Gloss** - High shine with bright highlights
- 🔷 **Metallic Reflection** - Reflective surface effects
- 🎨 **Deep Paint** - Rich, saturated colors
- 🌃 **Night Neon** - Dramatic neon glow effects
- ⚙️ **Wheel Detail Enhancer** - Sharpness & contrast boost

### 🛡️ **Advanced Editing Tools**
- 🚫 License Plate Blurring (automatic detection)
- ✨ Reflection & Glare Removal
- 🎨 Color Correction (brightness, contrast, saturation)
- 📊 Before/After Comparison Slider
- 📜 Edit History with Undo
- 💾 High-Quality Export (JPEG)

### 🎬 **Instagram-Style Interface**
- Clean, intuitive design
- Smooth animations & transitions
- Responsive layout (mobile, tablet, desktop)
- Dark & light theme support
- Drag-and-drop file upload

---

## 🛠️ Technology Stack

```
Frontend:        React 19 + TypeScript + Tailwind CSS 4 + Vite
Backend:         Express.js + Node.js + tRPC
Database:        MySQL/TiDB + Drizzle ORM
Image Processing: Canvas API (GPU-accelerated)
```

---

## 🚀 Quick Start

### Installation (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/bmcodex/Car-Photo-Enhancer.git
cd Car-Photo-Enhancer

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local

# 4. Setup database
pnpm db:push

# 5. Start development server
pnpm dev
```

Visit: **http://localhost:3000**

### First Edit

1. Sign in to your account
2. Upload a car photo (JPEG, PNG, or WebP)
3. Select a preset or adjust filters manually
4. Use before/after comparison to verify changes
5. Download your enhanced photo

---

## 📁 Project Structure

```
car-photo-enhancer/
├── client/                    # Frontend (React)
│   ├── src/components/       # UI Components
│   ├── src/pages/            # Page Components
│   ├── src/hooks/            # Custom Hooks
│   └── src/utils/            # Utilities
├── server/                    # Backend (Express)
│   ├── db.ts                 # Database Queries
│   └── routers.ts            # tRPC Procedures
├── shared/                    # Shared Code
│   ├── presets.ts            # Filter Presets
│   ├── constants.ts          # Constants
│   └── types.ts              # TypeScript Types
├── drizzle/                   # Database
│   └── schema.ts             # Database Schema
└── docs/                      # Documentation
```

---

## 📊 Supported Image Formats

| Format | Extension | Quality | Notes |
|--------|-----------|---------|-------|
| JPEG   | .jpg      | High    | Recommended |
| PNG    | .png      | Lossless| Larger files |
| WebP   | .webp     | High    | Modern format |

**Maximum file size:** 50 MB

---

## 🔧 Available Commands

```bash
pnpm dev              # Start development server
pnpm type-check       # TypeScript checking
pnpm build            # Build for production
pnpm start            # Start production server
pnpm db:push          # Database migrations
pnpm db:generate      # Generate database types
pnpm clean            # Clean build artifacts
```

---

## 🎯 Use Cases

- 👨‍💼 **Car Dealers** - Enhance vehicle photos for listings
- 📸 **Photographers** - Professional car photo editing
- 🚗 **Enthusiasts** - Share stunning car photos on social media
- 🏢 **Insurance Companies** - Document vehicle conditions
- 🚕 **Rental Companies** - Create professional fleet photos

---

## 🔒 Privacy & Security

- ✅ Client-side image processing (no server uploads)
- ✅ OAuth 2.0 authentication (Manus)
- ✅ HTTPS encryption for all data
- ✅ Automatic license plate blurring
- ✅ GDPR compliant
- ✅ No photo storage on servers

---

## 🚀 Performance Metrics

- ⚡ Filter application: < 500ms
- 🎬 Smooth 60fps animations
- 📦 Optimized bundle size
- 🖥️ GPU-accelerated processing
- 💾 Efficient memory management

---

## 📚 Documentation

Complete documentation is available in two languages:

### 📖 **Full Documentation**
- **[README_EN.md](README_EN.md)** - English Version (388 lines)
- **[README_PL.md](README_PL.md)** - Polish Version (388 lines)

### 📋 **Additional Guides**
- [FEATURES.md](FEATURES.md) - Detailed feature descriptions
- [QUICK_START.md](QUICK_START.md) - 5-minute quick start
- [INSTALLATION.md](INSTALLATION.md) - Installation guide
- [USAGE.md](USAGE.md) - User guide & tutorials
- [ARCHITECTURE.md](ARCHITECTURE.md) - System architecture
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - API reference
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [FAQ.md](FAQ.md) - Frequently asked questions
- [ROADMAP.md](ROADMAP.md) - Product roadmap
- [SECURITY.md](SECURITY.md) - Security guidelines
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [TESTING.md](TESTING.md) - Testing guide
- [PERFORMANCE.md](PERFORMANCE.md) - Performance optimization
- [COMPLIANCE.md](COMPLIANCE.md) - Compliance & legal
- [SUPPORT.md](SUPPORT.md) - Support resources

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind Labs** - For Tailwind CSS
- **tRPC Contributors** - For type-safe APIs
- **Community** - For feedback and contributions

---

## 📞 Support

Need help? Check out our resources:

- 📖 [Documentation](docs/)
- ❓ [FAQ](FAQ.md)
- 🐛 [Report a Bug](https://github.com/bmcodex/Car-Photo-Enhancer/issues)
- 💡 [Request a Feature](https://github.com/bmcodex/Car-Photo-Enhancer/issues)
- 📧 [Contact Support](SUPPORT.md)

---

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

---

## 📊 Project Highlights

| Category | Details |
|----------|---------|
| **Language** | TypeScript (100%) |
| **Frontend Framework** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **API** | tRPC (type-safe) |
| **Database** | MySQL/TiDB |
| **Image Processing** | Canvas API |
| **Authentication** | OAuth 2.0 |
| **Deployment** | Ready for production |

---

## 🌟 Star Us!

If you find this project helpful, please consider giving it a star ⭐

---

## 📱 Connect With Us

- **GitHub:** [@bmcodex](https://github.com/bmcodex)
- **Repository:** [Car-Photo-Enhancer](https://github.com/bmcodex/Car-Photo-Enhancer)
- **Issues:** [Report bugs and request features](https://github.com/bmcodex/Car-Photo-Enhancer/issues)

---

<div align="center">

### **Made with ❤️ by the Car Photo Enhancer Team**

*Enhancing car photos, one preset at a time.*

---

**[📖 English Documentation](README_EN.md)** | **[📖 Dokumentacja Polska](README_PL.md)**

</div>
