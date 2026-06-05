import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCustomers, deleteCustomer } from '../api/customerApi';
import Card from '../components/ui/Card';
function CustomersPage() {
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
    useEffect(() => {
        loadCustomers();
    }, []);
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
                <Link to="/customers/new" className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700">
                    Add Customer
                </Link>
            </div>
            <Card>
                {loading ? (
                    <p className="text-white">
                        Loading customers...
                    </p>
                ) : error ? (
                        <div role="alert" className="rounded-md border border-red-300 bg-red-100 p-4 text-red-700">
                            {error}
                        </div>
                    ) : customers.length === 0 ? (
                        <div className="rounded-md border border-dashed border-slate-600 p-6 text-center">
                            <p className="text-lg font-semibold text-white">
                                No customers found
                            </p>
                            <p className="mt-2 text-slate-300">
                                Create your first customer from the backend API.
                            </p>
                        </div>
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
                                    <tr key={customer.id} className="border-b border-slate-700 hover:bg-slate-800/40">
                                        <td className="px-6 py-4 font-semibold text-cyan-300">
                                            {customer.code}
                                        </td>
                                        <td className="px-6 py-4 text-white">
                                            {customer.name}
                                        </td>
                                        <td className="px-6 py-4 text-yellow-300">
                                            {customer.phone || '-'}
                                        </td>
                                        <td className="px-6 py-4 text-green-400">
                                            {customer.email || '-'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-3">
                                                <Link to={`/customers/${customer.id}/edit`} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                                                    Update
                                                </Link>
                                                <button onClick={() => handleDelete(customer.id)} className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
                                                    Delete
                                                </button>
                                            </div>
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