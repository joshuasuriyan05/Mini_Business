import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    createCustomer,
    updateCustomer,
    getCustomerById
} from '../api/customerApi';
import Card from '../components/ui/Card';

const initialForm = {
    code: '',
    name: '',
    phone: '',
    email: ''
};

function validateCustomerForm(form) {
    const errors = {};

    if (!form.code.trim()) {
        errors.code = 'Customer code is required';
    }

    if (!form.name.trim()) {
        errors.name = 'Customer name is required';
    }

    return errors;
}

function CustomerFormPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const isEditMode = Boolean(id);

    const [form, setForm] = useState(initialForm);
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(isEditMode);

    useEffect(() => {
        async function loadCustomer() {
            if (!isEditMode) return;

            try {
                const customer = await getCustomerById(id);

                setForm({
                    code: customer.code || '',
                    name: customer.name || '',
                    phone: customer.phone || '',
                    email: customer.email || ''
                });
            } catch (error) {
                setSubmitError(
                    error.message || 'Failed to load customer'
                );
            } finally {
                setLoading(false);
            }
        }

        loadCustomer();
    }, [id, isEditMode]);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({
                ...prev,
                [name]: ''
            }));
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setSubmitError('');

        const errors = validateCustomerForm(form);
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        try {
            setSaving(true);

            const payload = {
                code: form.code.trim(),
                name: form.name.trim(),
                phone: form.phone.trim() || null,
                email: form.email.trim() || null
            };

            if (isEditMode) {
                await updateCustomer(id, payload);
            } else {
                await createCustomer(payload);
            }

            navigate('/customers');
        } catch (error) {
            setSubmitError(
                error.message ||
                    `Failed to ${
                        isEditMode ? 'update' : 'create'
                    } customer`
            );
        } finally {
            setSaving(false);
        }
    }

    if (loading) {
        return (
            <Card>
                <p className="text-white">
                    Loading customer...
                </p>
            </Card>
        );
    }

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-cyan-400">
                        {isEditMode
                            ? 'Update Customer'
                            : 'Add Customer'}
                    </h2>

                    <p className="mt-2 text-slate-300">
                        {isEditMode
                            ? 'Edit an existing customer.'
                            : 'Create a new customer master record.'}
                    </p>
                </div>

                <Link
                    to="/customers"
                    className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                    Back to Customers
                </Link>
            </div>

            <Card>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    {submitError && (
                        <div className="rounded-md border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-700">
                            {submitError}
                        </div>
                    )}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                            Customer Code
                        </label>

                        <input
                            name="code"
                            value={form.code}
                            onChange={handleChange}
                            placeholder="C001"
                            className="w-full rounded-md border px-3 py-2 text-white"
                        />

                        {fieldErrors.code && (
                            <p className="mt-1 text-sm text-red-500">
                                {fieldErrors.code}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                            Customer Name
                        </label>

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="ABC Stores"
                            className="w-full rounded-md border px-3 py-2 text-white"
                        />

                        {fieldErrors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {fieldErrors.name}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                                Phone
                            </label>

                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="9876543210"
                                className="w-full rounded-md border px-3 py-2 text-white"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                                Email
                            </label>

                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="customer@email.com"
                                className="w-full rounded-md border px-3 py-2 text-white"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 border-t border-slate-700 pt-5">
                        <Link
                            to="/customers"
                            className="rounded-md border border-slate-600 px-4 py-2 text-white hover:bg-slate-700"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            disabled={saving}
                            className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {saving
                                ? isEditMode
                                    ? 'Updating...'
                                    : 'Saving...'
                                : isEditMode
                                ? 'Update Customer'
                                : 'Save Customer'}
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
export default CustomerFormPage;