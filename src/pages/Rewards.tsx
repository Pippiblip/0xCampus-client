
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Gift, Trophy, Star, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { userStats } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Rewards = () => {
  const handleClaimReward = (rewardId: string, rewardName: string) => {
    // In a real app, this would call a blockchain function to claim the reward
    toast({
      title: "Reward Claimed!",
      description: `You've successfully claimed: ${rewardName}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Rewards Center</h1>
              <p className="text-muted-foreground">Earn and redeem rewards for your learning achievements</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button variant="outline">View Progress</Button>
              </Link>
              <Button className="gap-2">
                <Gift className="h-4 w-4" />
                Redeem Points
              </Button>
            </div>
          </div>
          
          {/* Rewards Summary Card */}
          <Card className="mb-8 bg-gradient-to-r from-brand-100 to-purple-100 border-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-brand-600 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">2,450</h2>
                    <p className="text-muted-foreground">Total Reward Points</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                  <div className="flex flex-col items-center justify-center">
                    <Badge className="mb-2 bg-green-500">Active</Badge>
                    <p className="text-xl font-bold">3</p>
                    <p className="text-xs text-muted-foreground">Available Rewards</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center">
                    <Badge className="mb-2 bg-blue-500">History</Badge>
                    <p className="text-xl font-bold">8</p>
                    <p className="text-xs text-muted-foreground">Claimed Rewards</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center">
                    <Badge className="mb-2 bg-purple-500">Streak</Badge>
                    <p className="text-xl font-bold">{userStats.learningStreak.days} Days</p>
                    <p className="text-xs text-muted-foreground">Current Streak</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="available">
            <TabsList className="mb-6">
              <TabsTrigger value="available">Available Rewards</TabsTrigger>
              <TabsTrigger value="discounts">Course Discounts</TabsTrigger>
              <TabsTrigger value="nft">NFT Certificates</TabsTrigger>
              <TabsTrigger value="history">Reward History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="available" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge>500 points</Badge>
                      <Award className="h-5 w-5 text-yellow-500" />
                    </div>
                    <CardTitle className="text-lg mt-2">Exclusive Webinar Access</CardTitle>
                    <CardDescription>Join a private webinar with blockchain experts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Available for 14 more days</span>
                    </div>
                    <Button 
                      onClick={() => handleClaimReward('webinar-1', 'Exclusive Webinar Access')}
                      className="w-full"
                    >
                      Claim Reward
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge>1200 points</Badge>
                      <Award className="h-5 w-5 text-yellow-500" />
                    </div>
                    <CardTitle className="text-lg mt-2">1-on-1 Mentoring Session</CardTitle>
                    <CardDescription>30-minute session with an industry mentor</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Available for 7 more days</span>
                    </div>
                    <Button 
                      onClick={() => handleClaimReward('mentor-1', '1-on-1 Mentoring Session')}
                      className="w-full"
                    >
                      Claim Reward
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge>850 points</Badge>
                      <Award className="h-5 w-5 text-yellow-500" />
                    </div>
                    <CardTitle className="text-lg mt-2">Early Access to New Course</CardTitle>
                    <CardDescription>Get early access to upcoming Web3 courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Available for 30 more days</span>
                    </div>
                    <Button 
                      onClick={() => handleClaimReward('early-access-1', 'Early Access to New Course')}
                      className="w-full"
                    >
                      Claim Reward
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="discounts" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userStats.earnedDiscounts.length > 0 ? (
                  userStats.earnedDiscounts.map((discount) => (
                    <Card key={discount.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                              <Gift className="h-6 w-6 text-brand-600" />
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
                  ))
                ) : (
                  <div className="col-span-2 bg-muted/40 p-8 rounded-lg text-center">
                    <p className="text-muted-foreground mb-2">No discounts available yet.</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete courses and quizzes to earn discounts on future courses.
                    </p>
                    <Link to="/marketplace">
                      <Button variant="outline">Browse Courses</Button>
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="nft" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>NFT Course Certificates</CardTitle>
                  <CardDescription>
                    Earn blockchain-verified certificates when you complete courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/40 p-8 rounded-lg text-center">
                    <Star className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">No NFT Certificates Yet</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete at least one course to earn your first NFT certificate.
                    </p>
                    <Link to="/dashboard">
                      <Button variant="outline">Continue Learning</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reward History</CardTitle>
                  <CardDescription>
                    Track all rewards you've claimed in the past
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/40 p-8 rounded-lg text-center">
                    <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">No Reward History</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your claimed rewards will appear here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rewards;
