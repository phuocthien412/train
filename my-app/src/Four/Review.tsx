import { useState } from "react";

export const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="mt-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`text-3xl px-2 py-1 rounded transition-all cursor-pointer ${
              star <= (hover || rating)
                ? "text-yellow-400 bg-yellow-100"
                : "text-gray-300 bg-gray-100"
            }`}
          >
            {star <= (hover || rating) ? "★" : "☆"}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-1">Click to rate</p>
    </div>
  );
};