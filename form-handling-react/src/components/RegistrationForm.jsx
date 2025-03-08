import { useState } from "react";

const RegistrationForm = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Registered:\nUsername: ${username}\nEmail: ${email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>User Registration (Controlled Form)</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            name="username" 
            value={username} // ✅ Matches requirement
            onChange={handleUsernameChange} 
          />
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={email} // ✅ Matches requirement
            onChange={handleEmailChange} 
          />
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={password} // ✅ Matches requirement
            onChange={handlePasswordChange} 
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
