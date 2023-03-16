import React from "react";
import halfStar from "../../assets/half-star.svg";
import fullStar from "../../assets/full-star.svg";
import "./rating.scss";

interface RatingProps {
  rating: number;
}

const stars = (num: number) => {
  const jsx: JSX.Element[] = [];

  if (num % 1 === 0) {
    for (let i = 1; i <= num; i++) {
      jsx.push(<img src={fullStar} alt="full star" key={i} />);
    }
  } else {
    console.log((4.2 % 1) * 10);
    for (let i = 1; i <= Math.floor(num); i++) {
      jsx.push(<img src={fullStar} alt="full star" key={i} />);
    }
    if ((num % 1) * 10 > 2.5 && (num % 1) * 10 < 7.5) {
      jsx.push(<img src={halfStar} alt="half star" key={num + 1} />);
    } else if ((num % 1) * 10 > 7.5) {
      jsx.push(<img src={fullStar} alt="full star" key={num + 1} />);
    }
  }

  return jsx;
};

function Rating({ rating }: RatingProps) {
  return <div className="stars-container">{stars(rating)}</div>;
}

export default Rating;
