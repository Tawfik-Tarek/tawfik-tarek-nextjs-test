import { StarHalfIcon, StarIcon } from "lucide-react";

interface RatingProps {
  rating: number;
  count: number;
}

export default function Rating({ rating, count }: RatingProps) {
  // Split the rating into full stars and check for a half star
  const fullStars = Math.floor(rating); 
  const hasHalfStar = rating % 1 >= 0.5; 

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => {
        if (index < fullStars) {
          return (
            <StarIcon
              key={index}
              className="fill-black"
              size={20}
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <StarHalfIcon
              key={index}
              className="fill-black"
              size={20}
            />
            
          );
        } else {
          return (
            <StarIcon
              key={index}
              size={20}
            />
          );
        }
      })}
      <p className="ml-2">({count})</p>
    </div>
  );
}
