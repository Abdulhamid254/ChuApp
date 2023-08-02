import React, { FC } from 'react'
import { ConversationSidebarContainer, ConversationSidebarHeader, ConversationSidebarItemStyle, ConversationsSidebarStyle } from '../../utils/styles';
import { TbEdit } from 'react-icons/tb';
import { ConverastionType } from '../../utils/types';
import styles from './index.module.scss'


type Props = {
  conversations: ConverastionType[];
}

const ConversationSidebar: FC<Props>= ({conversations}) => {
  return (
    <ConversationsSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <TbEdit size={40}/>
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItemStyle>
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{conversation.name}</span>
              <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
            </div>
          </ConversationSidebarItemStyle>
        ))}
      </ConversationSidebarContainer>
    </ConversationsSidebarStyle>
  )
}

export default ConversationSidebar