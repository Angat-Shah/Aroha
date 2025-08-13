import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, User, Heart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    lifestyle: '',
    goals: [],
    healthConcerns: ''
  });

  const totalSteps = 3;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Save onboarding data and navigate to analysis
      localStorage.setItem('aroha-user', JSON.stringify(formData));
      navigate('/analysis');
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <User className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
              <p className="text-muted-foreground">Let's start with some basic details about you</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="25"
                    value={formData.age}
                    onChange={(e) => updateFormData('age', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={formData.gender} onValueChange={(value) => updateFormData('gender', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Health Details</h2>
              <p className="text-muted-foreground">Help us understand your physical profile</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="170"
                    value={formData.height}
                    onChange={(e) => updateFormData('height', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="65"
                    value={formData.weight}
                    onChange={(e) => updateFormData('weight', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="lifestyle">Lifestyle Activity Level</Label>
                <Select value={formData.lifestyle} onValueChange={(value) => updateFormData('lifestyle', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (Desk job, minimal exercise)</SelectItem>
                    <SelectItem value="light">Light Activity (Light exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate Activity (Exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="active">Very Active (Exercise 6-7 days/week)</SelectItem>
                    <SelectItem value="intense">Intense Activity (Physical job + exercise)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="healthConcerns">Any Health Concerns or Conditions?</Label>
                <Input
                  id="healthConcerns"
                  placeholder="e.g., diabetes, hypertension, allergies (optional)"
                  value={formData.healthConcerns}
                  onChange={(e) => updateFormData('healthConcerns', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Wellness Goals</h2>
              <p className="text-muted-foreground">What would you like to achieve with Aroha?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Improve overall health',
                'Better sleep quality',
                'Stress management',
                'Weight management',
                'Increase energy levels',
                'Better digestion',
                'Mental clarity',
                'Spiritual growth'
              ].map((goal) => (
                <button
                  key={goal}
                  onClick={() => {
                    const currentGoals = formData.goals || [];
                    const updatedGoals = currentGoals.includes(goal)
                      ? currentGoals.filter(g => g !== goal)
                      : [...currentGoals, goal];
                    updateFormData('goals', updatedGoals);
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                    formData.goals?.includes(goal)
                      ? 'border-primary bg-primary-light text-primary-foreground'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <span className="font-medium">{goal}</span>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen calm-gradient py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <Card className="wellness-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Welcome to Aroha</CardTitle>
            <div className="flex items-center justify-center space-x-2 mt-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i + 1 <= step ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Step {step} of {totalSteps}
            </p>
          </CardHeader>

          <CardContent>
            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
                className="btn-secondary flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              <Button
                onClick={nextStep}
                disabled={
                  (step === 1 && (!formData.name || !formData.age || !formData.gender)) ||
                  (step === 2 && (!formData.height || !formData.weight || !formData.lifestyle)) ||
                  (step === 3 && (!formData.goals || formData.goals.length === 0))
                }
                className="btn-wellness flex items-center space-x-2"
              >
                <span>{step === totalSteps ? 'Start Analysis' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;