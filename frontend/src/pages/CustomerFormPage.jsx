import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createCustomer } from '../api/customerApi';
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
    const [form, setForm] = useState(initialForm);
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [saving, setSaving] = useState(false);
    function handleChange(event) {
        const { name, value } = event.target;
        setForm((previousForm) => ({
            ...previousForm,
            [name]: value
        }));
        if (fieldErrors[name]) {
            setFieldErrors((previousErrors) => ({
                ...previousErrors,
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

            await createCustomer({
                code: form.code.trim(),
                name: form.name.trim(),
                phone: form.phone.trim() || null,
                email: form.email.trim() || null
            });
            navigate('/customers');
        } catch (error) {
            setSubmitError(
                error.message || 'Failed to create customer'
            );
        } finally {
            setSaving(false);
        }
    }
    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-cyan-400">
                        Add Customer
                    </h2>
                    <p className="mt-2 text-slate-300">
                        Create a new customer master record.
                    </p>
                </div>
                <Link to="/customers" className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    Back to Customers
                </Link>
            </div>
            <Card>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {submitError && (
                        <div className="rounded-md border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-700">
                            {submitError}
                        </div>
                    )}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                            Customer Code
                        </label>
                        <input name="code" value={form.code} onChange={handleChange} placeholder="Example: C001" className="w-full rounded-md border px-3 py-2 text-white"/>
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
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Example: ABC Stores" className="w-full rounded-md border px-3 py-2 text-white"/>
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
                            <input name="phone" value={form.phone} onChange={handleChange} placeholder="9876543210" className="w-full rounded-md border px-3 py-2 text-white"/>
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                                Email
                            </label>
                            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="customer@email.com" className="w-full rounded-md border px-3 py-2 text-white"  />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 border-t border-slate-700 pt-5">
                        <Link to="/customers" className="rounded-md border border-slate-600 px-4 py-2 text-white hover:bg-slate-700">
                            Cancel
                        </Link>
                        <button type="submit" disabled={saving} className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
                            {saving ? 'Saving...': 'Save Customer'}
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
export default CustomerFormPage;