import { useState } from "react";
import API from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
<<<<<<< HEAD
    try {
      await API.post("/auth/register", { name, email, password });
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 30,
        border: "1px solid #eee",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Create Account</h2>
      <input
        style={inputStyle}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={inputStyle}
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={inputStyle}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
        onClick={register}
      >
        Register
      </button>
=======
    await API.post("/auth/register", { name, email, password });
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Create Account</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
>>>>>>> 7b8ae07c1051406c806cfcbc5610c31267794dac
    </div>
  );
}
