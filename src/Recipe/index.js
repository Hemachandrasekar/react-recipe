import React, { useState, useEffect } from "react";
import ListRecipe from "./ListRecipe";

const Recipe = () => {
  const keyApiID = "798c7931";
  const keyApi = "fa10d39d3a2887c9b13417a70728c799";

  // const requestApi = `https://api.edamam.com/search?q=chicken&app_id=${keyApiID}&app_key=${keyApi}`;
  // console.log("result", requestApi);

  // const [counter, setCount] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    // console.log("effect from the react");
    getRequest();
  }, [query]);

  const getRequest = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${keyApiID}&app_key=${keyApi}`
    );
    const data = await response.json();
    console.log("Data Response", data.hits);
    setRecipe(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <h2>welcome Recipe</h2>
      <form className="search-from" onSubmit={getSearch}>
        <input
          className="search-box"
          type="text"
          name="search"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      {/* <span onClick={() => setCount(counter + 1)}>{counter}</span> */}
      {recipe.map((items) => {
        return (
          <ListRecipe
            title={items.recipe.label}
            ingredients={items.recipe.ingredients}
            image={items.recipe.image}
          />
        );
      })}
    </div>
  );
};
export default Recipe;
