export default function Alert({ message, type = 'success' }) {
    const colors = {
        success: 'bg-green-100 text-green-700 border-green-400',
        error: 'bg-red-100 text-red-700 border-red-400',
    };

    return (
        <div className={`border px-4 py-2 rounded ${colors[type]}`}>
            {message}
        </div>
    );
}
