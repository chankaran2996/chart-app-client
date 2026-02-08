import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({

    authUser: null,
    isCheckedin : true,
    isSignup : false,
    isLogin : false,

    checkAuth : async() => {
        try {
            const response = await axiosInstance.get("/auth/check");
            if(response.status === 200){
                set({ authUser: response.data });
                return;
            }
            
        } catch (error) {
            console.log("Error checking auth:", error);
            set({ authUser: null });
        }finally{
            set({ isCheckedin : false });
        }
    },

    signup : async (data) => {
        set({ isSignup : true });
        try {
            const response = await axiosInstance.post("/auth/register" , data);
            if(response.status === 201){
                set({ authUser : response.data });
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Signin failed");
        }finally{
            set({ isSigninup : false });
        }
    },

    login : async (data) => {
        set({ isLogin : true });
        try {
            const response = await axiosInstance.post("/auth/login" , data);
            if(response.status === 200){
                set({ authUser : response.data });
                toast.success(response.data.message);
                return response.data;
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }finally{
            set({ isLogin : false });
        }
    },

    logout : async () => {
        try {
            const response = await axiosInstance.post("/auth/logout");
            if(response.status === 200){
                set({ authUser : null });
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed");
        }finally{
            set({ isLogin : false });
        }
    },

    updateProfileImage : async (data) => {
        try {
            const response = await axiosInstance.put("/auth/profile-pic" , data);
            if(response.status === 200){
                toast.success("Profile image updated successfully");
                return response.data.imageUrl;
            }
            set({ authUser : response.data });
        } catch (error) {
            toast.error(error.response?.data?.message || "Profile image update failed");
        }
    }

}));