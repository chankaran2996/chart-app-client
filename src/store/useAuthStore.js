import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   clearUser: () => set({ user: null }),

    authUser: null,
    isCheckedin : true,
    isSignup : false,

    checkAuth : async() => {
        try {
            const response = await axiosInstance.get("/auth/check");
            console.log("Auth check response:", response);
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
    }
}));