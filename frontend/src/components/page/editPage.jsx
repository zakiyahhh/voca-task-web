import { useState } from 'react';
import EditProfile from '../organisms/editProfile';
import TodoPageTemplate from './components/templates/TodoPageTemplate';

const EditPage = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [profileData, setProfileData] = useState({
        profileUrl: '',
        name: 'Sarah Santoso',
        email: 'sarah.santoso@gmail.com',
        password: '',
    });

    const handleEditProfileChange = (key, value) => {
        setProfileData({ ...profileData, [key]: value });
    };

    const handleSubmitProfile = (e) => {
        e.preventDefault();
        alert('Profile updated!');
        setIsEditingProfile(false);
    };

    return isEditingProfile ? (
        <EditProfile
            profileUrl={profileData.profileUrl}
            name={profileData.name}
            email={profileData.email}
            password={profileData.password}
            onProfileUrlChange={(e) => handleEditProfileChange('profileUrl', e.target.value)}
            onNameChange={(e) => handleEditProfileChange('name', e.target.value)}
            onEmailChange={(e) => handleEditProfileChange('email', e.target.value)}
            onPasswordChange={(e) => handleEditProfileChange('password', e.target.value)}
            onSubmit={handleSubmitProfile}
            onBack={() => setIsEditingProfile(false)}
        />
    ) : (
        <TodoPageTemplate
            onEditProfile={() => setIsEditingProfile(true)}
        />
    );
};

export default EditPage;
