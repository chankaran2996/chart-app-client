import { create } from "zustand";

export const useAuthStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   clearUser: () => set({ user: null }),

    authUser: null,
    islogedin : false,

    login : () => {
        set({islogedin : true});
        set({authUser : {name : "John Doe" , email : "john.doe@example.com", id : "12345"}});
    }
}));