import React from "react";
import Card from "./Card";

const CardList = ({ heros }) => {
  return (
    <div>
      {heros.map((user, i) => {
        return (
          <Card
            key={i}
            id={heros[i].id}
            name={heros[i].name}
            email={heros[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
