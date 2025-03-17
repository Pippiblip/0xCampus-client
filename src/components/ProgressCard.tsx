
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgressCardProps {
  id: string;
  title: string;
  progress: number;
  lastAccessedDate: string;
  nextMilestone: string;
  image: string;
}

const ProgressCard = ({ course }: { course: ProgressCardProps }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <div className="flex flex-col md:flex-row">
        <img 
          src={course.image} 
          alt={course.title}
          className="h-32 w-full md:w-32 object-cover" 
        />
        
        <div className="flex flex-col flex-grow">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-md font-medium line-clamp-1">
              <Link to={`/course/${course.id}`} className="hover:text-brand-600">
                {course.title}
              </Link>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-4 pt-0">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              
              <Progress value={course.progress} className="h-2" />
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Last accessed {course.lastAccessedDate}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Award className="h-3 w-3 text-brand-600" />
                  <span className="text-brand-600 font-medium">{course.nextMilestone}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProgressCard;
