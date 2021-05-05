import React from "react";
import "./recipe.css";

const ListRecipe = (props) => {
  return (
    <div className="recipealign">
      <div className="recipe">
        <h3>{props.title}</h3>
        <ol>
          {props.ingredients.map((item) => {
            return <li className="recipe_list">{item.text}</li>;
          })}
        </ol>
        <img className="image" src={props.image} alt="" />
      </div>
    </div>
  );
};

export default ListRecipe;
