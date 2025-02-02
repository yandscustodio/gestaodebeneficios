import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando o novo método para o React 18
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import App from './App'; // Seu componente principal

// Criando o root e renderizando o App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
