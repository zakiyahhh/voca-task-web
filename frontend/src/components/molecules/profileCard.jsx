import ProfilePicture from '../atoms/profilePicture';
import Button from '../atoms/Button';

const ProfileCard = ({ user, onEditProfile, onSignOut }) => {
    return (
        <div className="p-4 bg-[#1b1424] rounded-lg">
            <ProfilePicture />
            <p className="mt-4 text-white">Welcome Back, <span className="font-bold">{user.name}</span>!</p>
            <div className="mt-4 flex flex-col gap-2">
                <Button text="Edit Profile" onClick={onEditProfile} color="bg-gray-500 text-white" />
                <Button text="Sign Out" onClick={onSignOut} color="bg-red-500 text-white" />
            </div>
        </div>
    );
};

export default ProfileCard;
