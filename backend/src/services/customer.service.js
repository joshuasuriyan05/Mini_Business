const { createAppError } = require('../utils/appError');
const {prisma} = require('../lib/prisma');
function validateCustomerData(data) {
    if (!data.code || !data.code.trim()) {
        throw createAppError('Customer code is required', 400);
    }
    if (!data.name || !data.name.trim()) {
        throw createAppError('Customer name is required', 400);
    }
}
async function listCustomers() {
    return prisma.customer.findMany({
        where: { isActive: true },
        orderBy: { id: 'desc' }
    });
}
async function getCustomerById(id) {
    const customer = await prisma.customer.findFirst({
        where: {
            id,
            isActive: true
        }
    });
    if (!customer) {
        throw createAppError('Customer not found', 404);
    }
    return customer;
}
async function createCustomer(data) {
    validateCustomerData(data);
    const existingCustomer = await prisma.customer.findUnique({
        where: {
            code: data.code.trim()
        }
    });
    if (existingCustomer) {
        throw createAppError('Customer code already exists', 400);
    }
    return prisma.customer.create({
        data: {
            code: data.code.trim(),
           
            
            
            phone: data.phone?.trim() || null,
            email: data.email?.trim() || null
        }
    });
}
async function updateCustomer(id, data) {
    await getCustomerById(id);
    validateCustomerData(data);
    const existingCustomer = await prisma.customer.findFirst({
        where: {
            code: data.code.trim(),
            NOT: {
                id
            }
        }
    });
    if (existingCustomer) {
        throw createAppError('Customer code already exists', 400);
    }
    return prisma.customer.update({
        where: { id },
        data: {
            code: data.code.trim(),
            name: data.name.trim(),
            phone: data.phone?.trim() || null,
            email: data.email?.trim() || null
        }
    });
}
async function deleteCustomer(id) {
    await getCustomerById(id);
    return prisma.customer.update({
        where: { id },
        data: {
            isActive: false
        }
    });
}
module.exports = { listCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };