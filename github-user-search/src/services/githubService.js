import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}/${username}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };
