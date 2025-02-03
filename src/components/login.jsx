import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// import { addDoc, collection, } from "firebase/firestore";
import { addDoc, collection, } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import React, { useState } from "react";
import { auth, db } from "../firebaseconfig";
import '../styles/login.css';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, name, phone } = formData;

        if (isLogin) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login successful");
            } catch (error) {
                alert("Error logging in: " + error.message);
            }
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                await addDoc(collection(db, "userdetails"), {
                    uid: user.uid,
                    name,
                    email,
                    phone,
                    password,
                    createdAt: new Date(),
                });

                alert("Registration successful");
            } catch (error) {
                alert("Error signing up: " + error.message);
            }
        }
    };

return (
    <div className="auth-container">
        <div className="form-container">
            <div className="tab-header">
                <button
                    className={isLogin ? "active" : ""}
                    onClick={() => setIsLogin(true)}
                >
                    Login
                </button>
                <button
                    className={!isLogin ? "active" : ""}
                    onClick={() => setIsLogin(false)}
                >
                    Sign Up
                </button>
            </div>

            <form onSubmit={handleSubmit} className="active">
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                )}

                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            maxLength="10"
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="buttons">
                    <button type="submit" className="btn-primary">
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                    <button type="reset" className="btn-secondary" onClick={() => setFormData({ email: "", password: "", name: "", phone: "" })}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}

export default AuthForm;