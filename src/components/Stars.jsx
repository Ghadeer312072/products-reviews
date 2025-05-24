import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Stars({ numberOfStars }) {
  const safeValue = numberOfStars > 0 && numberOfStars < 6 ? numberOfStars : 0;
  const fullStars = Math.floor(safeValue);
  const halfStar = safeValue - fullStars >= 0.5 ? 1 : 0;

  return (
    <div className="flex text-yellow-400 gap-0.5">
      {
        [1, 2, 3, 4, 5].map((item) => {
          return item <= fullStars ? <FaStar key={item} /> :
            item === fullStars + 1 && halfStar === 1 ? <FaStarHalfAlt key={item} /> : <FaRegStar key={item} />
        })}

    </div>
  );
}
