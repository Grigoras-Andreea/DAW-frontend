import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./RecipeDetailsPage.css";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://localhost:7157/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p className="loading-text">Loading recipe...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="recipe-details-container">
        <div className="recipe-image-container">
          <img
            src={recipe.photo}
            alt={recipe.title}
            className="recipe-image"
          />
        </div>
        <div className="recipe-info-container">
          <h1 className="recipe-title">{recipe.title}</h1>
          <div className="recipe-section">
            <h2>Ingredients</h2>
            <ul className="ingredient-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipe-section">
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
          </div>
          <div className="date-added">
            <strong>Date Added:</strong> {new Date(recipe.dateAdded).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
