import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className="recipe-card">
			<h1 className="recipe-title">{title}</h1>
			<img className="recipe-img" src={image} alt={title} />
			<p>
				<h3 style={{ display: "inline" }}>Calories:</h3> {calories}
			</p>
			<h3>Ingredients:</h3>
			<ol className="recipe-ingredients">
				{ingredients.map((ingredient) => (
					<li>
						<span>{ingredient.text}</span>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Recipe;
