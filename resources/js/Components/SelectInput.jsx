import { forwardRef, useImperativeHandle, useRef } from 'react';

export default forwardRef(function SelectInput(
    { className = '', childred, ...props },
    ref,
) {
    const localRef = useRef(null);


    // learn the use of UseEffect
    return (
        <select
            {...props}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                className
            }
            ref={localRef}
        >
        </select>
    );
});
