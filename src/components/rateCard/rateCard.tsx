import { Dispatch, SetStateAction, useState } from "react";

import CardWrapper from "src/components/cardWrapper/cardWrapper";
import RatingCircle from "src/components/ratingCircle/ratingeCircle";

import StarSvg from "src/assets/star.svg";

import "./rateCard.css";

const ratings = Array(5)
  .fill(0)
  .map((_, i) => i + 1);

type RateCardProps = {
  onSubmit: () => void;
  selectedrating: number;
  setSelectedrating: Dispatch<SetStateAction<number>>;
};

const RateCard = ({
  selectedrating,
  setSelectedrating,
  onSubmit,
}: RateCardProps) => {
  return (
    <CardWrapper>
      <div className="rate-card-header-image">
        <img src={StarSvg} alt="star" />
      </div>
      <h1 className="card__title">How did we do?</h1>
      <p className="card__desc">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="card_ratings">
        {ratings.map((rating) => (
          <RatingCircle
            rating={rating}
            isActive={selectedrating === rating}
            onClick={() => setSelectedrating(rating)}
          />
        ))}
      </div>
      <button className="card_submit" onClick={onSubmit}>
        submit
      </button>
    </CardWrapper>
  );
};

export default RateCard;
