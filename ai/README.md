# Aroha AI Engine

Machine learning models and inference engine for personalized wellness recommendations.

## Features

- **Prakriti Analysis Model**: ML model to predict user's dosha type
- **Recommendation Engine**: Generates personalized diet and lifestyle recommendations
- **Natural Language Processing**: Analyzes user feedback and progress notes

## Models

### 1. Prakriti Prediction Model

- Uses Random Forest Classifier to predict dominant dosha
- Trained on historical user data and expert-validated prakriti assessments
- Provides confidence scores for each dosha type

### 2. Recommendation Engine

- Knowledge-based system using Ayurvedic principles
- Personalized recommendations for diet, lifestyle, and daily routines
- Adapts to user preferences and feedback

## Setup

```bash
# Install dependencies
npm install

# Train the model
npm run train

# Run inference
npm run infer
```

## Training

The model requires:

- Historical user responses to prakriti questionnaires
- Expert-validated dosha labels
- User profile data (age, gender, lifestyle, etc.)

## Inference

To predict a user's dosha:

```javascript
const { predictDosha } = require("./src/inference/infer");

const result = await predictDosha(userData, responses);
console.log(`Predicted dosha: ${result.dominant_dosha}`);
console.log(`Confidence: ${(result.confidence * 100).toFixed(2)}%`);
```

## Future Enhancements

- Neural network models for better accuracy
- Deep learning for personalized recommendations
- NLP for analyzing user feedback
- Reinforcement learning for recommendation optimization

## Status

🚧 Currently in development - Models are being trained and optimized
