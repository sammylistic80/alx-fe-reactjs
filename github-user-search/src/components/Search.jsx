import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const query = { username, location, minRepos };
      const data = await fetchUserData(query);
      if (data.items.length > 0) {
        setUsers(data.items);
      } else {
        setError("Looks like we can't find the user");
      }
    } catch (err) {
      setError("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        GitHub Advanced User Search
      </h2>

      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Enter location (e.g., Nigeria, USA)..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          placeholder="Minimum repository count..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
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

      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Search Results:</h3>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{user.login}</h3>
                    {user.location && <p className="text-gray-700">📍 {user.location}</p>}
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
