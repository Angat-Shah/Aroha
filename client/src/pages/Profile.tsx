import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Heart, 
  Target, 
  Calendar, 
  Trophy,
  Edit3,
  Camera,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const userProfile = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  joinDate: "January 2024",
  avatar: "SJ",
  bio: "Passionate about holistic wellness and mindful living. On a journey to balance mind, body, and spirit through daily practices and healthy habits.",
  stats: {
    totalDays: 95,
    currentStreak: 28,
    achievements: 12,
    wellnessScore: 85
  },
  goals: {
    primary: "Maintain consistent wellness routine",
    secondary: "Increase meditation practice",
    target: "90% wellness score by June"
  },
  preferences: {
    notifications: {
      workoutReminders: true,
      mealPlanning: true,
      meditationTime: true,
      weeklyReports: false,
      achievements: true
    },
    privacy: {
      profileVisibility: "friends",
      activitySharing: false,
      progressSharing: true
    }
  }
};

const recentAchievements = [
  { title: "7-Day Streak", date: "3 days ago", icon: "🔥" },
  { title: "Meditation Master", date: "1 week ago", icon: "🧘‍♀️" },
  { title: "Fitness Enthusiast", date: "2 weeks ago", icon: "💪" },
  { title: "Nutrition Champion", date: "3 weeks ago", icon: "🥗" }
];

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);
  const [notifications, setNotifications] = useState(userProfile.preferences.notifications);

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(userProfile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen calm-gradient pt-6">
      <div className="container mx-auto px-4 pb-24 md:pb-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Profile
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your wellness journey and preferences
          </p>
        </div>

        {/* Profile Overview */}
        <Card className="wellness-card mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="w-24 h-24 text-2xl">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {userProfile.avatar}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <p className="text-muted-foreground mb-3">{userProfile.bio}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>{userProfile.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {userProfile.joinDate}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => setIsEditing(true)}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="wellness-card hover-scale">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{userProfile.stats.totalDays}</div>
              <div className="text-sm text-muted-foreground">Total Days</div>
            </CardContent>
          </Card>
          
          <Card className="wellness-card hover-scale">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{userProfile.stats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </CardContent>
          </Card>
          
          <Card className="wellness-card hover-scale">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{userProfile.stats.achievements}</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </CardContent>
          </Card>
          
          <Card className="wellness-card hover-scale">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{userProfile.stats.wellnessScore}%</div>
              <div className="text-sm text-muted-foreground">Wellness Score</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-6">
            {isEditing ? (
              <Card className="wellness-card">
                <CardHeader>
                  <CardTitle>Edit Personal Information</CardTitle>
                  <CardDescription>Update your profile details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone"
                        value={editedProfile.phone}
                        onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location"
                        value={editedProfile.location}
                        onChange={(e) => setEditedProfile({...editedProfile, location: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio"
                      value={editedProfile.bio}
                      onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                      rows={3}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={handleSave}>Save Changes</Button>
                    <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="wellness-card">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your profile details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Full Name</Label>
                      <div className="text-base">{userProfile.name}</div>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Email</Label>
                      <div className="text-base">{userProfile.email}</div>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Phone</Label>
                      <div className="text-base">{userProfile.phone}</div>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Location</Label>
                      <div className="text-base">{userProfile.location}</div>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Bio</Label>
                    <div className="text-base">{userProfile.bio}</div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Goals */}
          <TabsContent value="goals" className="space-y-6">
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>Wellness Goals</CardTitle>
                <CardDescription>Track your personal wellness objectives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Primary Goal</Label>
                  <div className="text-base font-medium">{userProfile.goals.primary}</div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Secondary Goal</Label>
                  <div className="text-base font-medium">{userProfile.goals.secondary}</div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Target</Label>
                  <div className="text-base font-medium">{userProfile.goals.target}</div>
                </div>
                <Button variant="outline" className="w-full">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Update Goals
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Label>
                      <div className="text-sm text-muted-foreground">
                        {key === 'workoutReminders' && 'Get reminded about your scheduled workouts'}
                        {key === 'mealPlanning' && 'Receive meal planning notifications'}
                        {key === 'meditationTime' && 'Be reminded of meditation sessions'}
                        {key === 'weeklyReports' && 'Get weekly progress summaries'}
                        {key === 'achievements' && 'Celebrate new achievements'}
                      </div>
                    </div>
                    <Switch 
                      checked={value}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, [key]: checked})
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Profile Visibility</Label>
                  <div className="text-sm text-muted-foreground">
                    Currently set to: <Badge variant="secondary">{userProfile.preferences.privacy.profileVisibility}</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Activity Sharing</Label>
                    <div className="text-sm text-muted-foreground">Share your activities with friends</div>
                  </div>
                  <Switch checked={userProfile.preferences.privacy.activitySharing} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Progress Sharing</Label>
                    <div className="text-sm text-muted-foreground">Share your progress updates</div>
                  </div>
                  <Switch checked={userProfile.preferences.privacy.progressSharing} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Achievements */}
          <TabsContent value="achievements" className="space-y-4">
            <div className="grid gap-4">
              {recentAchievements.map((achievement, index) => (
                <Card key={index} className="wellness-card hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle>Achievement Summary</CardTitle>
                <CardDescription>Your wellness milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-sm text-muted-foreground">Total Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-muted-foreground">This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-muted-foreground">To Unlock</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">28</div>
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

export default Profile;