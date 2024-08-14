export default function Button({ children, ...props }) {
    return (
        <button
            {...props}
            className="px-4 py-3 text-stone-300 text-xs md:text-base rounded-md bg-stone-800 hover:bg-stone-900 hover:text-slate-500 border-2"
        >
            {children}
        </button>
    );
}
