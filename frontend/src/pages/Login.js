import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css'; // Importando o CSS da página de login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://<seu-endereco>.github.dev/api/auth/login', {
        email,
        password,
      });

      // Armazenar o token no localStorage
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';  // Redireciona para o dashboard após login
    } catch (error) {
      setErrorMessage('Erro ao fazer login. Verifique as credenciais.');
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="bg-overlay"></div>
      <div className="auth-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="auth-one-bg">
                <div className="position-relative h-100 d-flex flex-column">
                  <div className="mb-4">
                    <a href="/" className="d-block">
                      <img src="assets/images/logo-light.png" alt="" height="18" />
                    </a>
                  </div>
                  <div className="carousel-container">
                    <div className="carousel-inner text-center text-white-50 pb-5">
                      <div className="carousel-item active">
                        <p className="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                      </div>
                      <div className="carousel-item">
                        <p className="fs-15 fst-italic">" The theme is really great with an amazing customer support."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-lg-5 p-4">
                <h5 className="text-primary">Welcome Back!</h5>
                <p className="text-muted">Sign in to continue to Velzon.</p>

                <form onSubmit={handleSubmit}>
                  {errorMessage && <p className="text-danger">{errorMessage}</p>}

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>

                  <div className="mt-4">
                    <button className="btn btn-success w-100" type="submit">Sign In</button>
                  </div>
                </form>

                <div className="mt-5 text-center">
                  <p className="mb-0">Don't have an account? <a href="/signup" className="text-primary">Signup</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="text-center">
            <p>© {new Date().getFullYear()} Velzon. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
