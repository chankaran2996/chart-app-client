import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore';
import UsersLoading from './UserLoading';
import NoChatsFound from './NoChatsFound';

const ChatList = () => {
  const { getMyChatPartners , chats , isUsersLoading ,setSelectedUser  } = useChatStore();

  // Load chat partners on component mount
  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners])

  // When loading chats, show loading skeleton
  if(isUsersLoading) return <UsersLoading />

  // If no chats found, show message
  if(chats.length === 0) return <NoChatsFound />

  // console.log(chats.length, chats)

  return (
    <>
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
          onClick={() => setSelectedUser(chat)}
        >
          <div className="flex items-center gap-3">
            <div className={`avatar online`}>
              <div className="size-12 rounded-full">
                <img src={chat.profilePic || "../assets/avatar.png"} alt={chat.fullName} />
              </div>
            </div>
            <h4 className="text-slate-200 font-medium truncate">{chat.fullName}</h4>
          </div>
        </div>
      ))}
    </>
  );
}

export default ChatList