import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetches GitHub user data by username.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object|null>} - User data or null if an error occurs.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    return null;
  }
};
