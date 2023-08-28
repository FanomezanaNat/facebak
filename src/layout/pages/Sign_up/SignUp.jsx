import React, { useState } from "react";
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
 // Obtenir l'objet history

    const handleSignUp = async () => {
        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    confirmPassword,
                    username,
                }),
            });

            if (response.ok) {
                setError(null); // Redirection vers la page de connexion
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src="" alt="" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="submit-container">
                <div className="submit" onClick={handleSignUp}>
                    Sign up
                </div>
            </div>
        </div>
    );
};

export default SignUp;
