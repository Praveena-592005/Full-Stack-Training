import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export default function DashboardPage() {
  const { token, user, signOut } = useAuth();
  const [message, setMessage] = useState('Loading protected data...');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDummy() {
      try {
        const response = await fetch('http://localhost:4000/api/dummy', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (!response.ok) {
          setError(data.message || 'Unable to load protected page.');
          return;
        }

        setMessage(data.message);
      } catch (err) {
        setError('Unable to connect to the server.');
      }
    }

    fetchDummy();
  }, [token]);

  return (
    <div className="dashboard-shell">
      <div className="dashboard-card">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-subtitle">Dashboard</p>
            <h1>Welcome back, {user?.name || 'User'}.</h1>
          </div>
          <button className="dashboard-signout" onClick={() => { signOut(); navigate('/login'); }}>
            Sign out
          </button>
        </header>

        <section className="dashboard-content">
          <p>{message}</p>
          {error && <p className="dashboard-error">{error}</p>}
          <div className="dashboard-info">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>User ID:</strong> {user?.id}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
