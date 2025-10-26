# Aroha Backend API

Backend server for the Aroha wellness application.

## Features

- RESTful API endpoints for user authentication and management
- Prakriti analysis processing and dosha calculation
- Personalized recommendations engine
- Progress tracking and analytics
- Integration with Firebase for data persistence
- AI-powered wellness insights (coming soon)

## Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Run development server
npm run dev

# Run production server
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Sign in user
- `POST /api/auth/signout` - Sign out user
- `POST /api/auth/refresh` - Refresh token

### Users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile
- `GET /api/users/:userId/progress` - Get user progress

### Analysis
- `POST /api/analysis/submit` - Submit analysis
- `POST /api/analysis/calculate` - Calculate dosha scores
- `GET /api/analysis/:userId/history` - Get analysis history

### Recommendations
- `GET /api/recommendations/diet/:dosha` - Get diet recommendations
- `GET /api/recommendations/lifestyle/:dosha` - Get lifestyle recommendations
- `GET /api/recommendations/schedule/:dosha` - Get schedule recommendations

### Progress
- `POST /api/progress/track` - Track daily progress
- `GET /api/progress/:userId/analytics` - Get analytics
- `GET /api/progress/:userId/charts` - Get chart data

## Tech Stack

- Node.js + Express
- Firebase Admin SDK
- JWT for authentication
- Rate limiting and security middleware

## Status

🚧 Currently in development - Endpoints are being implemented


