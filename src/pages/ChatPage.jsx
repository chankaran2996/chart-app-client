import React from 'react'
import BorderAnimatedContainer from '../components/BorderAnimatedContainer'
import ProfileHeader from '../components/ProfileHeader'
import ActiveTabSwitch from '../components/ActiveTabSwitch'
import { useChatStore } from '../store/useChatStore'
import ChatList from '../components/ChatList'
import ContactList from '../components/ContactList'

const ChatPage = () => {
  const { activeTab } = useChatStore();
  return (
    <div className=' relative w-full h-auto max-x-6xl'>
      <BorderAnimatedContainer>
        {/* Left Sidebar */}
        <div className=' w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col '>
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className=' flex-1 p-4 overflow-y-auto space-y-2'>
            {
              activeTab === "chats" ? (
                <ChatList />
              ) : (
                <ContactList />
              )
            }
          </div>
        </div>
        {/* Right Chat Area */}
        <div className=' flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm'>
          Right Chat Area
        </div>
      </BorderAnimatedContainer>

    </div>
  )
}

export default ChatPage