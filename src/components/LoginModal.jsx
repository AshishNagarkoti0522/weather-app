import React, { useState } from 'react';

function LoginModal({ onLogin, onClose }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username);
        }
    };

    return (
        <div className="login-modal-overlay">
            <div className="login-modal-box">
                <button className="close" onClick={onClose}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Username or Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                    />
                    <button className='Submit' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
