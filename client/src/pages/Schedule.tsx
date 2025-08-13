import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, User, Plus, ChevronRight, Activity, Heart, Brain, Utensils } from 'lucide-react';

const activities = [
  {
    id: 1,
    time: "7:00 AM",
    title: "Morning Meditation",
    duration: "15 min",
    type: "mindfulness",
    location: "Home",
    status: "completed",
    icon: Brain,
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 2,
    time: "7:30 AM",
    title: "Yoga Flow",
    duration: "30 min",
    type: "exercise",
    location: "Living Room",
    status: "completed",
    icon: Activity,
    color: "bg-green-100 text-green-800"
  },
  {
    id: 3,
    time: "8:30 AM",
    title: "Healthy Breakfast",
    duration: "20 min",
    type: "nutrition",
    location: "Kitchen",
    status: "completed",
    icon: Utensils,
    color: "bg-orange-100 text-orange-800"
  },
  {
    id: 4,
    time: "12:30 PM",
    title: "Mindful Lunch",
    duration: "30 min",
    type: "nutrition",
    location: "Office",
    status: "upcoming",
    icon: Utensils,
    color: "bg-orange-100 text-orange-800"
  },
  {
    id: 5,
    time: "3:00 PM",
    title: "Walking Break",
    duration: "15 min",
    type: "exercise",
    location: "Park",
    status: "upcoming",
    icon: Activity,
    color: "bg-green-100 text-green-800"
  },
  {
    id: 6,
    time: "6:00 PM",
    title: "Cardio Workout",
    duration: "45 min",
    type: "exercise",
    location: "Gym",
    status: "upcoming",
    icon: Heart,
    color: "bg-red-100 text-red-800"
  },
  {
    id: 7,
    time: "9:00 PM",
    title: "Evening Reflection",
    duration: "10 min",
    type: "mindfulness",
    location: "Bedroom",
    status: "upcoming",
    icon: Brain,
    color: "bg-purple-100 text-purple-800"
  }
];

const weeklyGoals = [
  { name: "Workout Sessions", current: 4, target: 5, color: "bg-green-400" },
  { name: "Meditation Minutes", current: 105, target: 140, color: "bg-purple-400" },
  { name: "Healthy Meals", current: 18, target: 21, color: "bg-orange-400" },
  { name: "Sleep Hours", current: 49, target: 56, color: "bg-blue-400" }
];

const upcomingEvents = [
  {
    date: "Tomorrow",
    time: "10:00 AM",
    title: "Nutrition Consultation",
    type: "appointment",
    duration: "60 min"
  },
  {
    date: "Friday",
    time: "6:30 PM",
    title: "Group Yoga Class",
    type: "class",
    duration: "90 min"
  },
  {
    date: "Saturday",
    time: "9:00 AM",
    title: "Wellness Workshop",
    type: "workshop",
    duration: "3 hours"
  }
];

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState<string>('all');

  const filteredActivities = activities.filter(activity => 
    filter === 'all' || activity.type === filter
  );

  const completedCount = activities.filter(a => a.status === 'completed').length;
  const progressPercentage = (completedCount / activities.length) * 100;

  return (
    <div className="min-h-screen calm-gradient pt-6">
      <div className="container mx-auto px-4 pb-24 md:pb-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Wellness Schedule
          </h1>
          <p className="text-muted-foreground text-lg">
            Your personalized wellness journey, day by day
          </p>
        </div>

        {/* Daily Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="wellness-card hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">Today's Progress</span>
                </div>
                <Badge variant="secondary">{completedCount}/{activities.length}</Badge>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-foreground">
                  {progressPercentage.toFixed(0)}% Complete
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="wellness-card hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="w-5 h-5 text-green-500" />
                <span className="font-medium">Active Time</span>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-foreground">2h 15m</div>
                <div className="text-sm text-muted-foreground">
                  Great job! You're ahead of your daily goal.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="wellness-card hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-medium">Wellness Score</span>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-foreground">85/100</div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-3 h-3 rounded-full ${
                        i < 4 ? 'bg-primary' : 'bg-muted'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>

          {/* Today's Schedule */}
          <TabsContent value="today" className="space-y-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All Activities
              </Button>
              <Button 
                variant={filter === 'exercise' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('exercise')}
              >
                Exercise
              </Button>
              <Button 
                variant={filter === 'mindfulness' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('mindfulness')}
              >
                Mindfulness
              </Button>
              <Button 
                variant={filter === 'nutrition' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('nutrition')}
              >
                Nutrition
              </Button>
            </div>

            {/* Activities List */}
            <div className="space-y-3">
              {filteredActivities.map((activity) => {
                const IconComponent = activity.icon;
                return (
                  <Card 
                    key={activity.id}
                    className={`transition-all duration-300 hover:shadow-wellness cursor-pointer ${
                      activity.status === 'completed' 
                        ? 'ring-2 ring-green-200 bg-green-50/50' 
                        : 'hover:ring-2 hover:ring-primary/20'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg ${activity.color}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold">{activity.title}</h4>
                              <Badge variant="outline">{activity.time}</Badge>
                            </div>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{activity.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{activity.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {activity.status === 'completed' ? (
                            <Badge className="bg-green-100 text-green-800">Completed</Badge>
                          ) : (
                            <Badge variant="secondary">Upcoming</Badge>
                          )}
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Weekly Overview */}
          <TabsContent value="week" className="space-y-6">
            <div className="grid gap-4">
              {weeklyGoals.map((goal) => (
                <Card key={goal.name} className="wellness-card hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">{goal.name}</h4>
                      <Badge variant="outline">
                        {goal.current} / {goal.target}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div 
                          className={`${goal.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${(goal.current / goal.target) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{((goal.current / goal.target) * 100).toFixed(0)}% complete</span>
                        <span>{goal.target - goal.current} remaining</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>This Week's Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-sm text-muted-foreground">Workouts Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">420</div>
                    <div className="text-sm text-muted-foreground">Meditation Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">35</div>
                    <div className="text-sm text-muted-foreground">Healthy Meals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">52</div>
                    <div className="text-sm text-muted-foreground">Hours of Sleep</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Upcoming Events</h3>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="wellness-card hover-scale cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{event.title}</h4>
                          <div className="flex items-center space-x-4 mt-1 text-muted-foreground">
                            <span>{event.date} at {event.time}</span>
                            <span>•</span>
                            <span>{event.duration}</span>
                          </div>
                          <Badge variant="secondary" className="mt-2">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;