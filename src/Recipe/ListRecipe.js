import React from "react";
// import "./recipe.css";

const ListRecipe = (props) => {
  return (
    <div className="flex flex-col py-4 shadow gap-4 ">
      <h3 className="text-2xl text-center text-yellow-300">{props.title}</h3>
      <ol className="text-center">
        {props.ingredients.map((item) => {
          return <li className="recipe_list">{item.text}</li>;
        })}
      </ol>

      <img className="rounded-lg w-4/5" src={props.image} alt="" />
    </div>
  );
};

export default ListRecipe;
