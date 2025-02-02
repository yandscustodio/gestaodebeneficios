import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obter o token do localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login';  // Redireciona para o login se não houver token
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('https://<seu-endereco>.github.dev/api/protected/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao acessar o dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Bem-vindo ao Dashboard</h2>
      <p>Usuário: {userData.user.name}</p>
      <p>Papel: {userData.user.role}</p>
    </div>
  );
};

export default Dashboard;
