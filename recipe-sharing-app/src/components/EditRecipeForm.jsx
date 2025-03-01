// src/components/EditRecipeForm.jsx
import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe, closeForm }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={closeForm}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
