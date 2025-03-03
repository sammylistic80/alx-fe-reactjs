import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Whenever the search term changes, update the filtered recipes
  // (You can also implement a debounced version for performance if needed)
  useEffect(() => {
    filterRecipes();
  }, [setSearchTerm, filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => {
        // Update search term in the store on every keystroke
        setSearchTerm(e.target.value);
        // Optionally, trigger filtering immediately
        filterRecipes();
      }}
    />
  );
};

export default SearchBar;
