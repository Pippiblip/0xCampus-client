
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { featuredCourses } from '@/data/mockData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { GraduationCap, Rocket, Clock, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container relative z-10 py-12 md:py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
            Learn, Earn, and Own Your Educational Journey
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            The first blockchain-based education platform with performance incentives and ownership certificates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/marketplace">
              <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90">
                Browse Courses
              </Button>
            </Link>
            <Link to="/teach">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Become an Educator
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            How <span className="gradient-text">LearnVerse</span> Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn at Your Pace</h3>
              <p className="text-muted-foreground">
                Access high-quality courses from top educators in blockchain, development, and more.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-learn-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-learn-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Incentives</h3>
              <p className="text-muted-foreground">
                Get discounts and benefits based on your learning performance and consistency.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Own Your Achievements</h3>
              <p className="text-muted-foreground">
                Receive blockchain certificates that verify your skills and knowledge permanently.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/marketplace">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform Metrics
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold gradient-text">50+</span>
              <span className="text-muted-foreground text-center mt-2">Courses Available</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold gradient-text">12k+</span>
              <span className="text-muted-foreground text-center mt-2">Active Learners</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold gradient-text">8.5k</span>
              <span className="text-muted-foreground text-center mt-2">Certificates Issued</span>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold gradient-text">92%</span>
              <span className="text-muted-foreground text-center mt-2">Completion Rate</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <p className="italic text-muted-foreground mb-4">
                "The time-based discount incentives kept me motivated to complete modules quickly. I earned a 20% discount on my next course!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center mr-3">
                  <span className="font-medium text-brand-700">JS</span>
                </div>
                <div>
                  <p className="font-medium">Jamie Smith</p>
                  <p className="text-sm text-muted-foreground">Blockchain Developer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <p className="italic text-muted-foreground mb-4">
                "I love how my NFT certificate proves my skills on the blockchain. It's helped me land freelance projects with proof of my expertise."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-learn-200 flex items-center justify-center mr-3">
                  <span className="font-medium text-learn-700">AR</span>
                </div>
                <div>
                  <p className="font-medium">Aisha Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Smart Contract Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <p className="italic text-muted-foreground mb-4">
                "The streak system keeps me coming back daily. I'm currently on a 28-day streak and have unlocked several bonus materials!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center mr-3">
                  <span className="font-medium text-brand-700">TK</span>
                </div>
                <div>
                  <p className="font-medium">Tom Kumar</p>
                  <p className="text-sm text-muted-foreground">Web3 Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-brand-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Web3 Learning Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of learners already benefiting from blockchain-verified education and performance rewards.
          </p>
          <Link to="/marketplace">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
