import Input from '../atoms/input';
import Button from '../atoms/Button';

const ProfileForm = ({
    profileUrl,
    name,
    email,
    password,
    onProfileUrlChange,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onSubmit,
}) => {
    return (
        <div>
            <div className="flex justify-center mb-6">
                <img
                    src={profileUrl || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-purple-400"
                />
            </div>
            <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                    <label className="text-sm text-gray-400">Profile URL</label>
                    <Input
                        type="text"
                        value={profileUrl}
                        onChange={onProfileUrlChange}
                        placeholder="Image URL"
                    />
                </div>
                <div>
                    <label className="text-sm text-gray-400">Name</label>
                    <Input type="text" value={name} onChange={onNameChange} placeholder="Name" />
                </div>
                <div>
                    <label className="text-sm text-gray-400">Email</label>
                    <Input type="email" value={email} onChange={onEmailChange} placeholder="Email" />
                </div>
                <div>
                    <label className="text-sm text-gray-400">Password</label>
                    <Input
                        type="password"
                        value={password}
                        onChange={onPasswordChange}
                        placeholder="Password"
                    />
                </div>
                <Button
                    text="Submit"
                    className="bg-purple-500 text-white w-full hover:bg-purple-600"
                    onClick={onSubmit}
                />
            </form>
        </div>
    );
};

export default ProfileForm;
