import React, { useState } from 'react'
import { useStore } from 'zustand';
import { useAuthStore } from '../store/useAuthStore';
import BorderAnimatedContainer from '../components/BorderAnimatedContainer';
import { LoaderIcon, LockIcon, MailIcon, MessageCircleCodeIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Siginup = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const {signup , isSigninup} = useAuthStore();

  const hndileSubmit = (e) => {
    e.preventDefault();
    // signup(formData);
  }
  return (
    <div className=' w-full flex items-center justify-center p-4 bg-slate-900'>
      <div className=' relative w-full max-w-6xl md:h-[800px] h-[650px]'>
        <BorderAnimatedContainer>
          <div className=' w-full flex flex-col md:flex-row'>
            {/* Form cloum left side */}
            <div 
            className=' md:w-1/2 p-8 flex items-center justify-center 
            md:border-r border-slate-600/30'>
              <div className=' w-full max-w-md'>
                {/* Heading text */}
                <div className=' mb-8 text-center'>
                  <MessageCircleCodeIcon 
                  className=' w-12 h-12 max-auto text-slate-400 mb-4' />
                  <h2 
                  className=' text-2xl font-bold text-slate-200 mb-2'>
                    Create your account
                  </h2>
                  <p className=' text-slate-400 '>Sign up to get started!</p>
                </div>

                {/* Form */}
                <form 
                onSubmit={hndileSubmit}
                className=' space-y-6'>
                  {/* Full name */}
                  <div>
                    <label 
                    className=' auth-input-label'>
                      Full Name
                    </label>
                    <div className=' relative'>
                      <UserIcon className=' auth-input-icon'/>
                      <input 
                      type="text"
                      className=' input'
                      placeholder='Enter your full name'
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                    </div>
                      
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                    className=' auth-input-label'>
                      Email Address
                    </label>
                    <div className=' relative'>
                      <MailIcon className=' auth-input-icon'/>
                      <input 
                      type="email"
                      className=' input'
                      placeholder='Enter your email'
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      /> 
                    </div> 
                  </div>

                  {/* Password */}
                  <div>
                    <label
                    className=' auth-input-label'>
                      Password
                    </label>
                    <div className=' relative'>
                      <LockIcon className=' auth-input-icon'/>
                      <input 
                      type="password"
                      className=' input'
                      placeholder='Enter your password'
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />  
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="auth-btn" disabled={isSigninup}>
                    {isSigninup ? (
                      <LoaderIcon className=' w-full h-5 animate-spin text-center' />
                      ) : 'Create Account'}
                  </button>
                </form>

                <div className=' mt-6 text-center'>
                    <Link to="/login" className=' auth-link'>
                      Already have an account? Log in
                    </Link>
                </div>
              </div>
            </div>

          </div>
        </BorderAnimatedContainer>

      </div>
    </div>
  )
}

export default Siginup