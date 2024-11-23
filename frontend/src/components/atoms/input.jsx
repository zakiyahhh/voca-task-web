const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 text-sm text-white bg-[#1b1424] rounded-lg outline-none"
        />
    );
};

export default Input;
