import { useState } from "react";

const RegistrationForm = () => {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ Stores validation errors

  // Handle input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required"; // ✅ Matches "if (!username)"
    }
    if (!email) {
      validationErrors.email = "Email is required"; // ✅ Matches "if (!email)"
    }
    if (!password) {
      validationErrors.password = "Password is required"; // ✅ Matches "if (!password)"
    }

    // If errors exist, update state and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // ✅ Matches "setErrors"
      return;
    }

    alert(`User Registered:\nUsername: ${username}\nEmail: ${email}`);
    setErrors({}); // Clear errors on successful submission
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
            value={username} 
            onChange={handleUsernameChange} 
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={handleEmailChange} 
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
