
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  CheckCircle2, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Lightbulb, 
  Award, 
  ArrowRight 
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  expertise: z.string().min(2, { message: "Expertise is required" }),
  experience: z.string().min(10, { message: "Please provide more details about your experience" }),
  courseIdea: z.string().min(10, { message: "Please provide more details about your course idea" }),
});

const Teach = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      expertise: "",
      experience: "",
      courseIdea: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application submitted",
      description: "We've received your application. We'll review it and contact you soon.",
    });
    // In a real app, you would send this data to your backend
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-600 to-learn-600 text-white py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Become an Educator on LearnVerse</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Share your knowledge, earn revenue, and help shape the future of Web3 education with blockchain-verified courses.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white/20"
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </Button>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Teach on <span className="gradient-text">LearnVerse</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-brand-600" />
                  </div>
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share your expertise with thousands of learners around the world who are passionate about Web3 and blockchain.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-full bg-learn-100 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-learn-600" />
                  </div>
                  <CardTitle>Transparent Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Earn 70% of course revenue with smart contract-powered automatic payments directly to your wallet.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="space-y-1">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-2">
                    <Lightbulb className="h-6 w-6 text-brand-600" />
                  </div>
                  <CardTitle>Full Creative Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create interactive courses with our easy-to-use tools for videos, quizzes, and assignments with full control over your content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex mb-12 relative">
                    <div className="mr-6 flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${step <= currentStep ? 'bg-brand-600 text-white' : 'bg-muted border border-input'}`}>
                        {step < currentStep ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <span className="font-medium">{step}</span>
                        )}
                      </div>
                      {step < 4 && (
                        <div className={`w-0.5 h-full ${step < currentStep ? 'bg-brand-600' : 'bg-muted'}`} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {step === 1 && "Apply to become an educator"}
                        {step === 2 && "Create your course content"}
                        {step === 3 && "Launch your course"}
                        {step === 4 && "Earn and grow"}
                      </h3>
                      <p className="text-muted-foreground">
                        {step === 1 && "Fill out the application form with your expertise and course idea. Our team will review it and get back to you within 48 hours."}
                        {step === 2 && "Use our intuitive course builder to create videos, quizzes, assignments, and supplementary materials for your course."}
                        {step === 3 && "After review, your course goes live on the LearnVerse marketplace where students can purchase and enroll."}
                        {step === 4 && "Earn 70% revenue from each course sale. Track analytics, engage with students, and update your content as needed."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section id="application" className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Apply to Become an Educator
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Tell us about yourself and your course idea. We'll review your application and get back to you within 48 hours.
              </p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Educator Application</CardTitle>
                  <CardDescription>
                    Fill out the form below to start your journey as a LearnVerse educator.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        {...form.register("fullName")}
                      />
                      {form.formState.errors.fullName && (
                        <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expertise">Area of Expertise</Label>
                      <Input
                        id="expertise"
                        placeholder="e.g., Smart Contract Development, DeFi, NFTs"
                        {...form.register("expertise")}
                      />
                      {form.formState.errors.expertise && (
                        <p className="text-sm text-destructive">{form.formState.errors.expertise.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        placeholder="Tell us about your experience in this field..."
                        rows={4}
                        {...form.register("experience")}
                      />
                      {form.formState.errors.experience && (
                        <p className="text-sm text-destructive">{form.formState.errors.experience.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="courseIdea">Course Idea</Label>
                      <Textarea
                        id="courseIdea"
                        placeholder="Describe your course idea, target audience, and what students will learn..."
                        rows={4}
                        {...form.register("courseIdea")}
                      />
                      {form.formState.errors.courseIdea && (
                        <p className="text-sm text-destructive">{form.formState.errors.courseIdea.message}</p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Submit Application
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="eligibility" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                </TabsList>
                
                <TabsContent value="eligibility" className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Who can become an educator?</h3>
                    <p className="text-muted-foreground">
                      Anyone with expertise in blockchain, Web3, cryptocurrency, or related fields can apply to become an educator on LearnVerse. We're looking for professionals with practical experience who can create valuable educational content.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Do I need teaching experience?</h3>
                    <p className="text-muted-foreground">
                      Prior teaching experience is helpful but not required. We provide resources and guidance to help you create engaging courses. Your industry knowledge and ability to explain concepts clearly are the most important qualifications.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">How long does the application process take?</h3>
                    <p className="text-muted-foreground">
                      We review applications within 48 hours and provide feedback. If approved, you'll gain access to our course creation tools immediately. The entire process from application to launching your first course can take as little as 2-3 weeks.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="payment" className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">How much can I earn?</h3>
                    <p className="text-muted-foreground">
                      Educators receive 70% of the revenue from their course sales. Your earnings depend on your course pricing and the number of students who enroll. Top educators on our platform earn between $5,000-$15,000 per month.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">How and when do I get paid?</h3>
                    <p className="text-muted-foreground">
                      Payments are made directly to your connected crypto wallet through our smart contract system. Revenue is distributed automatically when a student purchases your course, with no delays or minimum payout thresholds.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Can I set my own course prices?</h3>
                    <p className="text-muted-foreground">
                      Yes, you have full control over your course pricing. We provide recommendations based on content length and depth, but the final decision is yours. You can also offer special promotions and discounts.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="content" className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">What types of content can I create?</h3>
                    <p className="text-muted-foreground">
                      You can create video lectures, interactive quizzes, coding assignments, downloadable resources, and community discussions. Our platform supports various content formats to create an engaging learning experience.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Do you have content guidelines?</h3>
                    <p className="text-muted-foreground">
                      Yes, all content must be original, accurate, and professionally presented. We have technical standards for video and audio quality. All courses undergo a review process before being published to ensure they meet our standards.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Can I update my course after publishing?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! We encourage educators to keep their content up-to-date, especially in the rapidly evolving blockchain space. You can add new lectures, update materials, and improve your course at any time.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-brand-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Share Your Knowledge?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join our growing community of educators and help shape the future of Web3 education through blockchain-verified learning.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-600 hover:bg-white/90"
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teach;
