import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
const products = [
    { id: 1, sku: "P001", name: "Notebook", price: 50, stockQty: 100 },
    { id: 2, sku: "P002", name: "Pen", price: 10, stockQty: 500 },
    { id: 3, sku: "P003", name: "Marker", price: 25, stockQty: 40 },
];
function ProductsPage() {
    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-cyan-400">Products</h2>
                    <p className="mt-1 text-sm text-slate-300">Mock product list. This will later come from the backend API.</p>
                </div>
                <Button>Add Product</Button>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-slate-600 bg-slate-700">
                                <th className="px-4 py-3 text-cyan-300">SKU
                                </th>
                                <th className="px-4 py-3 text-cyan-300">Name
                                </th>
                                <th className="px-4 py-3 text-cyan-300">Price
                                </th>
                                <th className="px-4 py-3 text-cyan-300">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (<tr key={product.id}className="border-b border-slate-700 transition hover:bg-slate-700">
                                    <td className="px-4 py-3 font-medium text-white">{product.sku}</td>
                                    <td className="px-4 py-3 text-slate-200">{product.name}</td>
                                    <td className="px-4 py-3 text-slate-200">₹{product.price}</td>
                                    <td className="px-4 py-3 text-slate-200">{product.stockQty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
export default ProductsPage;