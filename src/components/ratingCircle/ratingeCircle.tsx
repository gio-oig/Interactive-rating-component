type RatingCircleProps = {
  rating: number;
  isActive: boolean;
  onClick: () => void;
};

const RatingCircle = ({ rating, isActive, onClick }: RatingCircleProps) => {
  return (
    <div
      className={`card_rating ${isActive ? "card_rating--selected" : ""}`}
      onClick={onClick}
    >
      {rating}
    </div>
  );
};

export default RatingCircle;
