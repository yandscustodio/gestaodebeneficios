const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // Armazenamento temporário de usuários

const register = (req, res) => {
  const { name, email, password, role } = req.body;

  // Verificar se o e-mail já está cadastrado
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'E-mail já cadastrado' });
  }

  // Criptografar a senha
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Criar novo usuário
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
    role, // master, admin, user
  };

  users.push(newUser);

  res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Senha inválida' });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || 'secretKey',
    { expiresIn: '1h' }
  );

  res.json({ message: 'Login realizado com sucesso', token });
};

module.exports = { register, login };
