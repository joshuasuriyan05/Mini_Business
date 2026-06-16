import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            setError('');

            const response = await fetch(
                `${API_BASE_URL}/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || 'Invalid email or password'
                );
            }

            // Save token
            if (data.token) {
                localStorage.setItem('token', data.token);
            }

            // Save user info
            if (data.user) {
                localStorage.setItem(
                    'user',
                    JSON.stringify(data.user)
                );
            }

            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
            <div className="w-full max-w-md">
                <Card>
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-cyan-400">
                            Login
                        </h1>

                        <p className="mt-2 text-slate-300">
                            Sign in to access the Business Operations System
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 rounded-md border border-red-500 bg-red-500/10 p-3 text-red-300">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                                className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                                className="w-full rounded-md border border-slate-600 bg-slate-800 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-md bg-cyan-500 px-4 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading
                                ? 'Signing In...'
                                : 'Login'}
                        </button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default LoginPage;