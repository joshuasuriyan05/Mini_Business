import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    BriefcaseBusiness,
    ShoppingCart,
    LogOut
} from "lucide-react";

function AppLayout({ children }) {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user") || "null");

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };

    const linkClass = ({ isActive }) =>
        [
            "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap",
            isActive
                ? "bg-cyan-500 text-white shadow-md"
                : "text-slate-300 hover:bg-slate-800 hover:text-white",
        ].join(" ");

    return (
        <div className="min-h-screen bg-slate-500 text-white">
            {/* HEADER */}
            <header className="border-b border-slate-700 bg-slate-900 shadow-lg">
                <div className="mx-auto max-w-7xl px-4 py-4">

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                        {/* LEFT TITLE */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                                <BriefcaseBusiness size={30} />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold md:text-3xl">
                                    Mini Business Operations
                                </h1>
                                <p className="text-sm text-slate-300">
                                    Products, customers, sales orders, and stock
                                </p>
                            </div>
                        </div>

                        {/* NAV LINKS */}
                        <nav className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2 lg:pb-0">
                            <NavLink to="/" className={linkClass}>
                                <LayoutDashboard size={18} />
                                Dashboard
                            </NavLink>

                            <NavLink to="/products" className={linkClass}>
                                <Package size={18} />
                                Products
                            </NavLink>

                            <NavLink to="/customers" className={linkClass}>
                                <BriefcaseBusiness size={18} />
                                Customers
                            </NavLink>

                            <NavLink to="/sales-orders" className={linkClass}>
                                <ShoppingCart size={18} />
                                Sales Orders
                            </NavLink>

                            <NavLink to="/stock-movements" className={linkClass}>
                                <Package size={18} />
                                Stock Movements
                            </NavLink>
                        </nav>

                        {/* USER + LOGOUT */}
                        <div className="flex items-center gap-3 border-t border-slate-700 pt-3 lg:border-none lg:pt-0">

                            <div className="text-right">
                                <p className="text-sm font-semibold">
                                    {user?.name || "Guest"}
                                </p>
                                <p className="text-xs text-slate-400">
                                    {user?.role || "No Role"}
                                </p>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium hover:bg-red-700 transition"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="mx-auto max-w-7xl px-4 py-6">
                {children}
            </main>
        </div>
    );
}

export default AppLayout;