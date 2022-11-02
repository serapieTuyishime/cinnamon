export default function Button({ text = "No text yet", block = false }) {
    return (
        <button
            className={`border-2 border-primary bg-primary hover:bg-white px-7 py-3 flex items-center text-base justify-center font-montSemiBold text-white hover:text-primary duration-300 max-h-max ${
                !block && "max-w-max"
            } capitalize whitespace-pre`}
        >
            {text}
        </button>
    );
}
