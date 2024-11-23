const ProfilePicture = ({ image }) => {
    return (
        <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center">
            {image ? <img src={image} alt="Profile" className="rounded-full" /> : <span>👤</span>}
        </div>
    );
};

export default ProfilePicture;
