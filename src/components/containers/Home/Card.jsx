import React from "react";

const Card = ({ image, className,direction="col", children }) => {
  return <div className={className}>
    <div className={"d-flex flex flex-start flex-"+direction}>
      <img src={image} />
      {children}
    </div>
  </div>;
}

export default Card;