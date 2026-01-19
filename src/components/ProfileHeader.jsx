import React, { useRef, useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';
import Avatar from '../assets/avatar.png';

const ProfileHeader = () => {
    const { logout , authUser} = useAuthStore();
    const { isSoundOn , toggleSound } = useChatStore();

    const [selectedImg, setSelectedImg] = useState(null);

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImg(reader.result);
            };
            reader.readAsDataURL(file);
        }   
    };
  return (
    <div className=' p-6 border-b border-slate-700/50'>
        <div className=' flex items-center justify-between'>
            <div className=' flex items-center gap-3'>
                {/* Profile Image */}
                <div className=' avatar online'>
                    <button
                    className=' size-14 rounded-full overflow-hidden relative group'
                    onClick={() => fileInputRef.current.click()}
                    >
                        <img 
                        src={selectedImg || authUser?.profileImage || Avatar} 
                        alt="Profile" 
                        className=' size-full object-cover'
                        />
                    </button>
                    <input 
                    type="file" 
                    className=' hidden'
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader