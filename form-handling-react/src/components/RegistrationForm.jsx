import { useState } from "react";

const RegistrationForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Registered:\nUsername: ${formData.username}\nEmail: ${formData.email}`);
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
            value={formData.username} // ✅ Controlled value
            onChange={handleChange} 
          />
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} // ✅ Controlled value
            onChange={handleChange} 
          />
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} // ✅ Controlled value
            onChange={handleChange} 
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
