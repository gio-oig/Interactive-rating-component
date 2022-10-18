import CardWrapper from "../cardWrapper/cardWrapper";

import ResultSvg from "src/assets/result-svg.svg";

import "./resultCard.css";

type ResultCardProps = {
  selectedRating: number;
};

const ResultCard = ({ selectedRating }: ResultCardProps) => {
  return (
    <CardWrapper className="result-card">
      <div>
        <img src={ResultSvg} alt="payment" />
      </div>
      <p className="text-with-bg">You selected {selectedRating} out of 5</p>
      <h1 className="card__title">Thank you!</h1>
      <p className="card__desc">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </CardWrapper>
  );
};

export default ResultCard;
