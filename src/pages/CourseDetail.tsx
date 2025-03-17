
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { courseDetails } from '@/data/mockData';
import { Clock, Users, Star, Award, CheckCircle2, AlertCircle } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  
  // In a real app, we would fetch the course details based on id
  const course = courseDetails;
  
  const handleEnroll = () => {
    // In a real app, this would connect to a smart contract
    setIsEnrolled(true);
  };
  
  const discountedPrice = course.discount 
    ? course.price - (course.price * course.discount / 100) 
    : course.price;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Course Header */}
        <div className="bg-muted/40 py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-grow space-y-4">
                <h1 className="text-3xl font-bold">{course.title}</h1>
                
                <p className="text-muted-foreground">{course.description}</p>
                
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium">Created by </span>
                  <span className="text-sm text-brand-600">{course.educator}</span>
                </div>
                
                <Badge className="bg-brand-600">{course.category}</Badge>
              </div>
              
              <div className="w-full md:w-80 shrink-0">
                <div className="bg-background rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      {course.discount ? (
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground line-through">${course.price.toFixed(2)}</span>
                            <span className="text-xs bg-learn-600 text-white px-2 py-0.5 rounded">
                              {course.discount}% OFF
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold">${course.price.toFixed(2)}</span>
                      )}
                    </div>
                    
                    {isEnrolled ? (
                      <Button className="w-full mb-3" variant="outline">
                        Continue Learning
                      </Button>
                    ) : (
                      <Button className="w-full mb-3" onClick={handleEnroll}>
                        Enroll Now
                      </Button>
                    )}
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Complete within 30 days for an additional 15% discount on your next course
                    </p>
                    
                    <div className="border-t mt-4 pt-4">
                      <h3 className="font-medium mb-2">This course includes:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-brand-600" />
                          <span>Full lifetime access</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-brand-600" />
                          <span>NFT course completion certificate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-brand-600" />
                          <span>Performance-based discounts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-brand-600" />
                          <span>Community forum access</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container py-8">
          <Tabs defaultValue="content">
            <TabsList className="mb-4">
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="prerequisites">Prerequisites</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Course Content</h2>
                <Accordion type="single" collapsible className="w-full">
                  {course.modules.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`}>
                      <AccordionTrigger className="hover:bg-muted/50 px-4 py-2 rounded-md">
                        <div className="flex justify-between items-center w-full">
                          <span>{module.title}</span>
                          <span className="text-sm text-muted-foreground">{module.duration}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        <ul className="space-y-2 py-2">
                          {module.lessons.map((lesson, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                                {idx + 1}
                              </div>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Performance Incentives</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted/40 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-brand-600" />
                      <h3 className="font-semibold">Time-Based Discounts</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Complete the course within 30 days to receive a 15% discount on your next course purchase.
                    </p>
                  </div>
                  
                  <div className="bg-muted/40 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-brand-600" />
                      <h3 className="font-semibold">Performance Rewards</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Score 80%+ on all quizzes to earn a 10% bonus discount token for any future course.
                    </p>
                  </div>
                  
                  <div className="bg-muted/40 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-learn-600" />
                      <h3 className="font-semibold">NFT Certificate</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receive a blockchain-verified NFT certificate upon course completion to showcase your skills.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prerequisites">
              <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
                
                {course.prerequisites.length > 0 ? (
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    No specific prerequisites for this course. It's suitable for beginners.
                  </p>
                )}
                
                <div className="bg-muted/40 p-4 rounded-lg mt-6">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Important Note</h3>
                      <p className="text-sm text-muted-foreground">
                        While no prior blockchain knowledge is required, basic computer literacy and an interest in learning new technologies will help you get the most out of this course.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.reviews.map((review, index) => (
                    <div key={index} className="bg-muted/40 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{review.user}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-muted'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
