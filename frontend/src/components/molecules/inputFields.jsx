import React from 'react';

const InputField = ({ label, type, placeholder, onChange, value }) => (
    <div className="mb-4">
        <label className="text-sm text-gray-400 mb-1 block">{label}</label>
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-2 bg-transparent border border-purple-500 rounded-md focus:outline-none text-white"
        />
    </div>
);

export default InputField;