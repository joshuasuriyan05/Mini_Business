function Button({ children, type = "button", onClick, disabled = false }) {

    return (

        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                text-lg
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-50
            "
        >
            + {children}
        </button>

    );

}

export default Button;