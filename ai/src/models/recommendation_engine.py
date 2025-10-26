"""
Personalized Recommendation Engine
Generates diet, lifestyle, and wellness recommendations based on dosha analysis
"""

from typing import Dict, List
import numpy as np

class RecommendationEngine:
    """
    AI-powered recommendation engine for personalized wellness guidance
    """
    
    def __init__(self):
        self.dosha_knowledge_base = self._load_knowledge_base()
        
    def _load_knowledge_base(self) -> Dict:
        """Load Ayurvedic knowledge base for dosha-based recommendations"""
        return {
            'vata': {
                'diet': {
                    'favorable': ['warm cooked foods', 'sweet fruits', 'dairy', 'nuts', 'whole grains'],
                    'avoid': ['cold foods', 'raw foods', 'excessive caffeine', 'dry foods'],
                    'meals': [
                        {'time': 'breakfast', 'foods': ['porridge', 'warm milk', 'bananas']},
                        {'time': 'lunch', 'foods': ['warm cooked vegetables', 'rice', 'lentils']},
                        {'time': 'dinner', 'foods': ['soup', 'steamed vegetables', 'warm grains']}
                    ]
                },
                'lifestyle': ['gentle yoga', 'meditation', 'warm baths', 'regular routine'],
                'schedule': {
                    'wake': '6:00 AM',
                    'meals': ['7:30 AM', '12:00 PM', '6:00 PM'],
                    'sleep': '10:00 PM',
                    'exercises': ['yoga', 'walking', 'swimming']
                }
            },
            'pitta': {
                'diet': {
                    'favorable': ['cooling foods', 'sweet fruits', 'dairy', 'salads', 'whole grains'],
                    'avoid': ['spicy foods', 'alcohol', 'hot drinks', 'red meat'],
                    'meals': [
                        {'time': 'breakfast', 'foods': ['cool oatmeal', 'berries', 'coconut']},
                        {'time': 'lunch', 'foods': ['fresh salads', 'cool soups', 'whole grains']},
                        {'time': 'dinner', 'foods': ['light meals', 'vegetables', 'cool beverages']}
                    ]
                },
                'lifestyle': ['swimming', 'moderate exercise', 'cool environments', 'mindful breathing'],
                'schedule': {
                    'wake': '5:30 AM',
                    'meals': ['7:00 AM', '12:00 PM', '6:30 PM'],
                    'sleep': '10:00 PM',
                    'exercises': ['swimming', 'cycling', 'moderate yoga']
                }
            },
            'kapha': {
                'diet': {
                    'favorable': ['warm light foods', 'spices', 'legumes', 'honey', 'dry foods'],
                    'avoid': ['heavy foods', 'dairy', 'sweets', 'cold foods'],
                    'meals': [
                        {'time': 'breakfast', 'foods': ['light breakfast', 'spiced tea', 'dry fruits']},
                        {'time': 'lunch', 'foods': ['warm vegetables', 'spiced lentils', 'brown rice']},
                        {'time': 'dinner', 'foods': ['light soup', 'steamed vegetables', 'spiced grains']}
                    ]
                },
                'lifestyle': ['vigorous exercise', 'active sports', 'warm environments', 'detox practices'],
                'schedule': {
                    'wake': '5:00 AM',
                    'meals': ['7:00 AM', '12:00 PM', '6:00 PM'],
                    'sleep': '10:30 PM',
                    'exercises': ['running', 'gym', 'hiking', 'dancing']
                }
            }
        }
    
    def generate_diet_recommendations(self, dosha: str, user_preferences: Dict = None) -> Dict:
        """
        Generate personalized diet recommendations
        Args:
            dosha: Dominant dosha (vata, pitta, kapha)
            user_preferences: User dietary preferences
        Returns:
            Dictionary of recommended foods and meal plans
        """
        base_recommendations = self.dosha_knowledge_base.get(dosha, {}).get('diet', {})
        
        recommendations = {
            'favorable_foods': base_recommendations.get('favorable', []),
            'foods_to_avoid': base_recommendations.get('avoid', []),
            'meal_plan': base_recommendations.get('meals', []),
            'tips': self._get_diet_tips(dosha)
        }
        
        if user_preferences:
            recommendations = self._customize_recommendations(recommendations, user_preferences)
        
        return recommendations
    
    def generate_lifestyle_recommendations(self, dosha: str) -> Dict:
        """
        Generate personalized lifestyle recommendations
        Args:
            dosha: Dominant dosha (vata, pitta, kapha)
        Returns:
            Dictionary of lifestyle recommendations
        """
        return {
            'activities': self.dosha_knowledge_base.get(dosha, {}).get('lifestyle', []),
            'schedule': self.dosha_knowledge_base.get(dosha, {}).get('schedule', {}),
            'tips': self._get_lifestyle_tips(dosha)
        }
    
    def _get_diet_tips(self, dosha: str) -> List[str]:
        """Get diet-related tips for specific dosha"""
        tips_map = {
            'vata': [
                'Eat warm, moist, and nourishing foods',
                'Include healthy fats like ghee and olive oil',
                'Have regular meal times',
                'Drink warm water throughout the day'
            ],
            'pitta': [
                'Favor cooling and bitter foods',
                'Avoid spicy, oily, and fried foods',
                'Eat in peaceful environment',
                'Don\'t skip meals'
            ],
            'kapha': [
                'Choose light, warm, and dry foods',
                'Use spices liberally',
                'Eat largest meal at lunch',
                'Fast occasionally if comfortable'
            ]
        }
        return tips_map.get(dosha, [])
    
    def _get_lifestyle_tips(self, dosha: str) -> List[str]:
        """Get lifestyle tips for specific dosha"""
        tips_map = {
            'vata': [
                'Follow a consistent daily routine',
                'Practice gentle exercise and meditation',
                'Get adequate rest',
                'Stay warm and avoid over-stimulation'
            ],
            'pitta': [
                'Avoid excessive heat and sun',
                'Practice moderation in all activities',
                'Engage in calming activities',
                'Maintain work-life balance'
            ],
            'kapha': [
                'Engage in vigorous daily exercise',
                'Embrace variety and change',
                'Wake up early',
                'Stay active throughout the day'
            ]
        }
        return tips_map.get(dosha, [])
    
    def _customize_recommendations(self, recommendations: Dict, preferences: Dict) -> Dict:
        """Customize recommendations based on user preferences"""
        # TODO: Implement personalization logic
        return recommendations

