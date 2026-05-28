import Card from "../components/ui/Card";
const summary = [
    { label: "Products", value: 3 },
    { label: "Customers", value: 0 },
    { label: "Sales Orders", value: 0 },
];
function DashboardPage() {
    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold text-cyan-400 text-center">Dashboard</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {summary.map((item) => (
                    <Card key={item.label}>
                        <p className="text-lg text-slate-300">{item.label}</p>
                        <p className="mt-3 text-4xl font-bold text-white">{item.value}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default DashboardPage;