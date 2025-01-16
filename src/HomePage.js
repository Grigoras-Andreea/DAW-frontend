import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./HomePage.css";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://localhost:7157/api/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="home-page-title">Home Page</h1>
      <div className="recipe-cards-container">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="recipe-card"
          >
            <img
              src={recipe.photo}
              alt={recipe.title}
              className="recipe-photo"
            />
            <h3 className="recipe-title">{recipe.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
