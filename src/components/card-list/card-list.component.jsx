import { Component } from "react";
import "./card-list.styles.css";
const CardList = ({ heroes }) => {
  return (
    <div>
      <div className="card-list">
        {heroes.map((hero) => {
          const { name, id, localized_name } = hero;
          return (
            <div key={hero.id} className="card-container">
              <img
                alt={`hero-${name}`}
                src={`https://robohash.org/${id}?set=set2`}
              />
              <h2>{localized_name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
