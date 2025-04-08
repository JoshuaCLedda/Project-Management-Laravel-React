import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP, TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, tasks, queryParams = null, success }) {
    // to fetch the data we need those function
    // we only need this and the backend from the controller
    const taskData = tasks.data || [];

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
                        Create Task
                    </Link>
                </div>
            }
        >
            <Head title="Task" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                            Name
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                            Description
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                            Status
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                            Priority
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                            Due Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {taskData.map((task) => (
                                        <tr key={task.id}>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {task.name}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-600">
                                                {task.description || "-"}
                                            </td>

                                            <td className="px-4 py-2 text-sm text-gray-600">
                                                <span
                                                    className={
                                                        "px-2 py-1 rounded text-white " +
                                                        PROJECT_STATUS_CLASS_MAP[
                                                            task.status
                                                        ]
                                                    }
                                                >
                                                    {
                                                        PROJECT_STATUS_TEXT_MAP[
                                                            task.status
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-600">
                                               
                                            <span
                                                    className={
                                                        "px-2 py-1 rounded text-white " +
                                                        TASK_PRIORITY_CLASS_MAP[
                                                            task.priority
                                                        ]
                                                    }
                                                >
                                                    {
                                                        TASK_PRIORITY_TEXT_MAP[
                                                            task.priority
                                                        ]
                                                    }
                                                </span>
                                          

                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-600">
                                                {task.due_date || "-"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Pagination links={tasks.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
