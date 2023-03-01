/*import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main"></div>
  )
}


export default App;*/
import React, { useState } from "react";
import '../styles/App.css';
const App= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !gender || !phone || !password) {
      setError("All fields are mandatory");
      return;
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
      setError("Name is not alphanumeric");
      return;
    }
    if (!/@/.test(email)) {
      setError("Email must contain @");
      return;
    }
    if (!["male", "female", "other"].includes(gender)) {
      setError("Please identify as male, female or others");
      return;
    }
    if (!/^\d+$/.test(phone)) {
      setError("Phone Number must contain only numbers");
      return;
    }
    if (password.length < 6) {
      setError("Password must contain at least 6 letters");
      return;
    }
    const username = email.split("@")[0];
    alert(`Hello ${username}`);
    setError("");
    setName("");
    setEmail("");
    setGender("male");
    setPhone("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email"
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          data-testid="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          data-testid="phoneNumber"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password"
        />
      </div>
      <div>
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
