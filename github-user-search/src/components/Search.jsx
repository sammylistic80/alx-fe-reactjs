import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUsers([]);
    setLoading(true);

    if (!username) {
      setError("Please enter a GitHub username.");
      setLoading(false);
      return;
    }

    const data = await fetchUserData(username, location, minRepos);
    setLoading(false);

    if (data.length > 0) {
      setUsers(data);
    } else {
      setError("Looks like we can't find the user.");
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
          className="w-full p-2 border rounded-md"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg mb-4">
              <img
                src={user.avatar_url}
                alt="User Avatar"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="text-lg font-bold text-center mt-2">
                {user.login}
              </h3>
              <p className="text-center">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
