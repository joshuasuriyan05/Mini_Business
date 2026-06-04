import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createProduct, updateProduct, getProductById} from '../api/productApi';
import Card from '../components/ui/Card';
const initialForm = {
    sku: '',
    name: '',
    price: '',
    stockQty: ''
};
function validateProductForm(form) {
    const errors = {};
    if (!form.sku.trim()) {
        errors.sku = 'SKU is required';
    }
    if (!form.name.trim()) {
        errors.name = 'Name is required';
    }
    if (Number(form.price) <= 0) {
        errors.price = 'Price must be greater than zero';
    }
    if (Number(form.stockQty) < 0) {
        errors.stockQty = 'Opening stock cannot be negative';
    }
    return errors;
}
function ProductFormPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const [form, setForm] = useState(initialForm);
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(isEditMode);
    useEffect(() => {
        async function loadProduct() {
            if (!isEditMode) return;
            try {
                const product = await getProductById(id);
                setForm({
                    sku: product.sku || '',
                    name: product.name || '',
                    price: product.price || '',
                    stockQty: product.stockQty || ''
                });
            } catch (error) {
                setSubmitError(
                    error.message || 'Failed to load product'
                );
            } finally {
                setLoading(false);
            }
        }
        loadProduct();
    }, [id, isEditMode]);
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
        const errors = validateProductForm(form);
        setFieldErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }
        const payload = {
            sku: form.sku.trim(),
            name: form.name.trim(),
            price: Number(form.price),
            stockQty: Number(form.stockQty)
        };
        try {
            setSaving(true);
            if (isEditMode) {
                await updateProduct(id, payload);
            } else {
                await createProduct(payload);
            }
            navigate('/products');
        } catch (error) {
            setSubmitError(
                error.message ||
                `Failed to ${
                    isEditMode ? 'update' : 'create'
                } product`
            );
        } finally {
            setSaving(false);
        }
    }
    if (loading) {
        return (
            <Card>
                <p className="text-white">
                    Loading product...
                </p>
            </Card>
        );
    }
    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-cyan-400">
                        {isEditMode ? 'Update Product': 'Add Product'}
                    </h2>
                    <p className="mt-2 text-slate-300">
                        {isEditMode
                            ? 'Edit an existing product.'
                            : 'Create a new product master record.'}
                    </p>
                </div>
                <Link to="/products" className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    Back to Products
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
                            SKU
                        </label>
                        <input name="sku" value={form.sku} onChange={handleChange} placeholder="Example: P001" className="w-full rounded-md border px-3 py-2 text-white"/>
                        {fieldErrors.sku && (
                            <p className="mt-1 text-sm text-red-500">
                                {fieldErrors.sku}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-white">
                            Product Name
                        </label>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Example: Notebook" className="w-full rounded-md border px-3 py-2 text-white"/>
                        {fieldErrors.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {fieldErrors.name}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                                Price
                            </label>
                            <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} placeholder="50" className="w-full rounded-md border px-3 py-2 text-white"/>
                            {fieldErrors.price && (
                                <p className="mt-1 text-sm text-red-500">
                                    {fieldErrors.price}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                                Opening Stock
                            </label>
                            <input name="stockQty" type="number" min="0" step="1" value={form.stockQty} onChange={handleChange} placeholder="100" className="w-full rounded-md border px-3 py-2 text-white"/>
                            {fieldErrors.stockQty && (
                                <p className="mt-1 text-sm text-red-500">
                                    {fieldErrors.stockQty}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 border-t border-slate-700 pt-5">
                        <Link to="/products" className="rounded-md border border-slate-600 px-4 py-2 text-white hover:bg-slate-700">
                            Cancel
                        </Link>
                        <button type="submit" disabled={saving} className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
                            {saving? isEditMode? 'Updating...': 'Saving...': isEditMode ? 'Update Product': 'Save Product'}
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
export default ProductFormPage;