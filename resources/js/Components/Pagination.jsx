import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="flex justify-center mt-6 space-x-1">
            {links.map((link, index) => {
                const isActive = link.active;
                const isDisabled = link.url === null;
                return isDisabled ? (
                    <span
                        key={index}
                        className="px-3 py-1 text-gray-400 bg-gray-100 border border-gray-300 rounded cursor-not-allowed text-sm"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <Link
                        key={index}
                        href={link.url}
                        preserveScroll
                        className={`px-3 py-1 border rounded text-sm transition
                            ${
                                isActive
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                );
            })}
        </nav>
    );
}
