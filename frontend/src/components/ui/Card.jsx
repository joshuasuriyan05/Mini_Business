function Card({ title, children }) {
    return (
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg transition hover:shadow-cyan-500/20">
            {title && (<h2 className="mb-4 text-xl font-bold text-cyan-400">{title}</h2>)}
            {children}
        </div>
    );
}
export default Card;