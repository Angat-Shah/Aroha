"""
Prakriti Analysis Model
Using machine learning to enhance dosha prediction accuracy
"""

import numpy as np
import tensorflow as tf
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

class PrakritiModel:
    """
    Machine learning model to predict user's Prakriti (dosha type)
    based on questionnaire responses and lifestyle data.
    """
    
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.is_trained = False
        
    def preprocess_features(self, user_data, responses):
        """
        Prepare features for model input
        Args:
            user_data: Dictionary of user profile data
            responses: List of questionnaire responses
        Returns:
            numpy array of features
        """
        features = []
        
        # User profile features
        features.append(user_data.get('age', 0))
        features.append(1 if user_data.get('gender') == 'male' else 0)
        features.append(user_data.get('height', 0))
        features.append(user_data.get('weight', 0))
        
        # Lifestyle features
        lifestyle_map = {'sedentary': 1, 'light': 2, 'moderate': 3, 'active': 4, 'intense': 5}
        features.append(lifestyle_map.get(user_data.get('lifestyle', 'sedentary'), 1))
        
        # Questionnaire responses
        features.extend([1 if r == 'vata' else 0 for r in responses])
        features.extend([1 if r == 'pitta' else 0 for r in responses])
        features.extend([1 if r == 'kapha' else 0 for r in responses])
        
        return np.array([features])
    
    def train(self, training_data, labels):
        """
        Train the model on historical data
        Args:
            training_data: Array of feature vectors
            labels: Array of dosha labels (vata, pitta, kapha)
        """
        X_train, X_test, y_train, y_test = train_test_split(
            training_data, labels, test_size=0.2, random_state=42
        )
        
        self.model.fit(X_train, y_train)
        self.is_trained = True
        
        # Calculate accuracy
        accuracy = self.model.score(X_test, y_test)
        print(f"Model training complete. Accuracy: {accuracy:.2%}")
        
    def predict(self, user_data, responses):
        """
        Predict the dominant dosha for a user
        Args:
            user_data: Dictionary of user profile data
            responses: List of questionnaire responses
        Returns:
            Dictionary with predicted dosha and confidence scores
        """
        if not self.is_trained:
            raise ValueError("Model must be trained before prediction")
        
        features = self.preprocess_features(user_data, responses)
        prediction = self.model.predict(features)[0]
        probabilities = self.model.predict_proba(features)[0]
        
        dosha_mapping = {0: 'vata', 1: 'pitta', 2: 'kapha'}
        
        return {
            'dominant_dosha': dosha_mapping[prediction],
            'confidence': float(probabilities[prediction]),
            'scores': {
                'vata': float(probabilities[0]),
                'pitta': float(probabilities[1]),
                'kapha': float(probabilities[2])
            }
        }


