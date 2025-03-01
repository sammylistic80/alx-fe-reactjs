import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],

  // ✅ Add Recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  // ✅ Update Recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // ✅ Delete Recipe
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  // ✅ Set Recipes (Optional for initializing)
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
