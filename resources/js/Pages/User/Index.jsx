import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, users, queryParams = null, success }) {
    // to fetch the data we need those function
    // we only need this and the backend from the controller
    const userData = users.data || [];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Task
                    </h2>

                    <Link
                        href="#"
                        className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
                    >
                        Create User
                    </Link>
                </div>
            }
        >
            <Head title="Task" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Success Alert */}
                    {success && (
                        <div className="mb-4 rounded bg-green-100 px-4 py-2 text-green-800">
                            {success}
                        </div>
                    )}

                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="p-6 text-gray-900">
                            {/* Header */}
                            <div className="mb-6 flex items-center justify-between">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Task List
                                </h1>
                                {/* Optional: Filter/Search Placeholder */}
                                <input
                                    type="text"
                                    placeholder="Search tasks..."
                                    className="rounded border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 text-sm">
                                    <thead className="bg-gray-100 text-left font-semibold text-gray-700">
                                        <tr>
                                            <th className="border p-2 cursor-pointer">
                                                Name
                                            </th>
                                            <th className="border p-2 cursor-pointer">
                                                Description
                                            </th>

                                            <th className="border p-2 cursor-pointer">
                                                Priority
                                            </th>
                                            <th className="border p-2 cursor-pointer">
                                                Due Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {userData.length > 0 ? (
                                            userData.map((users) => (
                                                <tr
                                                    key={users.id}
                                                    className="hover:bg-gray-50 transition-colors"
                                                >
                                                    <td className="px-4 py-2">
                                                        {users.name}
                                                    </td>
                                                    <td className="px-4 py-2 text-gray-600">
                                                        {users.email ||
                                                            "-"}
                                                    </td>

                                                 
                                                    <td className="px-4 py-2 text-gray-600">
                                                        {users.created_at || "-"}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="px-4 py-6 text-center text-gray-500"
                                                >
                                                    No tasks found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-6">
                                <Pagination links={users.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
