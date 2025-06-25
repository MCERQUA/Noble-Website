import { CheckCircle, ThumbsUp } from 'lucide-react';
import { StarRating } from './StarRating';

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
  location?: string;
  verified?: boolean;
  helpful?: number;
}

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export function ReviewCard({ review, className = '' }: ReviewCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{review.name}</h3>
          <div className="flex items-center mt-1">
            <StarRating rating={review.rating} />
            <span className="ml-2 text-sm text-gray-600">
              {review.date}
            </span>
          </div>
        </div>
        {review.verified && (
          <div className="flex items-center text-green-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span className="text-xs">Verified</span>
          </div>
        )}
      </div>
      
      <p className="text-gray-700 mb-4">{review.comment}</p>
      
      {review.service && (
        <div className="text-sm text-gray-600 mb-3">
          <strong>Service:</strong> {review.service}
        </div>
      )}
      
      {review.location && (
        <div className="text-sm text-gray-600 mb-3">
          <strong>Location:</strong> {review.location}
        </div>
      )}
      
      {review.helpful && (
        <div className="flex items-center text-sm text-gray-600">
          <ThumbsUp className="h-4 w-4 mr-1" />
          <span>{review.helpful} people found this helpful</span>
        </div>
      )}
    </div>
  );
}
