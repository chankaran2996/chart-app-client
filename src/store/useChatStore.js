import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set,get) => ({
    allContacts : [],
    chats : [],
    messages : [],
    activeTab : "Chats",
    selectedUser : null,
    isUsersLoading : false,
    isMessagesLoading : false,
    isSoundOn : JSON.parse(localStorage.getItem("isSoundOn")) === true,

    toggleSound : () => {
        localStorage.setItem("isSoundOn", !(get().isSoundOn))
        set((state) => ({
            isSoundOn : !state.isSoundOn
        }))
    },

    setActiveTabs : (tab) => set(() => ({
        activeTab : tab
    }) ),

    setSelectedUser : (user) => set(() => ({
        selectedUser : user
    }) ),
    
    getAllContacts : async () => {
        set({ isUsersLoading : true });
        try {
            // Simulate API call
            const response = await axiosInstance.get("/messages/contacts");
            // console.log("Contacts response:", response.data);
            set({ allContacts : response.data.contacts });
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
            // console.log("Chat partners response:", response.data);
            if (response.data.chatParameters.length === 0) {
                set({ chats : [] });
            }else{
                set({ chats : response.data.chatParameters });
            }
        } catch (error) {
            toast.error("Failed to load chats "+error.message, { duration: 2000 });
        }finally{
            set({ isUsersLoading : false });
        }
    },

    getMessagesByUserId : async (userId) => {
        set({ isMessagesLoading : true });
        try {
            // Simulate API call
            const response = await axiosInstance.get(`/messages/${userId}`);
            // console.log("Messages response:", response.data);
            set({ messages : response.data.messages });
        } catch (error) {
            toast.error("Failed to load messages "+error.message, { duration: 2000 });
        }finally{
            set({ isMessagesLoading : false });
        }
    },

}))