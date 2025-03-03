import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      // After deletion, navigate back to the recipe list or desired route.
      navigate("/");
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
