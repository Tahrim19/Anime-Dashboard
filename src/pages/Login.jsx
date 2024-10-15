import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container flex items-center justify-center min-h-screen" >
            <div className="login-card shadow-lg p-8 rounded-lg" style={{ backgroundColor: 'rgb(243,232,255)' }}>
                <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: 'rgb(126,34,206)' }}>Login</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 rounded shadow-sm border border-gray-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded shadow-sm border border-gray-300"
                    />
                    <button 
                        type="submit" 
                        className="p-3 rounded mt-4 text-white font-bold" 
                        style={{ backgroundColor: 'rgb(126,34,206)' }}
                    >
                        Login
                    </button>
                </form>
                <p className="text-center mt-4">
                    Don't have an account? <Link to="/signup" className="font-bold text-indigo-600">Register Now!</Link>
                </p>
            </div>
        </div>
    );
}
