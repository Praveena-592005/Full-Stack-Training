import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../components/AuthContext';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please provide your name, email, and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Sign up failed.');
        return;
      }

      setToken(data.token);
      setUser(data.user);
      navigate('/dashboard');
    } catch (err) {
      setError('Unable to connect to the server.');
    }
  };

  return (
    <AuthForm title="Create your account" buttonText="Sign Up" onSubmit={handleSubmit} error={error}>
      <label>
        Name
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Create a password"
        />
      </label>
      <div className="auth-footer">
        <span>Already have an account?</span>
        <Link to="/login">Login instead</Link>
      </div>
    </AuthForm>
  );
}
