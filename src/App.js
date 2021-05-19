import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
	const APP_ID = process.env.REACT_APP_ID;
	const APP_KEY = process.env.REACT_APP_KEY;

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	//everyime query changes, getRecipes run
	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(exampleReq);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(recipes);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div className="App">
			<h1 style={{ color: "white", textAlign: "center", paddingTop: "1rem" }}>
				Recipe App
			</h1>
			<form className="search-form" onSubmit={getSearch}>
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						ingredients={recipe.recipe.ingredients}
						image={recipe.recipe.image}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
