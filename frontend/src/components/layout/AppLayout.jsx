import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, BriefcaseBusiness} from "lucide-react";
function AppLayout({ children }) {
    const linkClass = ({ isActive }) =>
        ["flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
            isActive ? "bg-cyan-500 text-white shadow-md" : "text-slate-300 hover:bg-slate-800 hover:text-white"
        ].join(" ");
    return (
        <div className="min-h-screen bg-slate-500 text-white">
            <header className="border-b border-slate-700 bg-slate-900 shadow-lg">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                            <BriefcaseBusiness size={30} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">
                                Mini Business Operations
                            </h1>
                            <p className="text-sm text-slate-300">
                                Products, customers, sales orders, and stock
                            </p>
                        </div>
                    </div>
                    <nav className="flex items-center gap-4">
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
                    </nav>
                </div>
            </header>
            <main className="mx-auto max-w-7xl px-6 py-6">
                {children}
            </main>
        </div>
    );
}
export default AppLayout;