import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package, BriefcaseBusiness } from "lucide-react";
function AppLayout({ children }) {
    const linkClass = ({ isActive }) =>
        [
            "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300",
            isActive
                ? "bg-cyan-500 text-white shadow-lg"
                : "text-gray-300 hover:bg-slate-800 hover:text-white"
        ].join(" ");
    return (
        <div className="min-h-screen bg-slate-500 text-white">
            <header className="border-b border-slate-700 bg-slate-900 shadow-lg">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-6 md:flex-row md:justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/20 text-cyan-400 shadow-md md:h-24 md:w-24">
                        <BriefcaseBusiness size={40} />
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold leading-tight tracking-wide sm:text-5xl md:text-6xl">Mini Business Operations
                        </h1>
                        <p className="mt-2 text-base text-slate-300 sm:text-lg">Products, customers, sales orders, and stock
                        </p>
                    </div>
                    <nav className="flex flex-wrap items-center justify-center gap-3">
                        <NavLink to="/" className={linkClass}>
                            <LayoutDashboard size={18} />
                            Dashboard
                        </NavLink>
                        <NavLink to="/products" className={linkClass}>
                            <Package size={18} />
                            Products
                        </NavLink>
                    </nav>
                </div>
            </header>
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                {children}
            </main>
        </div>
    );
}
export default AppLayout;