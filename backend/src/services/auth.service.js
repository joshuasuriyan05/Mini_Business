const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { prisma } = require('../lib/prisma');

function createError(message, statusCode = 400) {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
}

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

async function registerUser(data) {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw createError('All fields are required');
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw createError('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash: hashedPassword,   // ✅ FIXED
      role: 'USER',
    },
  });

  return {
    message: 'User registered successfully',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

async function loginUser(data) {
  const { email, password } = data;

  if (!email || !password) {
    throw createError('Email and password required');
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw createError('Invalid credentials', 401);
  }

  // ❌ WRONG: user.password
  // ✅ CORRECT: user.passwordHash
  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    throw createError('Invalid credentials', 401);
  }

  const token = generateToken(user);

  return {
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}

module.exports = {
  registerUser,
  loginUser,
};