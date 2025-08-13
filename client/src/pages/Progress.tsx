import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Target, Award, Calendar, BarChart3, Activity, Heart, Brain, Flame } from 'lucide-react';

const progressData = {
  overall: {
    score: 85,
    change: +12,
    streak: 28
  },
  categories: [
    {
      name: "Physical Fitness",
      score: 88,
      change: +15,
      icon: Activity,
      color: "text-green-500",
      bgColor: "bg-green-100",
      progress: 88
    },
    {
      name: "Mental Wellness",
      score: 82,
      change: +8,
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      progress: 82
    },
    {
      name: "Nutrition",
      score: 90,
      change: +18,
      icon: Flame,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      progress: 90
    },
    {
      name: "Sleep Quality",
      score: 78,
      change: -3,
      icon: Heart,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      progress: 78
    }
  ]
};

const achievements = [
  {
    id: 1,
    title: "7-Day Streak",
    description: "Completed your wellness routine for 7 consecutive days",
    date: "3 days ago",
    type: "streak",
    icon: "🔥",
    unlocked: true
  },
  {
    id: 2,
    title: "Meditation Master",
    description: "Completed 100 minutes of meditation",
    date: "1 week ago",
    type: "mindfulness",
    icon: "🧘‍♀️",
    unlocked: true
  },
  {
    id: 3,
    title: "Fitness Enthusiast",
    description: "Completed 20 workout sessions",
    date: "2 weeks ago",
    type: "fitness",
    icon: "💪",
    unlocked: true
  },
  {
    id: 4,
    title: "Nutrition Champion",
    description: "Logged healthy meals for 14 days straight",
    date: "5 days ago",
    type: "nutrition",
    icon: "🥗",
    unlocked: true
  },
  {
    id: 5,
    title: "Wellness Warrior",
    description: "Maintain 80+ wellness score for 30 days",
    date: "In progress",
    type: "overall",
    icon: "⭐",
    unlocked: false,
    progress: 85
  }
];

const weeklyStats = [
  { day: "Mon", fitness: 85, nutrition: 90, mindfulness: 75, sleep: 80 },
  { day: "Tue", fitness: 90, nutrition: 95, mindfulness: 80, sleep: 85 },
  { day: "Wed", fitness: 80, nutrition: 85, mindfulness: 90, sleep: 75 },
  { day: "Thu", fitness: 95, nutrition: 90, mindfulness: 85, sleep: 90 },
  { day: "Fri", fitness: 88, nutrition: 92, mindfulness: 88, sleep: 82 },
  { day: "Sat", fitness: 92, nutrition: 88, mindfulness: 95, sleep: 88 },
  { day: "Sun", fitness: 85, nutrition: 90, mindfulness: 80, sleep: 85 }
];

const monthlyGoals = [
  { name: "Workout Sessions", current: 18, target: 20, unit: "sessions" },
  { name: "Meditation Hours", current: 8.5, target: 10, unit: "hours" },
  { name: "Healthy Meals", current: 42, target: 50, unit: "meals" },
  { name: "Sleep Score", current: 82, target: 85, unit: "%" }
];

const Progress: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('week');

  return (
    <div className="min-h-screen calm-gradient pt-6">
      <div className="container mx-auto px-4 pb-24 md:pb-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Progress
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your wellness journey and celebrate achievements
          </p>
        </div>

        {/* Overall Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="wellness-card hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="font-medium">Wellness Score</span>
                </div>
                <Badge 
                  variant={progressData.overall.change > 0 ? "default" : "secondary"}
                  className={progressData.overall.change > 0 ? "bg-green-100 text-green-800" : ""}
                >
                  {progressData.overall.change > 0 ? '+' : ''}{progressData.overall.change}
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-foreground">
                  {progressData.overall.score}/100
                </div>
                <ProgressBar value={progressData.overall.score} className="h-3" />
              </div>
            </CardContent>
          </Card>

          <Card className="wellness-card hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-medium">Current Streak</span>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-foreground">
                  {progressData.overall.streak} days
                </div>
                <div className="text-sm text-muted-foreground">
                  Amazing! Keep the momentum going.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="wellness-card hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Achievements</span>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-foreground">
                  {achievements.filter(a => a.unlocked).length}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievements.length - achievements.filter(a => a.unlocked).length} more to unlock
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            {/* Period Selection */}
            <div className="flex space-x-2 mb-6">
              {(['week', 'month', 'year'] as const).map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                  className="capitalize"
                >
                  {period}
                </Button>
              ))}
            </div>

            {/* Weekly Progress Chart */}
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Your daily wellness scores this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyStats.map((day, index) => (
                    <div key={day.day} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{day.day}</span>
                        <span className="text-muted-foreground">
                          Avg: {Math.round((day.fitness + day.nutrition + day.mindfulness + day.sleep) / 4)}%
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Fitness</div>
                          <ProgressBar value={day.fitness} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Nutrition</div>
                          <ProgressBar value={day.nutrition} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Mindfulness</div>
                          <ProgressBar value={day.mindfulness} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">Sleep</div>
                          <ProgressBar value={day.sleep} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Categories */}
          <TabsContent value="categories" className="space-y-4">
            <div className="grid gap-4">
              {progressData.categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.name} className="wellness-card hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${category.bgColor}`}>
                            <IconComponent className={`w-5 h-5 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-lg">{category.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{category.score}%</div>
                          <div className={`flex items-center space-x-1 text-sm ${
                            category.change > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {category.change > 0 ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingDown className="w-4 h-4" />
                            )}
                            <span>{category.change > 0 ? '+' : ''}{category.change}%</span>
                          </div>
                        </div>
                      </div>
                      <ProgressBar value={category.progress} className="h-3" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements" className="space-y-4">
            <div className="grid gap-4">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`transition-all duration-300 hover:shadow-wellness ${
                    achievement.unlocked 
                      ? 'ring-2 ring-yellow-200 bg-yellow-50/50' 
                      : 'opacity-60'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{achievement.icon}</div>
                        <div>
                          <h4 className="font-semibold text-lg">{achievement.title}</h4>
                          <p className="text-muted-foreground">{achievement.description}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant={achievement.unlocked ? "default" : "secondary"}>
                              {achievement.unlocked ? "Unlocked" : "Locked"}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{achievement.date}</span>
                          </div>
                        </div>
                      </div>
                      {!achievement.unlocked && achievement.progress && (
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">
                            {achievement.progress}% complete
                          </div>
                          <ProgressBar value={achievement.progress} className="w-24 h-2" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Monthly Goals */}
          <TabsContent value="goals" className="space-y-4">
            <div className="grid gap-4">
              {monthlyGoals.map((goal) => (
                <Card key={goal.name} className="wellness-card hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">{goal.name}</h4>
                      <Badge variant="outline">
                        {goal.current} / {goal.target} {goal.unit}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <ProgressBar 
                        value={(goal.current / goal.target) * 100} 
                        className="h-3"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{((goal.current / goal.target) * 100).toFixed(0)}% complete</span>
                        <span>
                          {goal.target - goal.current} {goal.unit} remaining
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>Monthly Summary</CardTitle>
                <CardDescription>Your progress this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">18</div>
                    <div className="text-sm text-muted-foreground">Workouts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">8.5h</div>
                    <div className="text-sm text-muted-foreground">Meditation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">42</div>
                    <div className="text-sm text-muted-foreground">Healthy Meals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">82%</div>
                    <div className="text-sm text-muted-foreground">Sleep Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Progress;