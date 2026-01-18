import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set,get) => ({
    allContacts : [],
    chats : [],
    messages : [],
    activeTab : "chats",
    selectedUser : null,
    isUsersLoading : false,
    isMessagesLoading : false,
    isSoundOn : localStorage.getItem("isSoundOn") === true,

    toggleSound : () => {
        localStorage.setItem("isSoundOn", !(get().isSoundOn))
        set((state) => ({
            isSoundOn : !state.isSoundOn
        }))
    },

    setActiveTabs : (tab) => set(() => ({
        activeTabs : tab
    }) ),

    setSelectedUser : (user) => set(() => ({
        selectedUser : user
    }) ),
    
    getAllContacts : async () => {
        set({ isUsersLoading : true });
        try {
            // Simulate API call
            const response = await axiosInstance.get("/messages/contacts");
            set({ allContacts : response.data });
        } catch (error) {
            toast.error("Failed to load contacts "+error.message, { duration: 2000 });
        }finally{
            set({ isUsersLoading : false });
        }
    },

    getMyChatPartners : async () => {
        set({ isUsersLoading : true });
        try {
            // Simulate API call
            const response = await axiosInstance.get("/messages/chat");
            set({ chats : response.data });
        } catch (error) {
            toast.error("Failed to load chats "+error.message, { duration: 2000 });
        }finally{
            set({ isUsersLoading : false });
        }
    },


}))