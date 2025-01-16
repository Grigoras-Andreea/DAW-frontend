# Recipe App

A simple Recipe application that allows users to create and view recipes. This application consists of both a frontend built with React.js
and a backend API built with ASP.NET Core. Users can add new recipes, including the title, ingredients, instructions, and a photo, and view a list of recipes.

## Features

- **Create Recipe**: Users can submit new recipes with title, ingredients (comma-separated), instructions, and photo.
- **View Recipes**: Displays a list of recipes with their title and image on the homepage.
- **Recipe Details**: Users can click on any recipe to view more details including ingredients, instructions, and a full-size photo.
- **Contact Page**: A page with contact information, including email, phone, and address.

## Technologies Used

- **Frontend**: 
  - React.js
  - React Router for navigation
  - Axios for HTTP requests
  - File handling for photo uploads (base64)

- **Backend**: 
  - ASP.NET Core API
  - MongoDB for storing recipe data
  - REST API to handle recipes CRUD operations

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [ASP.NET Core SDK](https://dotnet.microsoft.com/download)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Frontend Setup (React)

1. Clone the repository
2. Install the required dependencies (npm install)
3. Start the development server (npm start / yarn start)
The app will be available at http://localhost:3000

### Backend Setup (ASP.NET Core) - (https://github.com/Grigoras-Andreea/DAW-backend)
1. Open and run from Visual Studio

### MongoDB Setup
1. Install MongoDB on your machine or use a cloud service like MongoDB Atlas.
2. Ensure that your MongoDB instance is running and properly configured.
3. Update the appsettings.json file (in the ASP.NET Core project) with the correct MongoDB connection string.

## Frontend Pages
- HomePage: Displays a list of recipes.
- RecipeDetailsPage: Displays details of a specific recipe.
- CreateRecipePage: Allows users to create new recipes.
- ContactPage: A page with contact information.
