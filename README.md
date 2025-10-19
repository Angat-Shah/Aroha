# AROHA - Indian Health Wellness & Psychology Capstone WebApp

**Aroha** is an intelligent health and wellness web application developed for the Indian Health Wellness and Psychology (IHWP) subject. It focuses on Ayurvedic principles of body constitution (Prakriti) to promote holistic well-being combining traditional wisdom with digital innovation.

The app allows users to:
- Discover their Prakriti type (Vata Pitta Kapha)
- Receive personalized diet and lifestyle recommendations
- Track daily habits routines and reminders
- Maintain wellness consistency through follow-ups and feedback

"Aroha" means compassionate love — the essence of caring for oneself physically mentally and emotionally.

## Objective
To create a digital platform that helps users understand their mind–body constitution manage lifestyle patterns and maintain balance using Ayurvedic and psychological insights.

## Core Features

### 1. User Profile
- Collects personal and health details (age gender body type diet sleep etc.)
- Allows users to update data anytime

### 2. Prakriti Analysis
- Interactive Q/A-based assessment modeled on Ayurvedic parameters
- Determines dominant Dosha (Vata / Pitta / Kapha)
- Generates a Prakriti Report with insights on personality health tendencies and balancing tips

### 3. Diet Chart
- Personalized Dosha-based food recommendations
- Suggested meals for each part of the day
- Highlights foods to favor and avoid

### 4. Daily Schedule
- Suggests Ayurvedic lifestyle routines (Dinacharya)
- Helps users manage sleep hydration meditation and exercise
- Offers reminders for wellness tasks

### 5. Follow-up & Feedback
- Tracks user progress (mood sleep stress)
- Sends notifications and reminders
- Enables weekly reflection and improvement

### 6. Admin Panel
- Secure access for admin
- View and manage user data
- Analyze trends across users and feedback

## User Flow Diagram
Below is the simplified user journey:
<img width="800" height="960" alt="Aroha_UserFlow" src="https://github.com/user-attachments/assets/0804db01-463f-422c-958c-e8fc4594bdc3" />



## Tech Stack
| Layer          | Technology Used                         |
|----------------|-----------------------------------------|
| Frontend       | React.js, TypeScript, Tailwind CSS, shadcn/ui        |
| Backend        | Node.js + Express  |
| Database       | Firebase Firestore            |
| Authentication | Firebase Auth          |
| Notifications  | Firebase Cloud Messaging (FCM)|

## System Modules
| Module                    | Description                                   |
|---------------------------|-----------------------------------------------|
| Authentication            | Sign up, Login, Logout                          |
| Profile Management        | Stores and updates personal health data       |
| Assessment Engine         | Interactive Q/A-based Prakriti detection      |
| Diet & Lifestyle Recommender | Generates dynamic guidance                    |
| Progress Tracker          | Displays visual charts of well-being          |
| Admin Dashboard           | Data insights and user analytics              |

## Key Screens
- Login / Sign Up Page
- User Profile Form
- Prakriti Analysis Questionnaire
- Prakriti Result Page (Vata / Pitta / Kapha)
- Diet & Routine Recommendation Page
- Follow-up Tracker & Feedback Section
- Admin Dashboard

## Psychology & Ayurveda Integration
| Aspect                | Relevance                                      |
|-----------------------|-----------------------------------------------|
| Self-Assessment       | Promotes introspection and mindfulness        |
| Behavioral Awareness  | Encourages awareness of habits and routines   |
| Emotional Balance     | Suggests activities based on dosha temperament |
| Lifestyle Regulation  | Reinforces circadian wellness through reminders |

## Future Enhancements
- Integration with AI chatbot for health-related queries
- Voice-guided meditation and breathing sessions
- Integration with Apple Health / Google Fit
- Machine Learning model for improved dosha predictions
- Community feature for wellness discussions

## Getting Started (Developer Setup)

```bash
# Clone the repository
git clone https://github.com/Angat-Shah/Aroha.git

# Navigate to project directory
cd Aroha

# Install dependencies
npm install

# Run the app
npm run dev
```

## Conclusion
**Aroha** demonstrates how ancient Indian wellness principles can be translated into a **modern digital ecosystem**. It’s not just an app — it’s a **personal wellness companion** empowering users to understand themselves balance their lifestyle and nurture a healthier state of body and mind.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or contributions, please contact us via [GitHub Issues](https://github.com/Angat-Shah/Aroha/issues).
