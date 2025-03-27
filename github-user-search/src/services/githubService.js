import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username, location = "", minRepos = 0) => {
    try {
      // Construct query parameters for advanced search
      let query = `q=${username}`;
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>=${minRepos}`;
  
      const response = await axios.get(`${BASE_URL}?${query}`);
      return response.data.items; // GitHub Search API returns results in an 'items' array
    } catch (error) {
      console.error("Error fetching user data:", error);
      return [];
    }
  };
