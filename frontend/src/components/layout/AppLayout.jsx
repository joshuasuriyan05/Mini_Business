function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <header className="border-b border-slate-700 bg-slate-800 px-6 py-6 shadow-lg">
                <div className="mx-auto max-w-6xl text-center">
                    <h1 className="text-4xl font-bold text-cyan-400">Mini Business Operations</h1>
                    <p className="mt-2 text-lg text-slate-300">Products, customers, sales orders, and stock</p>
                </div>
            </header>
            <main className="mx-auto max-w-6xl px-6 py-8">
                {children}
            </main>
        </div>
    );
}
export default AppLayout;