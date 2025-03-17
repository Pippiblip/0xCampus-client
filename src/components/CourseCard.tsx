
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

export interface CourseProps {
  id: string;
  title: string;
  educator: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  students: number;
  duration: string;
  discount?: number;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  const discountedPrice = course.discount 
    ? course.price - (course.price * course.discount / 100) 
    : course.price;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover" 
        />
        <Badge className="absolute top-2 right-2 bg-brand-600">
          {course.category}
        </Badge>
        
        {course.discount && (
          <div className="absolute bottom-2 right-2 bg-learn-600 text-white text-xs font-bold px-2 py-1 rounded">
            {course.discount}% OFF
          </div>
        )}
      </div>
      
      <CardHeader className="p-4 pb-2">
        <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground">by {course.educator}</p>
      </CardHeader>
      
      <CardContent className="p-4 pt-1 flex-grow">
        <div className="flex items-center gap-2 mb-2 text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-amber-500" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="font-bold">
          {course.discount ? (
            <div className="flex flex-col">
              <span className="text-md">${discountedPrice.toFixed(2)}</span>
              <span className="text-xs text-muted-foreground line-through">${course.price.toFixed(2)}</span>
            </div>
          ) : (
            <span>${course.price.toFixed(2)}</span>
          )}
        </div>
        
        <Link to={`/course/${course.id}`}>
          <Button size="sm" variant="default">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
