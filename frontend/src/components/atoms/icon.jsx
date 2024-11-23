const Icon = ({ icon, onClick, className }) => {
    return (
        <i onClick={onClick} className={`text-purple-400 text-xl cursor-pointer ${className}`}>
            {icon}
        </i>
    );
};

export default Icon;
