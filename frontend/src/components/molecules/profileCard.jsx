import ProfilePicture from '../atoms/profilePicture';
import Button from '../atoms/Button';
import { getProfile } from '../../api/profile';
import { useEffect, useState } from 'react';


const ProfileCard = () => {
    const [profile, setProfile] = useState([]);

    const fetchData = async () => {
        const response = await getProfile()
        setProfile(response.data)
    }

    useEffect(() => {
        fetchData();

    }, [])

    console.log(profile)
    return (
        <div className="p-4 bg-[#1b1424] rounded-lg">
            <ProfilePicture />
            <p className="mt-4 text-white">Welcome Back, <span className="font-bold">{profile.name}</span>!</p>
            <div className="mt-4 flex flex-col gap-2">
                {/* <Button text="Edit Profile" onClick={ } color="bg-gray-500 text-white" />
                <Button text="Sign Out" onClick={ } color="bg-red-500 text-white" /> */}
            </div>
        </div>
    );
};

export default ProfileCard;
