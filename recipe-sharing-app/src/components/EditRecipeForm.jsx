import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, closeForm }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState({ ...recipe });
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({ ...updatedRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(updatedRecipe);
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={updatedRecipe.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={updatedRecipe.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
