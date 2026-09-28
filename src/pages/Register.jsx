import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");
        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("REGISTER ERROR:", error);
      alert("REGISTER ERROR:" + error.message);
    }
  };

  return (
    <div className="container1">
      <h1 className="register-form-h1">Register </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="register-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <br />
        <br />
        <input
          className="register-form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <br />
        <br />
        <input
          className="register-form-input"
          type={showPassword ? "text" : "password"}
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%*]).{8,}"
          title="password must be 1 uppercase.1lowercase,1number,1specialcharacter and minimum 8 characters"
          required
        />

        <label>
          <input
            className="checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </label>
        <br />
        <br />
        <input
          className="register-form-input"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          required
        />
        <label>
          <input
            className="checkbox"
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </label>
        <br />
        <br />
        <button className="register-form-button" type="Submit">
          Register
        </button>
        <br />
        <br />
        <p className="p-tag">
          already register? {""}
          <a href="/Login">click here to login</a>
        </p>
      </form>
    </div>
  );
}
export default Register;
