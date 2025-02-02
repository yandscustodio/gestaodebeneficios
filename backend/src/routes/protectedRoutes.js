const router = require('express').Router();
const authenticateToken = require('../middleware/authMiddleware'); // Certifique-se de que o caminho está correto

router.get('/dashboard', authenticateToken, (req, res) => {
  res.json({
    message: 'Bem-vindo ao painel de controle!',
    user: req.user,
  });
});

module.exports = router;
