import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showNumber?: boolean;
}

export function StarRating({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  className = '',
  showNumber = false 
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => {
          const starValue = index + 1;
          return (
            <Star
              key={starValue}
              className={`${sizeClasses[size]} ${
                starValue <= rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          );
        })}
      </div>
      {showNumber && (
        <span className="ml-2 text-sm text-gray-600">
          {rating.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  );
}
