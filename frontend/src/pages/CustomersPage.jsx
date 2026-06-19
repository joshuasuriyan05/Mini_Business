import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCustomers, deleteCustomer } from '../api/customerApi';
import Card from '../components/ui/Card';
import LoadingMessage from '../components/ui/LoadingMessage';
import ErrorMessage from '../components/ui/ErrorMessage';
import EmptyState from '../components/ui/EmptyState';

function CustomersPage() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const isAdmin = user?.role === 'ADMIN';

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function loadCustomers() {
        try {
            setLoading(true);
            setError('');

            const data = await getCustomers();
            setCustomers(data);
        } catch (err) {
            setError(err.message || 'Failed to load customers');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCustomers();
    }, []);

    async function handleDelete(id) {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this customer?'
        );

        if (!confirmDelete) return;

        try {
            await deleteCustomer(id);
            await loadCustomers();
        } catch (err) {
            alert(err.message || 'Failed to delete customer');
        }
    }

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-400">
                        Customers
                    </h2>

                    <p className="mt-2 text-lg text-white">
                        {customers.length} Customer(s) loaded from the backend API.
                    </p>
                </div>

                {isAdmin && (
                    <Link
                        to="/customers/new"
                        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                        + Add Customer
                    </Link>
                )}
            </div>

            <Card>
                {loading ? (
                    <LoadingMessage message="Loading customers..." />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : customers.length === 0 ? (
                    <EmptyState
                        title="No customers found"
                        description="Create a customer before creating sales orders."
                    />
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-800 text-cyan-300">
                                    <th className="px-6 py-4">Code</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Phone</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {customers.map((customer) => (
                                    <tr
                                        key={customer.id}
                                        className="border-b border-slate-700 hover:bg-slate-800/40"
                                    >
                                        <td className="px-6 py-4 font-semibold text-cyan-300">
                                            {customer.code}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-white">
                                            {customer.name}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-yellow-300">
                                            {customer.phone || '-'}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-green-400">
                                            {customer.email || '-'}
                                        </td>

                                        <td className="px-6 py-4">
                                            {isAdmin ? (
                                                <div className="flex gap-3">
                                                    <Link
                                                        to={`/customers/${customer.id}/edit`}
                                                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                                                    >
                                                        Update
                                                    </Link>

                                                    <button
                                                        onClick={() =>
                                                            handleDelete(customer.id)
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

export default CustomersPage;