# Deployment Guide

## Heroku Deployment

### Prerequisites
- Heroku account
- Heroku CLI installed
- Git repository

### Steps

1. Create Heroku app
```bash
heroku create car-photo-enhancer
```

2. Add MySQL addon
```bash
heroku addons:create cleardb:ignite
```

3. Set environment variables
```bash
heroku config:set VITE_APP_ID=your-app-id
heroku config:set JWT_SECRET=your-secret
```

4. Deploy
```bash
git push heroku main
```

## Docker Deployment

### Build Image
```bash
docker build -t car-photo-enhancer .
```

### Run Container
```bash
docker run -p 3000:3000 \
  -e DATABASE_URL=mysql://... \
  -e VITE_APP_ID=... \
  car-photo-enhancer
```

## AWS Deployment

### Using Elastic Beanstalk
```bash
eb init -p node.js-18 car-photo-enhancer
eb create production
eb deploy
```

## Vercel Deployment

### Connect Repository
1. Go to vercel.com
2. Import repository
3. Set environment variables
4. Deploy

