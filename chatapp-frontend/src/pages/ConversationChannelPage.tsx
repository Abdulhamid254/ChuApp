import React from 'react'
import { ConversationChannelPageStyle } from '../utils/styles'
import { useParams } from 'react-router-dom';

const ConversationChannelPage = () => {
    console.log(useParams());
    
  return (
    <ConversationChannelPageStyle>
        convesation channnel channel channel channel page
    </ConversationChannelPageStyle>
  )
}

export default ConversationChannelPage