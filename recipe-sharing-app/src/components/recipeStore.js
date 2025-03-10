// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: "", // ✅ Added searchTerm

  // Existing actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    })),
  setRecipes: (recipes) => set({ recipes }),

  // ✅ Added setSearchTerm action
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Favorites actions
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

  // Generate recommendations (mock implementation)
  generateRecommendations: () =>
    set((state) => {
      // For this example, recommend recipes that are favorites and pass a random filter.
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
