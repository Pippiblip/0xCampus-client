
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressCard from '@/components/ProgressCard';
import StatsCard from '@/components/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Calendar,
  Clock,
  Award,
  BookOpen,
  GraduationCap,
  Flame
} from 'lucide-react';
import { enrolledCourses, userStats } from '@/data/mockData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Learning Dashboard</h1>
              <p className="text-muted-foreground">Track your progress and rewards</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Link to="/marketplace">
                <Button variant="outline">Browse Courses</Button>
              </Link>
              <Button className="gap-2">
                <Award className="h-4 w-4" />
                View Certificates
              </Button>
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title="Current Streak"
              value={`${userStats.learningStreak.days} days`}
              description={`Previous best: ${userStats.learningStreak.previousBest} days`}
              icon={Flame}
              trend={{ value: "3 days", positive: true }}
            />
            
            <StatsCard
              title="Courses Enrolled"
              value={userStats.totalCoursesEnrolled.toString()}
              description="Across various categories"
              icon={BookOpen}
            />
            
            <StatsCard
              title="Average Quiz Score"
              value={`${userStats.averageQuizScore}%`}
              description="Across all quizzes"
              icon={GraduationCap}
              trend={{ value: "2%", positive: true }}
            />
            
            <StatsCard
              title="Total Learning Time"
              value={`${userStats.totalHoursLearned}h`}
              description="Time spent learning"
              icon={Clock}
            />
          </div>
          
          <Tabs defaultValue="courses">
            <TabsList className="mb-6">
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="rewards">My Rewards</TabsTrigger>
              <TabsTrigger value="calendar">Learning Calendar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
                <div className="grid grid-cols-1 gap-4">
                  {enrolledCourses.map((course) => (
                    <ProgressCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Completed Courses</h2>
                <div className="bg-muted/40 p-8 rounded-lg text-center">
                  <p className="text-muted-foreground mb-4">You haven't completed any courses yet.</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete your first course to earn an NFT certificate and unlock rewards.
                  </p>
                  <Link to={`/course/${enrolledCourses[0].id}`}>
                    <Button variant="outline">Continue Learning</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rewards">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Available Discounts</h2>
                  
                  {userStats.earnedDiscounts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userStats.earnedDiscounts.map((discount) => (
                        <Card key={discount.id}>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                                  <Award className="h-6 w-6 text-brand-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold">{discount.percentage}% Discount</h3>
                                  <p className="text-sm text-muted-foreground">
                                    For course #{discount.courseId}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-xs text-muted-foreground block mb-1">
                                  Expires in
                                </span>
                                <span className="text-sm font-medium text-red-500">
                                  {discount.expiresIn}
                                </span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Link to={`/course/${discount.courseId}`}>
                                <Button variant="outline" size="sm" className="w-full">
                                  Apply Discount
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-muted/40 p-8 rounded-lg text-center">
                      <p className="text-muted-foreground mb-2">No discounts available yet.</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Complete courses and quizzes to earn discounts on future courses.
                      </p>
                    </div>
                  )}
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Performance Milestones</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Current Progress Towards Rewards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Flame className="h-5 w-5 text-brand-600" />
                            <div>
                              <p className="font-medium">7-Day Learning Streak</p>
                              <p className="text-xs text-muted-foreground">
                                3 more days for 10% discount
                              </p>
                            </div>
                          </div>
                          <span className="text-brand-600 font-medium">7/10</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-brand-600" />
                            <div>
                              <p className="font-medium">Quiz Excellence</p>
                              <p className="text-xs text-muted-foreground">
                                Score 80%+ on 5 quizzes
                              </p>
                            </div>
                          </div>
                          <span className="text-brand-600 font-medium">3/5</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-brand-600" />
                            <div>
                              <p className="font-medium">Course Completion</p>
                              <p className="text-xs text-muted-foreground">
                                Complete 1 course for NFT certificate
                              </p>
                            </div>
                          </div>
                          <span className="text-brand-600 font-medium">0/1</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="calendar">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Learning Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-8 text-center">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-medium mb-2">Calendar View Coming Soon</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Track your learning schedule and set goals to maintain your streak.
                      </p>
                      <Button variant="outline">Set Learning Goals</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
