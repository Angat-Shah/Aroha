import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Heart, Leaf, ArrowRight, Brain, Utensils, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arohaLogo from '@/assets/aroha-logo.png';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Prakriti Analysis",
      description: "Discover your unique mind-body constitution through ancient Ayurvedic wisdom"
    },
    {
      icon: Utensils,
      title: "Personalized Diet",
      description: "Receive custom meal plans based on your dosha and lifestyle"
    },
    {
      icon: Calendar,
      title: "Daily Routines",
      description: "Build healthy habits with personalized schedules and reminders"
    }
  ];

  return (
    <div className="min-h-screen calm-gradient">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-20 pb-16 text-center">
          <div className="animate-fade-in-scale">
            <img 
              src={arohaLogo} 
              alt="Aroha" 
              className="w-24 h-24 mx-auto mb-6 animate-wellness-glow" 
            />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Aroha
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-2">
              Nurture Your Nature
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover personalized wellness through the timeless wisdom of Ayurveda, 
              combined with modern insights for a balanced, healthy life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate('/onboarding')}
                className="btn-wellness flex items-center space-x-2 px-8 py-4 text-lg"
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/login')}
                className="btn-secondary px-8 py-4 text-lg"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Leaf className="w-12 h-12 text-primary animate-gentle-bounce" />
        </div>
        <div className="absolute top-40 right-16 opacity-20">
          <Heart className="w-8 h-8 text-accent animate-gentle-bounce" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Sparkles className="w-10 h-10 text-primary-glow animate-gentle-bounce" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Your Path to Wellness
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining ancient Ayurvedic principles with modern technology 
            to create a personalized wellness experience just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="wellness-card text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="wellness-card max-w-2xl mx-auto subtle-gradient">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Wellness?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands who have discovered their path to balanced living 
            through personalized Ayurvedic guidance.
          </p>
          <Button 
            onClick={() => navigate('/onboarding')}
            className="btn-wellness text-lg px-8 py-4"
          >
            Start Your Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;