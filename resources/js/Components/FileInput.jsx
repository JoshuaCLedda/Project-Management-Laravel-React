import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export default forwardRef(function FileInput(
    { className = '', isFocused = false, ...props },
    ref
) {
    const localRef = useRef(null);
    const [fileName, setFileName] = useState('No file selected');

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : 'No file selected');
        props.onChange && props.onChange(e);
    };

    return (
        <div className={`w-full ${className}`}>
            <div className="relative flex items-center">
                <input
                    {...props}
                    type="file"
                    ref={localRef}
                    onChange={handleChange}
                    className="peer absolute inset-0 opacity-0 z-10 cursor-pointer"
                />
                <div className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white peer-hover:border-indigo-500 peer-focus-within:border-indigo-500 transition">
                    <span className="text-sm text-gray-700 truncate">{fileName}</span>
                    <span className="text-sm text-indigo-600 font-medium">Browse</span>
                </div>
            </div>
        </div>
    );
});
