import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

const prakritiquestions = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    options: [
      { value: "vata", text: "Thin, light build, prominent joints" },
      { value: "pitta", text: "Medium build, well-proportioned, athletic" },
      { value: "kapha", text: "Large frame, sturdy build, tends to gain weight easily" }
    ]
  },
  {
    id: 2,
    question: "How is your appetite generally?",
    options: [
      { value: "vata", text: "Variable, sometimes forget to eat" },
      { value: "pitta", text: "Strong, regular, get irritable when hungry" },
      { value: "kapha", text: "Steady but can skip meals easily" }
    ]
  },
  {
    id: 3,
    question: "How do you typically sleep?",
    options: [
      { value: "vata", text: "Light sleeper, restless, dream a lot" },
      { value: "pitta", text: "Sound sleep, moderate duration, vivid dreams" },
      { value: "kapha", text: "Deep, long sleep, hard to wake up" }
    ]
  },
  {
    id: 4,
    question: "How do you handle stress?",
    options: [
      { value: "vata", text: "Get anxious and worried easily" },
      { value: "pitta", text: "Become irritable and impatient" },
      { value: "kapha", text: "Remain calm but may withdraw" }
    ]
  },
  {
    id: 5,
    question: "How would you describe your energy levels?",
    options: [
      { value: "vata", text: "Bursts of energy followed by fatigue" },
      { value: "pitta", text: "Steady, consistent energy throughout day" },
      { value: "kapha", text: "Slow to start but good endurance" }
    ]
  },
  {
    id: 6,
    question: "How do you learn best?",
    options: [
      { value: "vata", text: "Quick to grasp but may forget easily" },
      { value: "pitta", text: "Sharp intellect, good comprehension and memory" },
      { value: "kapha", text: "Slow to learn but excellent retention" }
    ]
  },
  {
    id: 7,
    question: "How do you react to weather?",
    options: [
      { value: "vata", text: "Dislike cold and wind, prefer warmth" },
      { value: "pitta", text: "Dislike heat, prefer cool weather" },
      { value: "kapha", text: "Dislike cold and damp, prefer warm and dry" }
    ]
  },
  {
    id: 8,
    question: "How would you describe your speaking style?",
    options: [
      { value: "vata", text: "Talk fast, animated, sometimes scattered" },
      { value: "pitta", text: "Clear, precise, direct communication" },
      { value: "kapha", text: "Slow, steady, thoughtful speech" }
    ]
  }
];

const Analysis: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const progress = ((currentQuestion + 1) / prakritiquestions.length) * 100;

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < prakritiquestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results and navigate
      analyzeResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const analyzeResults = () => {
    setIsAnalyzing(true);
    
    // Calculate dosha scores
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach(answer => {
      scores[answer as keyof typeof scores]++;
    });

    // Determine dominant dosha
    const dominant = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0];

    // Save results
    const results = {
      scores,
      dominant,
      timestamp: new Date().toISOString(),
      answers
    };

    setTimeout(() => {
      localStorage.setItem('aroha-prakriti', JSON.stringify(results));
      navigate('/results');
    }, 2000);
  };

  const currentQ = prakritiquestions[currentQuestion];
  const hasAnswered = answers[currentQ.id];

  if (isAnalyzing) {
    return (
      <div className="min-h-screen calm-gradient flex items-center justify-center">
        <Card className="wellness-card max-w-md text-center">
          <CardContent className="pt-6">
            <Brain className="w-16 h-16 text-primary mx-auto mb-4 animate-wellness-glow" />
            <h2 className="text-2xl font-bold mb-4">Analyzing Your Prakriti</h2>
            <p className="text-muted-foreground mb-6">
              We're processing your responses using ancient Ayurvedic wisdom...
            </p>
            <Loader2 className="w-8 h-8 text-primary mx-auto animate-spin" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen calm-gradient py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Prakriti Analysis</h1>
          <p className="text-muted-foreground">
            Discover your unique mind-body constitution through these carefully crafted questions
          </p>
        </div>

        <Card className="wellness-card">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {prakritiquestions.length}
              </CardTitle>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="mb-6" />
          </CardHeader>

          <CardContent>
            <div className="animate-fade-in">
              <h2 className="text-xl font-semibold mb-6 leading-relaxed">
                {currentQ.question}
              </h2>

              <RadioGroup
                value={answers[currentQ.id] || ''}
                onValueChange={(value) => handleAnswer(currentQ.id, value)}
                className="space-y-4"
              >
                {currentQ.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      answers[currentQ.id] === option.value
                        ? 'border-primary bg-primary-light'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={`option-${index}`}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="text-base leading-relaxed cursor-pointer flex-1"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="btn-secondary"
              >
                Previous
              </Button>

              <Button
                onClick={nextQuestion}
                disabled={!hasAnswered}
                className="btn-wellness flex items-center space-x-2"
              >
                <span>
                  {currentQuestion === prakritiquestions.length - 1 ? 'Analyze Results' : 'Next'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {prakritiquestions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentQuestion ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analysis;