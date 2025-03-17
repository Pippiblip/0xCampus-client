
// Mock data for our application

export const featuredCourses = [
  {
    id: "1",
    title: "Blockchain Fundamentals: From Zero to Hero",
    educator: "Alex Johnson",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
    category: "Blockchain",
    rating: 4.8,
    students: 2345,
    duration: "10h 30m",
    discount: 15,
  },
  {
    id: "2",
    title: "Smart Contract Development with Solidity",
    educator: "Maria Garcia",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1659535824233-62142913ed63?q=80&w=2940&auto=format&fit=crop",
    category: "Development",
    rating: 4.9,
    students: 1872,
    duration: "15h 45m",
  },
  {
    id: "3",
    title: "Decentralized Finance (DeFi) Explained",
    educator: "John Smith",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2797&auto=format&fit=crop",
    category: "Finance",
    rating: 4.6,
    students: 3201,
    duration: "8h 15m",
    discount: 20,
  },
  {
    id: "4",
    title: "NFT Creation and Marketing",
    educator: "Sarah Williams",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1645271798043-8a562c639ba1?q=80&w=2913&auto=format&fit=crop",
    category: "NFT",
    rating: 4.7,
    students: 1543,
    duration: "6h 20m",
  },
];

export const allCourses = [
  ...featuredCourses,
  {
    id: "5",
    title: "Web3 Application Development",
    educator: "Michael Chen",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1655720406100-3f1eda0a4519?q=80&w=2832&auto=format&fit=crop",
    category: "Development",
    rating: 4.5,
    students: 985,
    duration: "12h 10m",
  },
  {
    id: "6",
    title: "Crypto Trading Strategies",
    educator: "Emma Davis",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1625232552061-8b82f443dc64?q=80&w=2940&auto=format&fit=crop",
    category: "Trading",
    rating: 4.3,
    students: 2780,
    duration: "9h 45m",
    discount: 10,
  },
  {
    id: "7",
    title: "Blockchain Security Best Practices",
    educator: "David Wilson",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=2940&auto=format&fit=crop",
    category: "Security",
    rating: 4.8,
    students: 1250,
    duration: "11h 30m",
  },
  {
    id: "8",
    title: "Tokenomics & Crypto Economics",
    educator: "Jessica Brown",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=2940&auto=format&fit=crop",
    category: "Economics",
    rating: 4.6,
    students: 1675,
    duration: "8h 50m",
    discount: 25,
  },
];

export const courseCategories = [
  "All",
  "Blockchain",
  "Development",
  "Finance",
  "NFT",
  "Security",
  "Trading",
  "Economics"
];

export const enrolledCourses = [
  {
    id: "1",
    title: "Blockchain Fundamentals: From Zero to Hero",
    progress: 65,
    lastAccessedDate: "2 days ago",
    nextMilestone: "Complete Module 7 for 10% discount",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Decentralized Finance (DeFi) Explained",
    progress: 32,
    lastAccessedDate: "Yesterday",
    nextMilestone: "Complete Quiz 3 for streak bonus",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2797&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Crypto Trading Strategies",
    progress: 18,
    lastAccessedDate: "5 days ago",
    nextMilestone: "Watch next 3 videos for badge",
    image: "https://images.unsplash.com/photo-1625232552061-8b82f443dc64?q=80&w=2940&auto=format&fit=crop",
  },
];

export const userStats = {
  learningStreak: {
    days: 7,
    previousBest: 12
  },
  totalCoursesEnrolled: 3,
  averageQuizScore: 82,
  totalHoursLearned: 28.5,
  earnedDiscounts: [
    {
      id: "discount1",
      percentage: 15,
      courseId: "5",
      expiresIn: "5 days",
    },
    {
      id: "discount2",
      percentage: 20,
      courseId: "7",
      expiresIn: "2 days",
    }
  ]
};

export const courseDetails = {
  id: "1",
  title: "Blockchain Fundamentals: From Zero to Hero",
  educator: "Alex Johnson",
  price: 89.99,
  image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
  category: "Blockchain",
  rating: 4.8,
  students: 2345,
  duration: "10h 30m",
  discount: 15,
  description: "Learn the core concepts of blockchain technology, from basic cryptography to consensus mechanisms and beyond. This comprehensive course takes you from complete beginner to blockchain proficient, with practical examples and hands-on projects.",
  prerequisites: ["Basic computer knowledge", "No prior blockchain experience needed"],
  whatYouWillLearn: [
    "Understand the fundamental concepts of blockchain technology",
    "Learn about cryptography and how it secures the blockchain",
    "Explore different consensus mechanisms like Proof of Work and Proof of Stake",
    "Discover the differences between public, private, and permissioned blockchains",
    "Build a simple blockchain application"
  ],
  modules: [
    {
      title: "Introduction to Blockchain",
      lessons: ["What is Blockchain?", "History of Blockchain", "Key Terminologies"],
      duration: "1h 30m"
    },
    {
      title: "Cryptography Basics",
      lessons: ["Hash Functions", "Public & Private Keys", "Digital Signatures"],
      duration: "2h 15m"
    },
    {
      title: "Consensus Mechanisms",
      lessons: ["Proof of Work", "Proof of Stake", "Other Consensus Algorithms"],
      duration: "2h 45m"
    },
    {
      title: "Blockchain Applications",
      lessons: ["Cryptocurrencies", "Smart Contracts", "DAOs", "NFTs"],
      duration: "2h 50m"
    },
    {
      title: "Building on Blockchain",
      lessons: ["Setting Up a Development Environment", "Creating a Simple Blockchain", "Project Work"],
      duration: "3h 10m"
    }
  ],
  reviews: [
    {
      user: "Michael R.",
      rating: 5,
      comment: "Excellent introduction to blockchain! The explanations are clear and the practical examples really helped me understand the concepts.",
      date: "2 months ago"
    },
    {
      user: "Sarah T.",
      rating: 4,
      comment: "Great course with lots of valuable information. Would have liked more coding examples, but overall very good.",
      date: "1 month ago"
    },
    {
      user: "James L.",
      rating: 5,
      comment: "Alex is an amazing instructor! He breaks down complex concepts into easy-to-understand explanations.",
      date: "3 weeks ago"
    }
  ]
};
