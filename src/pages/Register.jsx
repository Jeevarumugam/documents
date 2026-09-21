import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setconformPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const alreadyRegistered = localStorage.getItem("registered");

    if (alreadyRegistered === "true") {
      alert("Already registered. Please login");
      window.location.href = "/Login";
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);
    localStorage.setItem("registered", "true");

    alert("Registration Successful");

    window.location.href = "/Login";
  };

  return (
    <div className="container1">
      <h1 className="register-form-h1">Register </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="register-form-input"
          type="text"
          placeholder="Enter name"
          required
        />
        <br />
        <br />
        <input
          className="register-form-input"
          type="email"
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
          onChange={(e) => setconformPassword(e.target.value)}
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
