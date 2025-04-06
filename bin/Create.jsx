import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Create({ auth, projects, success }) {

    const { flash = {} } = usePage().props;
    const [showFlash, setShowFlash] = useState(false);  // Initially set to false

    // UseEffect to show and hide flash message
    useEffect(() => {
        console.log(flash.message);  // Log the flash message to see if it's being passed
    
        if (flash.message) {
            setShowFlash(true);  // Show the flash message
            const timeout = setTimeout(() => setShowFlash(false), 4000);  // Hide it after 4 seconds
            return () => clearTimeout(timeout);
        }
    }, [flash.message]);  // Make sure to check when flash.message changes
    

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        due_date: '',
        status: '',
        image_path: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            image_path: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('due_date', formData.due_date);
        data.append('status', formData.status);
        if (formData.image_path) {
            data.append('image_path', formData.image_path);
        }

        router.post(route('project.store'), data, {
            preserveScroll: true,
            onSuccess: () => {
                console.log("Success");
                setFormData({ 
                    name: '',
                    description: '',
                    due_date: '',
                    status: '',
                    image_path: null,
                });
            },
        });
    };


    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create Project</h2>}
        >
            <Head title="Create Project" />



            <div className="py-10">

           
                <div className="max-w-6xl mx-auto bg-white p-4 rounded-lg shadow-md">

                    <h3 className="text-2xl font-bold mb-6">Create New Project

                {success && (

    <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
        {success}
    </div>
                )}  

</h3>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            ></textarea>
                        </div>



                        {/* Due Date */}
                        <div className="mb-4">
                            <label htmlFor="due_date" className="block text-sm font-medium text-gray-700">Due Date</label>
                            <input
                                type="date"
                                id="due_date"
                                name="due_date"
                                value={formData.due_date}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Status */}
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                required >
                                <option value="">Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        {/* Image Path */}
                        <div className="mb-4">
                            <label htmlFor="image_path" className="block text-sm font-medium text-gray-700">Project Image</label>
                            <input
                                type="file"
                                id="image_path"
                                name="image_path"
                                onChange={handleFileChange}
                                className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                            >
                                Create Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
