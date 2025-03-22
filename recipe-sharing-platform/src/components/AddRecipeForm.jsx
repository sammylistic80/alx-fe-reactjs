import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsArray = ingredients.split(",").map((item) => item.trim());
    if (ingredientsArray.length < 2) {
      setError("Please enter at least two ingredients, separated by commas.");
      return;
    }

    setError(""); // Clear previous errors

    // Mock recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientsArray,
      steps,
    };

    console.log("New Recipe Added:", newRecipe);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Add a New Recipe
      </h2>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients</label>
          <textarea
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            rows="3"
            placeholder="Enter ingredients, separated by commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Steps Field */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps</label>
          <textarea
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Enter cooking steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
