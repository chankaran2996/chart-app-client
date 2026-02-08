import React, { useRef, useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';
import Avatar from '../assets/avatar.png';
import { LogOutIcon, Volume2Icon, VolumeOffIcon } from 'lucide-react';
import clickSoundFile from '../assets/sounds/mouse-click.mp3';
// Initialize audio object
const mouseClickSound = new Audio(clickSoundFile);
const ProfileHeader = () => {
    const { logout , authUser , updateProfileImage } = useAuthStore();
    const { isSoundOn , toggleSound } = useChatStore();

    const [selectedImg, setSelectedImg] = useState(null);

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }  
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Img = reader.result;
                setSelectedImg(base64Img);
                updateProfileImage( { profilePic:base64Img});
            }; 
            reader.readAsDataURL(file);
    };

    const handileSoundToggle = () => {
        mouseClickSound.currentTime = 0;
        mouseClickSound.play().catch((e) => { console.log("Sound play error:", e); });
        toggleSound();
    }
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
                        src={selectedImg || authUser?.profilePic || Avatar} 
                        alt="Profile" 
                        className=' size-full object-cover'
                        />
                        <div
                        className=' absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                        transition-opacity flex items-center justify-center'
                        >
                            <span className=' text-white text-xs'>Change</span>
                        </div>
                    </button>
                    <input 
                    type="file" 
                    className=' hidden'
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    />
                </div>
                {/* User Info */}
                <div>
                    <h3 className=' text-slate-200 font-medium text-base max-w-[180px] 
                    truncate'>
                        {authUser?.user?.fullName || "User Name"}
                    </h3>
                    <p className=' text-slate-400 text-xs'> online </p>
                </div>
            </div>
            {/* Actions */}
            <div className=' flex items-center gap-4'>
                {/* Logout Button */}
                <button
                    onClick={logout}
                    className=' text-slate-400 hover:text-cyan-400 transition-colors'
                >
                    <LogOutIcon className=' size-5' />
                </button>

                {/* Sound Toggle */}
                <button
                    onClick={handileSoundToggle}
                    className=' text-slate-400 hover:text-cyan-400 transition-colors'
                >
                    {isSoundOn ? (
                        <Volume2Icon className=' size-5' />
                    ) : (
                        <VolumeOffIcon className=' size-5' />
                    )}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProfileHeader