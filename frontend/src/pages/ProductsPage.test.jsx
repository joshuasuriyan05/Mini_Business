import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, describe, it, expect } from 'vitest';
import ProductsPage from './ProductsPage';

vi.mock('../api/productApi', () => ({
  getProducts: vi.fn().mockResolvedValue([
    {
      id: 1,
      sku: 'P001',
      name: 'Notebook',
      price: 50,
      stockQty: 10,
    },
    {
      id: 2,
      sku: 'P002',
      name: 'Pen',
      price: 10,
      stockQty: 20,
    },
    {
      id: 3,
      sku: 'P003',
      name: 'Marker',
      price: 15,
      stockQty: 5,
    },
  ]),
  deleteProduct: vi.fn(),
}));

function renderProductsPage() {
  return render(
    <MemoryRouter>
      <ProductsPage />
    </MemoryRouter>
  );
}

describe('ProductsPage', () => {
  it('shows the products page heading and helper text', async () => {
    renderProductsPage();

    expect(
      await screen.findByRole('heading', {
        name: /products/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/loaded from the backend api/i)
    ).toBeInTheDocument();
  });

  it('shows the Add Product link', async () => {
    renderProductsPage();

    expect(
      await screen.findByRole('link', {
        name: /add product/i,
      })
    ).toBeInTheDocument();
  });

  it('shows product table headers after products are loaded', async () => {
    renderProductsPage();

    expect(
      await screen.findByRole('columnheader', {
        name: /sku/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('columnheader', {
        name: /name/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('columnheader', {
        name: /price/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('columnheader', {
        name: /stock/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('columnheader', {
        name: /actions/i,
      })
    ).toBeInTheDocument();
  });

  it('renders products returned by the API', async () => {
    renderProductsPage();

    expect(await screen.findByText('P001')).toBeInTheDocument();
    expect(screen.getByText('Notebook')).toBeInTheDocument();

    expect(screen.getByText('P002')).toBeInTheDocument();
    expect(screen.getByText('Pen')).toBeInTheDocument();

    expect(screen.getByText('P003')).toBeInTheDocument();
    expect(screen.getByText('Marker')).toBeInTheDocument();
  });
});