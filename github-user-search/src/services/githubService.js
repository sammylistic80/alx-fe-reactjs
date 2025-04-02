import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/search/users?q";
const GITHUB_API_TOKEN = "YOUR_GITHUB_API_TOKEN"; // Replace with your actual GitHub API token

export const fetchUserData = async (username, location = "", minRepos = 0) => {
    try {
      // Construct query parameters for advanced search
      let query = `q=${username}`;
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>=${minRepos}`;
  
      // Include the API token in the request headers
      const response = await axios.get(`${GITHUB_API_BASE_URL}?${query}`, {
        headers: {
          'Authorization': `token ${GITHUB_API_TOKEN}`, // Add Authorization header
        }
      });
      return response.data.items; // GitHub Search API returns results in an 'items' array
    } catch (error) {
      console.error("Error fetching user data:", error);
      return [];
    }
};
