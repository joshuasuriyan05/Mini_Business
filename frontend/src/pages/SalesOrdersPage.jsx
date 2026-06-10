import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSalesOrders } from '../api/salesOrderApi';
import Card from '../components/ui/Card';

function formatCurrency(value) {
    return `₹${Number(value || 0).toFixed(2)}`;
}

function formatDate(value) {
    if (!value) return '-';
    return new Date(value).toLocaleDateString();
}

function SalesOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function loadSalesOrders() {
        try {
            setLoading(true);
            setError('');

            const data = await getSalesOrders();
            setOrders(data);
        } catch (err) {
            setError(err.message || 'Failed to load sales orders');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadSalesOrders();
    }, []);

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-400">
                        Sales Orders
                    </h2>

                    <p className="mt-2 text-lg text-white">
                        {orders.length} Sales Order(s) loaded from the backend API.
                    </p>
                </div>

                <Link
                    to="/sales-orders/new"
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700"
                >
                    + Create Sales Order
                </Link>
            </div>

            <Card>
                {loading ? (
                        <p className="text-white">
                            Loading sales orders...
                        </p>
                    ) : error ? (
                        <div role="alert" className="rounded-md border border-red-300 bg-red-100 p-4 text-red-700">
                            {error}
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="rounded-md border border-dashed border-slate-600 p-6 text-center">
                            <p className="text-lg font-semibold text-white">
                                No sales orders found
                            </p>
                            <p className="mt-2 text-slate-300">
                                Create your first sales order from the backend API.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-800 text-cyan-300">
                                        <th className="px-6 py-4">Order No</th>
                                        <th className="px-6 py-4">Customer</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Items</th>
                                        <th className="px-6 py-4">Total</th>
                                        <th className="px-6 py-4">Created</th>
                                        <th className="px-6 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id} className="border-b border-slate-700 hover:bg-slate-800/40">
                                            <td className="px-6 py-4 font-semibold text-cyan-300">
                                                {order.orderNo}
                                            </td>
                                            <td className="px-6 py-4 text-white">
                                                {order.customer?.name || '-'}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`rounded-md px-3 py-1 text-xs font-bold text-white ${ order.status === 'CONFIRMED' ? 'bg-green-600' : 'bg-yellow-500' }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-white">
                                                {order.itemCount}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-green-400">
                                                {formatCurrency(order.totalAmount)}
                                            </td>
                                            <td className="px-6 py-4 text-slate-300">
                                                {formatDate(order.createdAt)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to={`/sales-orders/${order.id}`} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                                                    View Details
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </Card>
        </div>
    );
}
export default SalesOrdersPage;