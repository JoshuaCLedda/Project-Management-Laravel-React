import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default function InputFile({
    name,
    onChange,
    className = '',
    ...props
}) {
    return (
        <input
            type="file"
            name={name}
            onChange={onChange}
            className={
                `block w-full text-sm text-gray-900 
                 border border-gray-300 rounded-md
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-md file:border-0
                 file:bg-indigo-50 file:text-indigo-700
                 hover:file:bg-indigo-100
                 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500
                 ` + className
            }
            {...props}
        />
    );
}
