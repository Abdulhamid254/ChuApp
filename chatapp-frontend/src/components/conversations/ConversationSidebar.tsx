import React from 'react'
import { ConversationsSidebarStyle } from '../../utils/styles';
import { TbEdit } from 'react-icons/tb'

const ConversationSidebar = () => {
  return (
    <ConversationsSidebarStyle>
      <header>
        <h1>Conversations</h1>
        <TbEdit size={40}/>
      </header>
    </ConversationsSidebarStyle>
  )
}

export default ConversationSidebar