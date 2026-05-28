function Card({ children }) {

    return (

        <section
            className="
                rounded-2xl
                border
                border-cyan-300/30
                bg-slate-900
                p-6
                shadow-md
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-cyan-400
            "
        >
            {children}
        </section>

    );

}

export default Card;