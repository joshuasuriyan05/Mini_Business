import { useState, useEffect } from "react";
import Card from "../components/ui/Card";

import { getProducts } from "../api/productApi";
import { getCustomers } from "../api/customerApi";
import { getSalesOrders } from "../api/salesOrderApi";

function DashboardPage() {
    const [summary, setSummary] = useState([
        {
            label: "Products",
            value: 0,
            icon: "📦",
        },
        {
            label: "Customers",
            value: 0,
            icon: "👥",
        },
        {
            label: "Sales Orders",
            value: 0,
            icon: "🛒",
        },
    ]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboardStats();
    }, []);

    async function loadDashboardStats() {
        try {
            setLoading(true);

            const [products, customers, salesOrders] =
                await Promise.all([
                    getProducts(),
                    getCustomers(),
                    getSalesOrders(),
                ]);

            setSummary([
                {
                    label: "Products",
                    value: products?.length || 0,
                    icon: "📦",
                },
                {
                    label: "Customers",
                    value: customers?.length || 0,
                    icon: "👥",
                },
                {
                    label: "Sales Orders",
                    value: salesOrders?.length || 0,
                    icon: "🛒",
                },
            ]);
        } catch (error) {
            console.error("Dashboard Error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="mb-10 text-center">
                <h2 className="text-5xl font-extrabold text-cyan-400">
                    Dashboard
                </h2>

                <p className="mt-3 text-lg text-slate-300">
                    Welcome to Mini Business Operations
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {summary.map((item) => (
                    <Card key={item.label}>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-300">
                                    {item.label}
                                </h3>

                                <p className="mt-3 text-5xl font-bold text-white">
                                    {loading ? "..." : item.value}
                                </p>
                            </div>

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20 text-4xl">
                                {item.icon}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;