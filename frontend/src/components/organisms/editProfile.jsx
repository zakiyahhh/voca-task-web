import Icon from '../atoms/icon';
import ProfileForm from '../molecules/profileForm';

const EditProfile = ({
    profileUrl,
    name,
    email,
    password,
    onProfileUrlChange,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    onBack,
}) => {
    return (
        <div className="max-w-md mx-auto bg-[#1b1424] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
                <Icon icon="←" onClick={onBack} className="mr-4" />
                <h2 className="text-lg text-gray-200 font-semibold">Edit Profile</h2>
            </div>
            <ProfileForm
                profileUrl={profileUrl}
                name={name}
                email={email}
                password={password}
                onProfileUrlChange={onProfileUrlChange}
                onNameChange={onNameChange}
                onEmailChange={onEmailChange}
                onPasswordChange={onPasswordChange}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default EditProfile;
