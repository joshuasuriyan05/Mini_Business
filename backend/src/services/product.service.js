const { prisma } = require('../lib/prisma');
const { createAppError } = require('../utils/appError');

async function getAllProducts() {
  return prisma.product.findMany({
    orderBy: {
      id: 'asc',
    },
  });
}

async function getProductById(id) {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
}

async function createProduct(data) {
  const { sku, name, price, stockQty } = data;

  if (!sku || !name) {
    throw createAppError(
      'SKU and name are required',
      400
    );
  }

  if (Number(price) <= 0) {
    throw createAppError(
      'Price must be greater than zero',
      400
    );
  }

  const existingProduct =
    await prisma.product.findUnique({
      where: {
        sku,
      },
    });

  if (existingProduct) {
    throw createAppError(
      'SKU already exists',
      400
    );
  }

  return prisma.product.create({
    data: {
      sku,
      name,
      price: Number(price),
      stockQty: Number(stockQty || 0),
    },
  });
}

async function updateProduct(id, data) {
  return prisma.product.update({
    where: {
      id,
    },
    data,
  });
}

async function deleteProduct(id) {
  return prisma.product.delete({
    where: {
      id,
    },
  });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};