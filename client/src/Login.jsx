
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", { email, password })
            .then((result) => {
                if (result.data.message === "Success") {
                    alert("Login successful!"); // Success pop-up
                    navigate('/home'); // Redirect after successful login
                } else {
                    alert(result.data.message); // Show the error message returned by backend
                }
            })
            .catch((err) => {
                console.error(err);
                alert("Login failed, please try again.");
            });
    };

    return (
        <div style={styles.container}>
            <div style={styles.card} className="p-3 rounded">
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Login
                    </button>
                </form>

                <p style={styles.text}>Don't have an account?</p>
                <Link to="/" style={styles.link}>
                    Sign up
                </Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f7f7f7", // Soft background similar to the signup form
    },
    card: {
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px", // Soft rounded corners
        width: "100%",
        maxWidth: "400px", // Adjust width for compactness
        padding: "1.5rem", // Similar padding to make it compact
        textAlign: "center",
        margin: "1rem", // Margin for better spacing on smaller screens
    },
    heading: {
        color: "#333",
        marginBottom: "1rem",
        fontSize: "2rem", // Heading size consistent with the signup form
        fontWeight: "600",
    },
    inputGroup: {
        marginBottom: "1rem", // Reduced margin to make it more compact
        textAlign: "left", // Left-align form fields for consistency
    },
    label: {
        color: "#555",
        fontWeight: "500",
        marginBottom: "0.5rem",
        fontSize: "1rem",
        display: "block",
    },
    input: {
        width: "100%",
        padding: "10px", // Reduced padding for compactness
        borderRadius: "8px", // Matching rounded corners
        border: "1px solid #ccc",
        fontSize: "1rem",
        marginBottom: "1rem", // Margin between input fields
        outline: "none",
        transition: "border-color 0.3s ease",
    },
    button: {
        width: "100%",
        padding: "10px", // Reduced padding for a smaller button
        backgroundColor: "#4CAF50", // Green button to match with the signup button
        color: "#fff",
        fontWeight: "600",
        border: "none",
        borderRadius: "8px", // Matching button radius
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        marginBottom: "1rem", // Space below button
    },
    text: {
        color: "#555",
        marginTop: "1rem",
        fontSize: "1rem",
    },
    link: {
        display: "block",
        textAlign: "center",
        marginTop: "10px",
        textDecoration: "none",
        fontWeight: "600",
        color: "#4CAF50", // Matching link color with button
    },
};

export default Login;
