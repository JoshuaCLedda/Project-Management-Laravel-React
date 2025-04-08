import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
// icon
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, projects, queryParams = null, success }) {
   
    const projectData = projects?.data || [];
    
    queryParams = queryParams || {};
    // Setting up the value here for more data
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("project.index"), queryParams);
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Projects
                    </h2>

                    <Link
                        href="/project/create"
                        className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
                    >
                        Create Project
                    </Link>
                </div>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-12">
                    <div className="my-4">
                        {success && (
                            <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
                                {success}
                            </div>
                        )}
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-bold mb-4">Projects</h1>

                            {projectData.length > 0 ? (
                                <table className="min-w-full border-collapse">
                                    <thead className="bg-gray-100">
                                        <tr className="text-left text-sm font-semibold text-gray-700">
                                            {/* ID Column */}
                                            <TableHeading
                                                name="id"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading>

                                            {/* Name Column with custom sort icon */}
                                            <th
                                                className="border p-2 cursor-pointer"
                                                onClick={() =>
                                                    sortChanged("name")
                                                }
                                            >
                                                <div className="flex items-center gap-1">
                                                    <span>Name</span>
                                                    {queryParams.sort_field ===
                                                        "name" &&
                                                        (queryParams.sort_direction ===
                                                        "asc" ? (
                                                            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
                                                        ) : (
                                                            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                                                        ))}
                                                </div>
                                            </th>

                                            <th
                                                className="border p-2 cursor-pointer"
                                                onClick={() =>
                                                    sortChanged("created_at")
                                                }
                                            >
                                                <div className="flex items-center gap-1">
                                                    <span>Created At</span>
                                                    {queryParams.sort_field ===
                                                        "created_at" &&
                                                        (queryParams.sort_direction ===
                                                        "asc" ? (
                                                            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
                                                        ) : (
                                                            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                                                        ))}
                                                </div>
                                            </th>

                                            <th
                                                className="border p-2 cursor-pointer"
                                                onClick={() =>
                                                    sortChanged("due_date")
                                                }
                                            >
                                                <div className="flex items-center gap-1">
                                                    <span>Due Date</span>
                                                    {queryParams.sort_field ===
                                                        "due_date" &&
                                                        (queryParams.sort_direction ===
                                                        "asc" ? (
                                                            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
                                                        ) : (
                                                            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                                                        ))}
                                                </div>
                                            </th>

                                            <th
                                                className="border p-2 cursor-pointer"
                                                onClick={() =>
                                                    sortChanged("status")
                                                }
                                            >
                                                <div className="flex items-center gap-1">
                                                    <span>Status</span>
                                                    {queryParams.sort_field ===
                                                        "status" &&
                                                        (queryParams.sort_direction ===
                                                        "asc" ? (
                                                            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
                                                        ) : (
                                                            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                                                        ))}
                                                </div>
                                            </th>

                                            <th className="border p-2 ">
                                                Manage
                                            </th>
                                        </tr>

                                        {/* Filter row */}
                                        <tr className="bg-white">
                                            <th className="border p-2"></th>

                                            <th className="border p-2">
                                                <TextInput
                                                    className="w-full"
                                                    placeholder="Project Name"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    onBlur={(e) =>
                                                        searchFieldChanged(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyPress={(e) =>
                                                        onKeyPress("name", e)
                                                    }
                                                />
                                            </th>

                                            <th className="border p-2"></th>

                                            <th className="border p-2"></th>

                                            <th className="border p-2">
                                                <SelectInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.status
                                                    }
                                                    onChange={(e) =>
                                                        searchFieldChanged(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="pending">
                                                        Pending
                                                    </option>
                                                    <option value="in_progress">
                                                        In Progress
                                                    </option>
                                                    <option value="completed">
                                                        Completed
                                                    </option>
                                                </SelectInput>
                                            </th>

                                            <th className="border p-2"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {projectData.map((project) => (
                                            <tr key={project.id}>
                                                <td className="border p-2">
                                                    {project.id}
                                                </td>
                                                <td className="border p-2">
                                                    {project.name}
                                                </td>
                                                <td className="border p-2">
                                                    {project.created_at}
                                                </td>
                                                <td className="border p-2">
                                                    {project.due_date}
                                                </td>
                                                <td className="border p-2">
                                                    <span
                                                        className={
                                                            "px-2 py-1 rounded text-white " +
                                                            PROJECT_STATUS_CLASS_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            PROJECT_STATUS_TEXT_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>

                                                <td className="border p-2 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <Link
                                                            href={route(
                                                                "project.edit",
                                                                project.id
                                                            )}
                                                            className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            href={route(
                                                                "project.destroy",
                                                                project.id
                                                            )}
                                                            className="px-4 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                // Pagination
                                <p>No projects found.</p>
                            )}

                            {/* Pagination */}
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
