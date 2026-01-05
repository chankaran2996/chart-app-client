import React, { useState } from 'react'
import { useStore } from 'zustand';
import { useAuthStore } from '../store/useAuthStore';

const Siginup = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [signup , isSigningup] = useAuthStore();

  const hndileSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  }
  return (
    <div className=' w-full flex items-center justify-center p-4 bg-slate-900'>
      <div className=' relative w-full max-w-6xl md:h-[800px] h-[650px]'>

      </div>
    </div>
  )
}

export default Siginup