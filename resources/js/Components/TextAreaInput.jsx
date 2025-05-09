import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextAreaInput(
    { className = "", isFocused = false, children, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            ref={localRef}
            className={
                `mt-1 block w-full text-sm text-gray-900 
                    px-4 py-2 border border-gray-400 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                    hover:border-gray-500 transition-all duration-150 ease-in-out 
                    shadow-sm resize-y ` + className
            }
        >
            {children}
        </textarea>
    );
});
