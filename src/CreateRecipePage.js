import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./CreateRecipePage.css";

const CreateRecipePage = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [photo, setPhoto] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!title || !ingredients || !instructions || !photo) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      await axios.post("https://localhost:7157/api/recipes", {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()), 
        instructions,
        photo, 
      });

      setSuccessMessage("Recipe created successfully!");
      setTitle("");
      setIngredients("");
      setInstructions("");
      setPhoto("");
    } catch (error) {
      console.error("Error creating recipe:", error);
      setErrorMessage("Failed to create recipe. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="create-recipe-container">
        <h1>Create a New Recipe</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="create-recipe-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients (comma-separated)</label>
            <input
              type="text"
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipePage;
