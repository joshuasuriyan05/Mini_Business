const { prisma } = require('../../src/lib/prisma');
const { createSalesOrder, getSalesOrders, getSalesOrderById, confirmSalesOrder,} = require('../../src/services/salesOrder.service');
prisma.customer = {
  findUnique: vi.fn(),
};
prisma.salesOrder = {
  count: vi.fn(),
  create: vi.fn(),
  findMany: vi.fn(),
  findUnique: vi.fn(),
  update: vi.fn(),
};
prisma.product = {
  findMany: vi.fn(),
  update: vi.fn(),
};
prisma.stockMovement = {
  create: vi.fn(),
};
prisma.$transaction = vi.fn();
beforeEach(() => {
  vi.clearAllMocks();
  prisma.$transaction.mockImplementation(async (callback) => {
    return callback(prisma);
  });
});
describe('salesOrder.service createSalesOrder', () => {
  it('rejects order creation when items are missing', async () => {
    await expect(
      createSalesOrder({
        customerId: 1,
        items: [],
      })
    ).rejects.toThrow('Order must have at least one item');
  });
  it('creates a sales order successfully', async () => {
    const input = {
      customerId: 1,
      items: [
        {
          productId: 1,
          quantity: 2,
          rate: 50,
        },
        {
          productId: 2,
          quantity: 3,
          rate: 10,
        },
      ],
    };
    prisma.customer.findUnique.mockResolvedValue({
      id: 1,
      name: 'Test Customer',
    })
    prisma.product.findMany.mockResolvedValue([
      { id: 1, name: 'Notebook' },
      { id: 2, name: 'Pen' },
    ]);
    prisma.salesOrder.count.mockResolvedValue(0);
    prisma.salesOrder.create.mockResolvedValue({
      id: 1,
      orderNo: 'SO-0001',
      customerId: 1,
      status: 'DRAFT',
      totalAmount: 130,
    });
    const result = await createSalesOrder(input);
    expect(prisma.customer.findUnique).toHaveBeenCalled();
    expect(prisma.product.findMany).toHaveBeenCalled();
    expect(prisma.salesOrder.count).toHaveBeenCalled();
    expect(prisma.salesOrder.create).toHaveBeenCalled();
    expect(Number(result.totalAmount)).toBe(130);
  });
});
describe('salesOrder.service read functions', () => {
  it('returns sales order list', async () => {
    const orders = [
      {
        id: 1,
        orderNo: 'SO-0001',
      },
    ];
    prisma.salesOrder.findMany.mockResolvedValue(orders);
    const result = await getSalesOrders();
    expect(prisma.salesOrder.findMany).toHaveBeenCalled();
    expect(result).toEqual(orders);
  });
  it('returns one sales order by id', async () => {
    const order = {
      id: 1,
      orderNo: 'SO-0001',
    };
    prisma.salesOrder.findUnique.mockResolvedValue(order);
    const result = await getSalesOrderById(1);
    expect(prisma.salesOrder.findUnique).toHaveBeenCalled();
    expect(result).toEqual(order);
  });
  it('returns null when sales order is not found', async () => {
    prisma.salesOrder.findUnique.mockResolvedValue(null);
    const result = await getSalesOrderById(999);
    expect(prisma.salesOrder.findUnique).toHaveBeenCalled();
    expect(result).toBeNull();
  });
});
describe('salesOrder.service confirmSalesOrder', () => {
  it('rejects confirmation when stock is insufficient', async () => {
    prisma.salesOrder.findUnique.mockResolvedValue({
      id: 1,
      status: 'DRAFT',
      items: [
        {
          productId: 1,
          quantity: 5,
          product: {
            id: 1,
            name: 'Notebook',
            stockQty: 3,
          },
        },
      ],
    });
    await expect(confirmSalesOrder(1)).rejects.toThrow(
      'Insufficient stock'
    );
    expect(prisma.product.update).not.toHaveBeenCalled();
    expect(prisma.salesOrder.update).not.toHaveBeenCalled();
  });
  it('confirms order when stock is available', async () => {
    prisma.salesOrder.findUnique.mockResolvedValue({
      id: 1,
      status: 'DRAFT',
      items: [
        {
          productId: 1,
          quantity: 2,
          product: {
            id: 1,
            name: 'Notebook',
            stockQty: 10,
          },
        },
      ],
    });
    prisma.product.update.mockResolvedValue({
      id: 1,
      stockQty: 8,
    });
    prisma.stockMovement.create.mockResolvedValue({
      id: 1,
    });
    prisma.salesOrder.update.mockResolvedValue({
      id: 1,
      status: 'CONFIRMED',
    });
    const result = await confirmSalesOrder(1);
    expect(prisma.product.update).toHaveBeenCalled();
    expect(prisma.stockMovement.create).toHaveBeenCalled();
    expect(prisma.salesOrder.update).toHaveBeenCalled();
    expect(result.status).toBe('CONFIRMED');
  });
});