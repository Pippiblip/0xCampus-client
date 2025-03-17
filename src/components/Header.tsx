
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Wallet, 
  Menu, 
  X,
  GraduationCap,
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connectWallet = () => {
    // Simulate wallet connection
    setIsConnected(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap className="h-6 w-6 text-brand-600" />
            <span className="gradient-text">LearnVerse</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/marketplace" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Courses
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/rewards" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Rewards
          </Link>
          <Link to="/teach" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Become an Educator
          </Link>
        </nav>

        {/* Search and Wallet */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="w-[200px] pl-8 rounded-full bg-muted"
            />
          </div>
          
          {isConnected ? (
            <Button variant="outline" className="gap-2 text-xs">
              <Wallet className="h-4 w-4" />
              <span className="truncate">0x1234...5678</span>
            </Button>
          ) : (
            <Button onClick={connectWallet} variant="default" className="gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link to="/marketplace" className="text-sm font-medium" onClick={toggleMenu}>
                Courses
              </Link>
              <Link to="/dashboard" className="text-sm font-medium" onClick={toggleMenu}>
                Dashboard
              </Link>
              <Link to="/rewards" className="text-sm font-medium" onClick={toggleMenu}>
                Rewards
              </Link>
              <Link to="/teach" className="text-sm font-medium" onClick={toggleMenu}>
                Become an Educator
              </Link>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full pl-8 rounded-full bg-muted"
                />
              </div>
              {!isConnected && (
                <Button onClick={connectWallet} variant="default" className="gap-2 mt-2">
                  <Wallet className="h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
