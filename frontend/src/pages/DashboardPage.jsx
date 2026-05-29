import Card from "../components/ui/Card";
const summary = [
    { label: "Products", value: 3, icon: "📦" },
    { label: "Customers", value: 0, icon: "👥" },
    { label: "Sales Orders", value: 0, icon: "🛒" },
];
function DashboardPage() {
    return (
        <div className="animate-fadeIn">
            <div className="mb-10 text-center">
                <h2 className="text-5xl font-extrabold tracking-wide text-cyan-400 drop-shadow-lg animate-pulse">Dashboard</h2>
                <p className="mt-3 text-slate-300 text-lg">Welcome to Mini Business Operations</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {summary.map((item, index) => (
                    <div key={item.label}className="transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:rotate-1"
                        style={{animationDelay: `${index * 200}ms`}}>
                        <Card title={item.label}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="mt-4 text-5xl font-extrabold text-white">{item.value}</p>
                                </div>
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/2 text-4xl shadow-lg animate-bounce">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default DashboardPage;