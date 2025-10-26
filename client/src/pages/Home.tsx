import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Sparkles, TrendingUp, Utensils, Calendar, Target, ArrowRight, Leaf, Wind, Flame, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import arohaLogo from '@/assets/aroha-logo.png';

interface PrakritiResult {
  scores: { vata: number; pitta: number; kapha: number };
  dominant: string;
  timestamp: string;
}

const doshaIcons = {
  vata: Wind,
  pitta: Flame,
  kapha: Leaf
};

const doshaColors = {
  vata: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  pitta: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
  kapha: { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' }
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [prakritiData, setPrakritiData] = useState<PrakritiResult | null>(null);
  const [currentStreak, setCurrentStreak] = useState(5);
  const [dailyProgress, setDailyProgress] = useState(72);

  useEffect(() => {
    const savedData = localStorage.getItem('aroha-prakriti');
    if (savedData) {
      setPrakritiData(JSON.parse(savedData));
    }
  }, []);

  const DominantIcon = prakritiData ? doshaIcons[prakritiData.dominant as keyof typeof doshaIcons] : Brain;
  const dominantColor = prakritiData ? doshaColors[prakritiData.dominant as keyof typeof doshaColors] : doshaColors.vata;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 space-y-6">
        {/* Welcome Header */}
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome back! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                Continue your wellness journey with personalized guidance
              </p>
            </div>
            <div className="hidden md:block">
              <img src={arohaLogo} alt="Aroha" className="w-16 h-16 animate-wellness-glow" />
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Main Cards */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Analysis Card / Hero Action */}
            {!prakritiData ? (
              <Card className="wellness-card overflow-hidden relative animate-fade-in-scale">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10" />
                <CardContent className="p-8 relative">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl font-bold mb-2">Discover Your Prakriti</h2>
                      <p className="text-muted-foreground mb-6 text-lg">
                        Take our personalized analysis to understand your unique Ayurvedic constitution and receive tailored recommendations
                      </p>
                      <Button
                        onClick={() => navigate('/analysis')}
                        className="btn-wellness text-lg px-8 py-3"
                      >
                        <span>Start Analysis</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="wellness-card animate-fade-in-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${dominantColor.bg} flex items-center justify-center`}>
                        <DominantIcon className={`w-6 h-6 ${dominantColor.text}`} />
                      </div>
                      <div>
                        <div className="text-muted-foreground text-sm font-normal">Your Prakriti</div>
                        <div className="capitalize">{prakritiData.dominant}</div>
                      </div>
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate('/results')}
                      className="btn-secondary"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(prakritiData.scores).map(([dosha, score]) => {
                      const Icon = doshaIcons[dosha as keyof typeof doshaIcons];
                      const color = doshaColors[dosha as keyof typeof doshaColors];
                      const total = Object.values(prakritiData.scores).reduce((a, b) => a + b, 0);
                      const percentage = Math.round((score / total) * 100);
                      
                      return (
                        <div key={dosha} className={`p-4 rounded-xl border-2 ${color.border} ${color.bg}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className={`w-5 h-5 ${color.text}`} />
                            <span className={`font-semibold capitalize ${color.text}`}>{dosha}</span>
                          </div>
                          <div className="text-2xl font-bold">{percentage}%</div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="wellness-card hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigate('/diet')}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Diet</h3>
                  <p className="text-muted-foreground">
                    Discover foods that balance your dosha and promote wellness
                  </p>
                </CardContent>
              </Card>

              <Card className="wellness-card hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigate('/schedule')}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Daily Schedule</h3>
                  <p className="text-muted-foreground">
                    Get structured routines based on your constitution
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Stats & Progress */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Streak Card */}
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">{currentStreak}</div>
                <p className="text-sm text-muted-foreground">Days of consistent wellness tracking</p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Keep it up! You're doing great</span>
                </div>
              </CardContent>
            </Card>

            {/* Progress Card */}
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Today's Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span className="font-semibold">{dailyProgress}%</span>
                    </div>
                    <Progress value={dailyProgress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Diet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Exercise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-600" />
                      <span>Meditation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-600" />
                      <span>Sleep</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/progress')}
                    className="w-full btn-secondary"
                  >
                    View Full Progress
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="wellness-card subtle-gradient">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Wellness Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm leading-relaxed">
                      {prakritiData 
                        ? `As a ${prakritiData.dominant} type, maintain your routine with warm meals and gentle movement.`
                        : "Start your day with 5 minutes of meditation and a glass of warm water to support your digestive fire."
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="wellness-card animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Quick Access</CardTitle>
            <p className="text-muted-foreground">Jump to your wellness essentials</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="h-24 flex-col btn-secondary hover:scale-105 transition-transform"
                onClick={() => navigate('/diet')}
              >
                <Utensils className="w-8 h-8 mb-2" />
                <span>Diet Plan</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex-col btn-secondary hover:scale-105 transition-transform"
                onClick={() => navigate('/schedule')}
              >
                <Calendar className="w-8 h-8 mb-2" />
                <span>Schedule</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex-col btn-secondary hover:scale-105 transition-transform"
                onClick={() => navigate('/progress')}
              >
                <TrendingUp className="w-8 h-8 mb-2" />
                <span>Progress</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex-col btn-secondary hover:scale-105 transition-transform"
                onClick={() => navigate('/profile')}
              >
                <Target className="w-8 h-8 mb-2" />
                <span>Profile</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;

