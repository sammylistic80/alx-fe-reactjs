import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const handleSearch = async (e) => {
      e.preventDefault();
      
      if (!username.trim()) {
        setError("Please enter a GitHub username.");
        return;
      }
  
      setLoading(true);
      setError("");
      setUserData(null);
  
      try {
        const data = await fetchUserData(username);
        if (data) {
          setUserData(data);
        } else {
          setError("Looks like we can't find the user.");
        }
      } catch (err) {
        setError("An error occurred while fetching user data.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          GitHub User Search
        </h2>
  
        <form onSubmit={handleSearch} className="space-y-4">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
  
        {loading && <p className="text-blue-500 text-center mt-3">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
  
        {userData && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold mt-2">{userData.name || userData.login}</h3>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    );
  }
  
  export default Search;