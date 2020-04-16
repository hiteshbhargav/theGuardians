import React from "react";

const Card = (props) => {
  const { id, name, email } = props;

  return (
    <div className="bg-light-green dib br3 ma4 grow bw2 tc shadow-5">
      <img alt="hero" src={`https://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
