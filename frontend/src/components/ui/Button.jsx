function Button({ children, type = "button", onClick, disabled = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50">
            <span className="text-xl">+</span>
            {children}
        </button>
    );
}
export default Button;