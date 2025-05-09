import Alert from "@/Components/Alert";
import InputError from "@/Components/InputError";
import InputFile from "@/Components/InputFile";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Description, Textarea } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ auth }) {
    const user = usePage().props.auth.user;

    const [showAlert, setShowAlert] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: "",
        status: "",
        description: "",
        due_date: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("project.store"), {
            onSuccess: () => {
                reset();
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 4000); // auto hide after 4s
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create New Project
                    </h2>

                    <Link
                        href={route("project.index")}
                        className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
                    >
                        Back
                    </Link>
                </div>
            }
        >
            <Head title="Create Projects" />
            <div className="py-12">
                <div className="mx-auto max-w-10xl sm:px-6 lg:px-12">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="px-8 text-xl font-bold">Projects</h1>
                            <div className="mx-8">
                                <Alert />
                            </div>
                            <form
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white "
                            >
                                {/* image path */}
                                <div>
                                    <InputLabel
                                        htmlFor="project_image_path"
                                        value="Project Author"
                                    />
                                    <pre></pre>
                                    <TextInput
                                        id="project_name"
                                        type="text"
                                        name="name"
                                        value={user.name} //this is the data path for the name, in the top and in the laravel
                                        className="block w-full mb-3"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="project_image_path"
                                        value="Project Image"
                                    />
                                    <pre></pre>
                                    <InputFile
                                        id="project_image_path"
                                        type="file"
                                        name="image"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />

                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>

                                {/* name */}
                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="project_name"
                                        value="Project Description"
                                    />
                                    <TextInput
                                        id="project_name"
                                        type="text"
                                        name="name"
                                        value={data.name} //this is the data path for the name, in the top and in the laravel
                                        className="block w-full"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                    {/* validation for the data */}
                                </div>

                                {/* description */}
                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="project_description"
                                        value="Description"
                                    />
                                    <TextAreaInput
                                        id="project_description"
                                        name="description"
                                        value={data.description}
                                        className="block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                    {/* validation for the data */}
                                </div>

                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="project_due_date"
                                        value="Project Due Date"
                                    />

                                    <TextInput
                                        id="project_due_date"
                                        type="date"
                                        name="due_date"
                                        value={data.due_date}
                                        className="block w-full"
                                        onChange={(e) =>
                                            setData("due_date", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.due_date}
                                        className="mt-2"
                                    />
                                    {/* validation for the data */}
                                </div>

                                {/* Status */}
                                <div>
                                    <InputLabel
                                        className="mt-3"
                                        htmlFor="project_status"
                                        value="Status"
                                    />

                                    <SelectInput
                                        id="project_status"
                                        name="status"
                                        className="block w-full"
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                    >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">
                                            In Progress
                                        </option>
                                        <option value="completed">
                                            Completed
                                        </option>
                                    </SelectInput>

                                    <InputError
                                        message={errors.due_date}
                                        className="mt-2"
                                    />
                                    {/* validation for the data */}
                                </div>

                                <div className="mt-4 text-right">
                                    <Link
                                        href={route("project.index")}
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
            </div>
        </AuthenticatedLayout>
    );
}
