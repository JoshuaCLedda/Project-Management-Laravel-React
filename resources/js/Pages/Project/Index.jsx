import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, projects }) {
    const projectData = projects?.data || [];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Projects</h2>}
        >
            <Head title="Projects" />

            <div className="py-12">
<div>
<Link href="/project/create" className="text-blue-500 hover:underline">
        Create Project
      </Link> 

</div>

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-bold mb-4">Projects</h1>

                            {projectData.length > 0 ? (
                                <table className="min-w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="border p-2">ID</th>
                                            <th className="border p-2">Name</th>
                                            <th className="border p-2">Description</th>
                                            <th className="border p-2">Created At</th>
                                            <th className="border p-2">Due Date</th>
                                            <th className="border p-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projectData.map((project) => (
                                            <tr key={project.id}>
                                                <td className="border p-2">{project.id}</td>
                                                <td className="border p-2">{project.name}</td>
                                                <td className="border p-2">{project.description}</td>
                                                <td className="border p-2">{project.created_at}</td>
                                                <td className="border p-2">{project.due_date}</td>
                                                <td className="border p-2">{project.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No projects found.</p>
                            )}

                            {/* Pagination */}
                            {projects.links && projects.links.length > 0 && (
                                <div className="mt-4">
                                    {projects.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url || '#'}
                                            className={`px-4 py-2 mx-1 border rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                                }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
