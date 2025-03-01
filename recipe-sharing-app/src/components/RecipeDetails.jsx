// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  // Ensure recipeId is a number if your IDs are numeric.
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  // Local state to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* You can also show more details if available */}
      {isEditing ? (
        <EditRecipeForm recipe={recipe} closeForm={() => setIsEditing(false)} />
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
