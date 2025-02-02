const { Sequelize } = require('sequelize');  // Importar o Sequelize

// Configuração do PostgreSQL
const sequelize = new Sequelize('gestao_db', 'gestao_db', '4I!J?J||:whylt:p.{', {
  host: 'gestao-beneficios.c7m0yyy6mihc.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false,  // Para permitir conexões sem certificado de confiança
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o PostgreSQL estabelecida com sucesso!'))
  .catch((err) => console.error('Não foi possível conectar ao banco de dados:', err.message));

module.exports = sequelize;
