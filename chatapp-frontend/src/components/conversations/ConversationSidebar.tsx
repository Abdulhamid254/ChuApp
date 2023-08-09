import React, { FC, useState } from 'react'
import { ConversationSidebarContainer, ConversationSidebarHeader, ConversationSidebarItem, ConversationsSidebarStyle } from '../../utils/styles';
import { TbEdit } from 'react-icons/tb';
import { ConverastionType } from '../../utils/types';
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom';
import { CreateConversationModal } from '../modals/CreateConversationModal';


type Props = {
  conversations: ConverastionType[];
}

const ConversationSidebar: FC<Props>= ({conversations}) => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    {showModal && <CreateConversationModal setShowModal={setShowModal}/>}
    <ConversationsSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <div onClick={() => setShowModal(!showModal)}>
            <TbEdit size={40}/>
        </div>
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItem onClick={() =>navigate(`/conversations/${conversation.id}`)}>
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{conversation.name}</span>
              <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
            </div>
          </ConversationSidebarItem>
        ))}
      </ConversationSidebarContainer>
    </ConversationsSidebarStyle></>
  )
}

export default ConversationSidebar