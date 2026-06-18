import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { getProducts, deleteProduct } from '../api/productApi';
import { Link } from 'react-router-dom';
import LoadingMessage from '../components/ui/LoadingMessage';
import ErrorMessage from '../components/ui/ErrorMessage';
import EmptyState from '../components/ui/EmptyState';

function formatPrice(price) {
    return `Rs. ${Number(price || 0).toFixed(2)}`;
}

function ProductsPage() {
    const user = JSON.parse(
        localStorage.getItem('user') || 'null'
    );

    const isAdmin =
        user?.role?.toUpperCase() === 'ADMIN';

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function loadProducts() {
        try {
            setLoading(true);
            setError('');

            const data = await getProducts();

            setProducts(
                Array.isArray(data) ? data : []
            );
        } catch (err) {
            setError(
                err?.message ||
                'Failed to load products'
            );
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    async function handleDelete(id) {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this product?'
        );

        if (!confirmDelete) return;

        try {
            await deleteProduct(id);
            await loadProducts();
        } catch (err) {
            alert(
                err?.message ||
                'Failed to delete product'
            );
        }
    }

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-400">
                        Products
                    </h2>

                    <p className="mt-2 text-lg text-white">
                        {products.length} Product(s) loaded from the backend API.
                    </p>
                </div>

                {isAdmin && (
                    <Link
                        to="/products/new"
                        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                        + Add Product
                    </Link>
                )}
            </div>

            <Card>
                {loading ? (
                    <LoadingMessage message="Loading products..." />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : products.length === 0 ? (
                    <EmptyState
                        title="No products found"
                        description="Please add some products."
                    />
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-800 text-cyan-300">
                                    <th className="px-6 py-4">SKU</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Stock</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="border-b border-slate-700 hover:bg-slate-800/40"
                                    >
                                        <td className="px-6 py-4 font-semibold text-cyan-300">
                                            {product.sku}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-white">
                                            {product.name}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-green-400">
                                            {formatPrice(product.price)}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-yellow-300">
                                            {product.stockQty}
                                        </td>

                                        <td className="px-6 py-4">
                                            {isAdmin ? (
                                                <div className="flex gap-3">
                                                    <Link
                                                        to={`/products/${product.id}/edit`}
                                                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                                                    >
                                                        Update
                                                    </Link>

                                                    <button
                                                        onClick={() =>
                                                            handleDelete(product.id)
                                                        }
                                                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-slate-400">
                                                    View Only
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </Card>
        </div>
    );
}
export default ProductsPage;