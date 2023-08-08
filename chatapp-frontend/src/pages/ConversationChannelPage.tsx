import React, { useContext } from 'react'
import { ConversationChannelPageStyle } from '../utils/styles'
// import { useParams } from 'react-router-dom';
;
import { AuthContext } from '../utils/context/AuthContext';

const ConversationChannelPage = () => {

  const {user}= useContext(AuthContext)
    
  return (
    <ConversationChannelPageStyle>
      {user && user.email}
    </ConversationChannelPageStyle>
  )
}

export default ConversationChannelPage