import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import {Package, IndianRupee, Boxes, Sparkles}from "lucide-react";
import { motion } from "framer-motion";
const products = [
    { id: 1, sku: "P001", name: "Notebook", price: 50, stockQty: 100 },
    { id: 2, sku: "P002", name: "Pen", price: 10, stockQty: 500 },
    { id: 3, sku: "P003", name: "Marker", price: 25, stockQty: 40 },
];
function ProductsPage() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#071739] via-[#0f172a] to-[#1e293b] p-8 shadow-2xl">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4]}}
                    transition={{repeat: Infinity, duration: 4}}
                    className="absolute-right-10-top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"/>
                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-3 flex items-center gap-3">
                            <motion.div
                                whileHover={{
                                    rotate: 10,
                                    scale: 1.1
                                }}
                                className="rounded-2xl bg-cyan-500/20 p-3 text-cyan-400">
                                <Package size={30} />
                            </motion.div>
                            <h2 className="text-5xl font-extrabold text-cyan-400">
                                Products
                            </h2>
                        </motion.div>
                        <p className="max-w-xl text-lg text-slate-300">
                            Manage inventory, monitor stock levels,
                            and organize your products efficiently.
                        </p>
                    </div>
                    <motion.div whileHover={{scale: 1.08}} whileTap={{scale: 0.95}}>
                        <Button>Add Product</Button>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card>
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
                                <motion.div
                                    animate={{rotate: [0, 10, -10, 0]}}
                                    transition={{repeat: Infinity, duration: 3}}>
                                    <Sparkles className="text-cyan-400" />
                                </motion.div>
                                Product Inventory
                            </h3>
                            <p className="mt-1 text-sm text-slate-400">
                                Live inventory overview
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-700">
                        <table className="w-full overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-from-cyan-500/20 to-blue-500/20 text-left">
                                    <th className="px-6 py-5 text-cyan-300">
                                        SKU
                                    </th>
                                    <th className="px-6 py-5 text-cyan-300">
                                        Product
                                    </th>
                                    <th className="px-6 py-5 text-cyan-300">
                                        Price
                                    </th>
                                    <th className="px-6 py-5 text-cyan-300">
                                        Stock
                                    </th>
                                    <th className="px-6 py-5 text-cyan-300">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <motion.tr
                                        key={product.id}
                                        initial={{opacity: 0, x: -30}}
                                        animate={{opacity: 1,x: 0}}
                                        transition={{delay: index * 0.2}}
                                        whileHover={{scale: 1.01, backgroundColor: "#1e293b"}}
                                        className="border-b border-slate-800 bg-[#071739] transition-all duration-300">
                                        <td className="px-6 py-5">
                                            <div className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-3 py-2 font-semibold text-cyan-300">
                                                <Boxes size={16} />
                                                {product.sku}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <motion.div
                                                    whileHover={{rotate: 10,scale: 1.1}}className="rounded-xl bg-slate-700 p-3 text-cyan-400">
                                                    <Package size={18} />
                                                </motion.div>
                                                <div>
                                                    <p className="font-semibold text-white">
                                                        {product.name}
                                                    </p>
                                                    <p className="text-sm text-slate-400">
                                                        Office Product</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-1 font-semibold text-green-400">
                                                <IndianRupee size={16} />
                                                {product.price}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-white">
                                            {product.stockQty} Units
                                        </td>
                                        <td className="px-6 py-5">
                                            <motion.span whileHover={{scale: 1.1}}className={`rounded-full px-4 py-2 text-sm font-semibold${product.stockQty < 50 ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}>
                                                {product.stockQty < 50? "Low Stock": "Available"}
                                            </motion.span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}
export default ProductsPage;