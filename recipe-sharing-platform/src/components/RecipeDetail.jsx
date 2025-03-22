import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Adjust path if necessary
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold text-blue-800 mt-4">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        {/* Ingredients Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Cooking Instructions */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
          <ol className="list-decimal pl-6 mt-2 text-gray-700">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mt-1">{step}</li>
            ))}
          </ol>
        </div>

        <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
