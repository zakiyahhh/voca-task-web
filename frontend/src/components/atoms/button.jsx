import React from 'react';

const Button = ({ children, type, onClick, className, ...props }) => (
    <button {...props} type={type} onClick={onClick} className={`w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md mt-4 transition ${className}`}>
        {children}
    </button>
);

export default Button;