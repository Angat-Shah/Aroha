import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight, RefreshCcw, Leaf, Wind, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface PrakritiResults {
  scores: { vata: number; pitta: number; kapha: number };
  dominant: string;
  timestamp: string;
}

const doshaInfo = {
  vata: {
    icon: Wind,
    name: 'Vata',
    element: 'Air & Space',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'The energy of movement and change',
    characteristics: [
      'Creative and energetic',
      'Quick thinking and adaptable',
      'Tends toward anxiety when imbalanced',
      'Benefits from routine and grounding practices'
    ],
    recommendations: [
      'Eat warm, cooked foods',
      'Maintain regular sleep schedule',
      'Practice calming yoga and meditation',
      'Avoid excessive stimulation'
    ]
  },
  pitta: {
    icon: Flame,
    name: 'Pitta',
    element: 'Fire & Water',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: 'The energy of transformation and metabolism',
    characteristics: [
      'Strong leadership qualities',
      'Sharp intellect and focus',
      'Can become irritable when stressed',
      'Natural tendency toward perfectionism'
    ],
    recommendations: [
      'Favor cooling foods and drinks',
      'Avoid excessive heat and spicy foods',
      'Practice moderate exercise',
      'Cultivate patience and compassion'
    ]
  },
  kapha: {
    icon: Leaf,
    name: 'Kapha',
    element: 'Earth & Water',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'The energy of structure and stability',
    characteristics: [
      'Calm and stable nature',
      'Strong endurance and immunity',
      'Loyal and compassionate',
      'May resist change and become sluggish'
    ],
    recommendations: [
      'Engage in regular vigorous exercise',
      'Eat light, warm, and spicy foods',
      'Maintain active lifestyle',
      'Embrace variety and new experiences'
    ]
  }
};

const Results: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<PrakritiResults | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('aroha-prakriti');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      // If no results found, redirect to analysis
      navigate('/analysis');
    }
  }, [navigate]);

  if (!results) {
    return (
      <div className="min-h-screen calm-gradient flex items-center justify-center">
        <div className="text-center">
          <Brain className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
          <p className="text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    );
  }

  const dominantDosha = doshaInfo[results.dominant as keyof typeof doshaInfo];
  const DominantIcon = dominantDosha.icon;
  const totalQuestions = Object.values(results.scores).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen calm-gradient py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <DominantIcon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Your Prakriti Results</h1>
          <p className="text-muted-foreground">
            Based on ancient Ayurvedic principles, here's your unique mind-body constitution
          </p>
        </div>

        {/* Dominant Dosha Card */}
        <Card className="wellness-card mb-8 animate-fade-in-scale">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center space-x-3">
              <DominantIcon className={`w-8 h-8 ${dominantDosha.color}`} />
              <span>Primary Dosha: {dominantDosha.name}</span>
            </CardTitle>
            <p className="text-lg text-muted-foreground">{dominantDosha.element}</p>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-center mb-6 font-medium">
              {dominantDosha.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Key Characteristics:</h4>
                <ul className="space-y-2">
                  {dominantDosha.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Wellness Recommendations:</h4>
                <ul className="space-y-2">
                  {dominantDosha.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dosha Distribution */}
        <Card className="wellness-card mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle>Your Dosha Distribution</CardTitle>
            <p className="text-muted-foreground">
              Understanding your complete constitution helps create a balanced approach
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(results.scores).map(([dosha, score]) => {
                const info = doshaInfo[dosha as keyof typeof doshaInfo];
                const percentage = Math.round((score / totalQuestions) * 100);
                const Icon = info.icon;
                
                return (
                  <div key={dosha} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-5 h-5 ${info.color}`} />
                        <span className="font-medium capitalize">{info.name}</span>
                      </div>
                      <span className="text-sm font-medium">{percentage}%</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            onClick={() => navigate('/diet')}
            className="btn-wellness flex items-center space-x-2 px-8 py-3"
          >
            <span>Get Personalized Diet Plan</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={() => navigate('/schedule')}
            className="btn-secondary flex items-center space-x-2 px-8 py-3"
          >
            <span>Create Daily Routine</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate('/analysis')}
            className="flex items-center space-x-2 px-6 py-3"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Retake Assessment</span>
          </Button>
        </div>

        {/* Info Card */}
        <Card className="wellness-card mt-8 subtle-gradient animate-fade-in">
          <CardContent className="text-center pt-6">
            <h3 className="text-xl font-bold mb-3">Remember</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your prakriti is your natural constitution, while your current state (vikriti) 
              may vary due to lifestyle, stress, and environment. Regular assessment helps 
              maintain balance and optimal health.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;