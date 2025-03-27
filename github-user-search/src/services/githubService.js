import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUserSearch = async ({ username, location, minRepos }) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  const searchQuery = query.join("+");

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw error;
  }
};
