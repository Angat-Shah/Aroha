import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Apple, Flame, Droplets, Utensils, Clock, Star, ChevronRight, Plus, Target } from 'lucide-react';

const mealPlans = [
  {
    id: 1,
    name: "Mediterranean Wellness",
    calories: 1850,
    protein: 85,
    carbs: 180,
    fat: 75,
    meals: 5,
    tags: ["Heart Healthy", "Anti-inflammatory"],
    image: "🥗",
    active: true
  },
  {
    id: 2,
    name: "Plant-Based Power",
    calories: 1720,
    protein: 70,
    carbs: 220,
    fat: 55,
    meals: 6,
    tags: ["Vegan", "High Fiber"],
    image: "🌱"
  },
  {
    id: 3,
    name: "Balanced Living",
    calories: 2000,
    protein: 100,
    carbs: 200,
    fat: 80,
    meals: 4,
    tags: ["Balanced", "Sustainable"],
    image: "⚖️"
  }
];

const todaysMeals = [
  {
    time: "7:30 AM",
    meal: "Breakfast",
    food: "Avocado Toast with Poached Egg",
    calories: 420,
    completed: true,
    image: "🥑"
  },
  {
    time: "10:00 AM",
    meal: "Snack",
    food: "Greek Yogurt with Berries",
    calories: 180,
    completed: true,
    image: "🫐"
  },
  {
    time: "1:00 PM",
    meal: "Lunch",
    food: "Quinoa Buddha Bowl",
    calories: 580,
    completed: false,
    image: "🥙"
  },
  {
    time: "4:00 PM",
    meal: "Snack",
    food: "Almond Energy Balls",
    calories: 220,
    completed: false,
    image: "🥜"
  },
  {
    time: "7:30 PM",
    meal: "Dinner",
    food: "Grilled Salmon with Vegetables",
    calories: 650,
    completed: false,
    image: "🐟"
  }
];

const nutritionGoals = [
  { name: "Calories", current: 600, target: 1850, unit: "kcal", color: "bg-orange-400" },
  { name: "Protein", current: 28, target: 85, unit: "g", color: "bg-blue-400" },
  { name: "Carbs", current: 45, target: 180, unit: "g", color: "bg-green-400" },
  { name: "Fat", current: 22, target: 75, unit: "g", color: "bg-purple-400" },
  { name: "Water", current: 1.2, target: 2.5, unit: "L", color: "bg-cyan-400" }
];

const Diet: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [completedMeals, setCompletedMeals] = useState<number[]>([0, 1]);

  const toggleMealCompletion = (index: number) => {
    setCompletedMeals(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const completedCalories = todaysMeals
    .filter((_, index) => completedMeals.includes(index))
    .reduce((total, meal) => total + meal.calories, 0);

  return (
    <div className="min-h-screen calm-gradient pt-6">
      <div className="container mx-auto px-4 pb-24 md:pb-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Nutrition Journey
          </h1>
          <p className="text-muted-foreground text-lg">
            Fuel your wellness with mindful eating
          </p>
        </div>

        {/* Daily Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="wellness-card hover-scale">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-medium">Today's Progress</span>
              </div>
              <Badge variant="secondary">{completedMeals.length}/5 meals</Badge>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-foreground">
                {completedCalories} / 1850 kcal
              </div>
              <Progress value={(completedCalories / 1850) * 100} className="h-2" />
            </div>
          </div>

          <div className="wellness-card hover-scale">
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="w-5 h-5 text-cyan-500" />
              <span className="font-medium">Hydration</span>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-foreground">1.2 / 2.5 L</div>
              <Progress value={48} className="h-2" />
              <Button variant="outline" size="sm" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Log Water
              </Button>
            </div>
          </div>

          <div className="wellness-card hover-scale">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-5 h-5 text-green-500" />
              <span className="font-medium">Streak</span>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-foreground">7 days</div>
              <div className="flex space-x-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-full bg-primary"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">Today's Meals</TabsTrigger>
            <TabsTrigger value="plans">Meal Plans</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>

          {/* Today's Meals */}
          <TabsContent value="today" className="space-y-4">
            <div className="grid gap-4">
              {todaysMeals.map((meal, index) => (
                <Card 
                  key={index} 
                  className={`transition-all duration-300 cursor-pointer hover:shadow-wellness ${
                    completedMeals.includes(index) ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}
                  onClick={() => toggleMealCompletion(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{meal.image}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{meal.meal}</h4>
                            <Badge variant="outline">{meal.time}</Badge>
                          </div>
                          <p className="text-muted-foreground">{meal.food}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Flame className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium">{meal.calories} kcal</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {completedMeals.includes(index) && (
                          <Badge className="bg-green-100 text-green-800">Completed</Badge>
                        )}
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Meal Plans */}
          <TabsContent value="plans" className="space-y-4">
            <div className="grid gap-4">
              {mealPlans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`transition-all duration-300 cursor-pointer hover:shadow-wellness ${
                    plan.active ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{plan.image}</div>
                        <div>
                          <h3 className="text-xl font-semibold">{plan.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {plan.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      {plan.active && (
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{plan.calories}</div>
                        <div className="text-sm text-muted-foreground">Calories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{plan.protein}g</div>
                        <div className="text-sm text-muted-foreground">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{plan.carbs}g</div>
                        <div className="text-sm text-muted-foreground">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{plan.fat}g</div>
                        <div className="text-sm text-muted-foreground">Fat</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{plan.meals}</div>
                        <div className="text-sm text-muted-foreground">Meals</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Nutrition Tracking */}
          <TabsContent value="nutrition" className="space-y-6">
            <div className="grid gap-4">
              {nutritionGoals.map((goal) => (
                <Card key={goal.name} className="hover:shadow-wellness transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">{goal.name}</h4>
                      <Badge variant="outline">
                        {goal.current} / {goal.target} {goal.unit}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <Progress 
                        value={(goal.current / goal.target) * 100} 
                        className="h-3"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{((goal.current / goal.target) * 100).toFixed(0)}% complete</span>
                        <span>{goal.target - goal.current} {goal.unit} remaining</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>Weekly Summary</CardTitle>
                <CardDescription>Your nutrition trends this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-muted-foreground">Calorie Goals Met</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-muted-foreground">Healthy Meals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">18L</div>
                    <div className="text-sm text-muted-foreground">Water Consumed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">7</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
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

export default Diet;