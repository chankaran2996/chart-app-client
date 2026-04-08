import React from 'react'

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  return (
    <div 
    className=' flex justify-between items-center bg-slate-800/50 
    p-4 border-b border-slate-700/50 max-h-[84px] px-6 flex-1'
    >
      
    </div>
  )
}

export default ChatHeader