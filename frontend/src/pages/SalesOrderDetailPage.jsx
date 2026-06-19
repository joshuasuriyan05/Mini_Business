import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

import Card from '../components/ui/Card';
import LoadingMessage from '../components/ui/LoadingMessage';
import ErrorMessage from '../components/ui/ErrorMessage';

import {
    confirmSalesOrder,
    getSalesOrderById
} from '../api/salesOrderApi';

function formatCurrency(value) {
    return `₹${Number(value || 0).toFixed(2)}`;
}

function SalesOrderDetailPage() {
    const { id } = useParams();

    const user = JSON.parse(
        localStorage.getItem('user') || 'null'
    );

    const token = localStorage.getItem('token');

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [confirming, setConfirming] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] =
        useState('');

    async function loadOrder() {
        try {
            setLoading(true);
            setError('');

            const data = await getSalesOrderById(id);

            setOrder(data);
        } catch (err) {
            setError(
                err.message ||
                'Failed to load sales order'
            );
        } finally {
            setLoading(false);
        }
    }

    async function handleConfirm() {
        try {
            setConfirming(true);
            setError('');
            setSuccessMessage('');

            const updatedOrder =
                await confirmSalesOrder(id);

            setOrder(updatedOrder);

            setSuccessMessage(
                'Sales order confirmed successfully.'
            );
        } catch (err) {
            setError(
                err.message ||
                'Failed to confirm sales order'
            );
        } finally {
            setConfirming(false);
        }
    }

    useEffect(() => {
        loadOrder();
    }, [id]);

    // Authentication
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Loading State
    if (loading) {
        return (
            <LoadingMessage message="Loading sales order..." />
        );
    }

    // Error State
    if (error && !order) {
        return <ErrorMessage message={error} />;
    }

    // Empty State
    if (!order) {
        return (
            <Card>
                <p className="text-center text-white">
                    Sales order not found.
                </p>
            </Card>
        );
    }

    const isDraft = order.status === 'DRAFT';
    const isAdmin = user?.role === 'ADMIN';

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-400">
                        Sales Order {order.orderNo}
                    </h2>

                    <p className="mt-2 text-lg text-white">
                        Review order details and
                        confirm if stock is available.
                    </p>
                </div>

                <div className="flex gap-3">
                    <Link
                        to="/sales-orders"
                        className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                    >
                        Back
                    </Link>
                    {isDraft && user?.role === 'ADMIN' && (
                        <button
                            onClick={handleConfirm}
                            disabled={confirming}
                            className="rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {confirming
                                ? 'Confirming...'
                                : 'Confirm Order'}
                        </button>
                    )}
                </div>
            </div>

            {error && (
                <div className="mb-4">
                    <ErrorMessage message={error} />
                </div>
            )}

            {successMessage && (
                <div className="mb-4 rounded-md border border-green-500 bg-green-500/10 px-4 py-3 text-green-400">
                    {successMessage}
                </div>
            )}

            <Card>
                <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                    Order Summary
                </h3>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    <div>
                        <p className="text-sm text-slate-400">
                            Order No
                        </p>

                        <p className="mt-2 text-lg font-semibold text-white">
                            {order.orderNo}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">
                            Customer
                        </p>

                        <p className="mt-2 text-lg font-semibold text-white">
                            {order.customer?.name || '-'}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">
                            Status
                        </p>

                        <span
                            className={`mt-2 inline-flex rounded-md px-3 py-1 text-sm font-semibold ${order.status ===
                                    'CONFIRMED'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-yellow-500 text-white'
                                }`}
                        >
                            {order.status}
                        </span>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">
                            Total Amount
                        </p>

                        <p className="mt-2 text-lg font-bold text-green-400">
                            {formatCurrency(
                                order.totalAmount
                            )}
                        </p>
                    </div>
                </div>
            </Card>

            <div className="mt-6">
                <Card>
                    <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                        Order Items
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-800 text-cyan-300">
                                    <th className="px-6 py-4">
                                        Product
                                    </th>
                                    <th className="px-6 py-4">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-4">
                                        Rate
                                    </th>
                                    <th className="px-6 py-4">
                                        Line Total
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {order.items?.map(
                                    (item) => (
                                        <tr
                                            key={item.id}
                                            className="border-b border-slate-700 hover:bg-slate-800/40"
                                        >
                                            <td className="px-6 py-4 font-semibold text-cyan-300">
                                                {item.product
                                                    ?.name ||
                                                    `Product #${item.productId}`}
                                            </td>

                                            <td className="px-6 py-4 text-white">
                                                {
                                                    item.quantity
                                                }
                                            </td>

                                            <td className="px-6 py-4 font-semibold text-yellow-300">
                                                {formatCurrency(
                                                    item.unitPrice
                                                )}
                                            </td>

                                            <td className="px-6 py-4 font-semibold text-green-400">
                                                {formatCurrency(
                                                    item.totalPrice
                                                )}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default SalesOrderDetailPage;