import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { getProducts } from "../api/productApi";
function formatPrice(price) {
    return `Rs. ${Number(price).toFixed(2)}`;
}
function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    async function loadProducts() {
        try {
            setLoading(true);
            setError("");
            const data = await getProducts();
            console.log("Products:", data);
            setProducts(data);
        } catch (err) {
            setError(err.message || "Failed to load products");
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-2xl bg-slate-900 p-6 shadow-lg md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-cyan-400">
                        Products
                    </h2>
                    <p className="mt-2 text-slate-300">
                        {products.length} Product(s) loaded from the backend API.
                    </p>
                </div>
                <Button>Add Product</Button>
            </div>
            <Card>
                {loading ? (
                    <div className="py-10 text-center">
                        <p className="text-slate-300">
                            Loading products...
                        </p>
                    </div>
                ) : error ? (
                    <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                        {error}
                    </div>
                ) : products.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate-600 p-8 text-center">
                        <h3 className="text-lg font-semibold text-white">
                            No products found
                        </h3>
                        <p className="mt-2 text-slate-400">
                            Create your first product from the backend API.
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-800 text-left">
                                    <th className="px-4 py-4 text-cyan-300">
                                        SKU
                                    </th>
                                    <th className="px-4 py-4 text-cyan-300">
                                        Name
                                    </th>
                                    <th className="px-4 py-4 text-cyan-300">
                                        Price
                                    </th>
                                    <th className="px-4 py-4 text-cyan-300">
                                        Stock
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} className="border-b border-slate-700 transition duration-200 hover:bg-slate-800">
                                        <td className="px-4 py-4 font-semibold text-cyan-300">
                                            {product.sku}
                                        </td>
                                        <td className="px-4 py-4 text-white">
                                            {product.name}
                                        </td>
                                        <td className="px-4 py-4 font-medium text-green-400">
                                            {formatPrice(product.price)}
                                        </td>
                                        <td className="px-4 py-4 text-yellow-300">
                                            {product.stockQty}
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