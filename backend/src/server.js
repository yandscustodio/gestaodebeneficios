const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const sequelize = require('./config/db');
const User = require('./models/User'); // Certifique-se de importar o modelo User

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas públicas
app.use('/api/auth', authRoutes);

// Rotas protegidas
app.use('/api/protected', protectedRoutes);

app.get('/', (req, res) => {
  res.send('API do Sistema de Gestão de Benefícios está rodando!');
});

// Sincronização do banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log('Tabelas sincronizadas com o banco de dados!');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
