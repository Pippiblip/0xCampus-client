
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-brand-600" />
              <span className="font-bold text-xl gradient-text">LearnVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Decentralized education platform with performance-based incentives and blockchain certificates.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/marketplace" className="text-muted-foreground hover:text-brand-600">Courses</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-brand-600">Student Dashboard</Link></li>
              <li><Link to="/teach" className="text-muted-foreground hover:text-brand-600">Teach on LearnVerse</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-brand-600">About Us</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-muted-foreground hover:text-brand-600">FAQ</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-brand-600">Blockchain Guides</Link></li>
              <li><Link to="/documentation" className="text-muted-foreground hover:text-brand-600">Documentation</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-brand-600">Support</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-brand-600">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-brand-600">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-brand-600">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2023 LearnVerse. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-brand-600">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-600">
              Discord
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-600">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
