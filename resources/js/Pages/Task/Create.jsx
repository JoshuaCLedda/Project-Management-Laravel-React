import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Description, Textarea } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, projects, success }) {

    const projectData = projects?.data || [];

    const { data, setData, post, errors, reset } = useForm({
        project: '',
        image: '',
        name: '',
        status: '',
        description: '',
        due_date: ''
    })

    // onSubmit or after Clicking the button
    const onSubmit = (e) => {
        e.preventDefault()

        post(route("task.store"))
    }

    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center'>

                    <h2 className="text-xl font-semibold leading-tight text-gray-800">Create New Task</h2>

                    <Link href={route("task.index")} className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900">
                        Back
                    </Link>
                </div>
            }>
            <Head title="Create Task" />

            <div className="py-12">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-bold mb-4">Projects</h1>
                            <form onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white">
                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="task_status"
                                        value="Project"/>
                                    <SelectInput
                                    id="project"
                                    name="project"
                                    className="block w-full mb-3"
                                    value={data.project}
                                    onChange={(e) => setData("project", e.target.value)}
                                    >
                                    <option value="">Select Project</option>
                                    {projectData.map(project => (
                                        <option key={project.id} value={project.id}>
                                            {project.name}
                                        </option>
                                    ))}
                                </SelectInput>


                                    <InputError message={errors.due_date} className="mt-2" />
                                </div>
                                {/* image path */}
                                <div>
                                    <InputLabel
                                        htmlFor="project_image_path"
                                        value="Project Image"
                                    />
                                    <pre></pre>

                                    <FileInput
                                        name="image_path"
                                        accept="image/*"
                                        isFocused={true}
                                        className="mb-4"
                                        onChange={(e) => setData("image", e.target.value)}
                                    />

                                    <InputError message={errors.image} className="mt-2" />
                                </div>

                                {/* name */}
                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="project_name"
                                        value="Task"
                                    />
                                    <TextInput
                                        id="task_name"
                                        type="text"
                                        name="name"
                                        value={data.name} //this is the data path for the name, in the top and in the laravel
                                        className="block w-full"
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                    {/* validation for the data */}
                                </div>

                                {/* description */}
                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="task_description"
                                        value="Description"
                                    />
                                    <Textarea
                                        id="task_description"
                                        name="description"
                                        value={data.description} //this is the data path for the name, in the top and in the laravel
                                        className="block w-full"
                                        onChange={(e) => setData("description", e.target.value)}
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                    {/* validation for the data */}
                                </div>


                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="task_due_date"
                                        value="Task Due Date"
                                    />

                                    <TextInput
                                        id="task_due_date"
                                        type="date"
                                        name="due_date"
                                        value={data.due_date} //this is the data path for the name, in the top and in the laravel
                                        className="block w-full"
                                        onChange={(e) => setData("due_date", e.target.value)}
                                    />
                                    <InputError message={errors.due_date} className="mt-2" />
                                    {/* validation for the data */}
                                </div>
                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="task_status"
                                        value="Status"
                                    />
                                    <SelectInput
                                        id="tak_status"
                                        name="status"
                                        className="block w-full"
                                        onChange={(e) => setData("status", e.target.value)}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </SelectInput>
                                    <InputError message={errors.due_date} className="mt-2" />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link
                                        href={route('project.index')}
                                        className="mx-2 inline-block px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

            {/* close */}
        </AuthenticatedLayout >

    )
}