import { ReactNode } from "react";
import "./cardWrapper.css";

type CardWrapperProps = {
  className?: string;
  children: ReactNode;
};

const CardWrapper = ({ children, className }: CardWrapperProps) => {
  return <div className={`card-wrapper ${className}`}>{children}</div>;
};

export default CardWrapper;
