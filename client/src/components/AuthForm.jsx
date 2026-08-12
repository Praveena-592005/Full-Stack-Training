import './AuthForm.css';

export default function AuthForm({ title, buttonText, children, onSubmit, error }) {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{title}</h1>
          <p>Enter your credentials to continue to your dashboard.</p>
        </div>
        <form className="auth-form" onSubmit={onSubmit}>
          {children}
          {error && <div className="auth-error">{error}</div>}
          <button className="auth-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
