import React from 'react'
import { useChatStore } from '../store/useChatStore'

const ActiveTabSwitch = () => {

  const { activeTab , setActiveTabs } = useChatStore();
  return (
    <div className=' tabs tabs-boxed bg-transparent m-2 p-2'>

      <button 
      onClick={ ()=> setActiveTabs("Chats")}
      className={`tab ${activeTab=="Chats"?"bg-cyan-500/50 text-cyan-400":"text-slate-400"}`}
      >Chats</button>
      <button
      onClick={ () => setActiveTabs("Contacts")}
      className={`tab ${activeTab=="Contacts"?"bg-cyan-500/50 text-cyan-400":"text-slate-400"}`}
      >Contacts</button>

    </div>
  )
}

export default ActiveTabSwitch