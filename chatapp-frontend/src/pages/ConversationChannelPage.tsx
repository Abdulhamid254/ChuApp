import React, { useContext } from 'react'
import { ConversationChannelPageStyle } from '../utils/styles'
// import { useParams } from 'react-router-dom';
;
import { useAuthUser } from '../hooks/apis/auth/auth';


const ConversationChannelPage = () => {

  // getting the user data
  const {data} = useAuthUser();

   if (!data) {
    return <div>No user data available.</div>;
  }

  const userData = data.data;
 
    
  return (
    <ConversationChannelPageStyle>
      {userData && userData.email}
    </ConversationChannelPageStyle>
  )
}

export default ConversationChannelPage