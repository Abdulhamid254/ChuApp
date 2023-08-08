import React, { useContext } from 'react'
import { Page } from '../utils/styles'
import ConversationSidebar from '../components/conversations/ConversationSidebar'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import ConversationPanel from '../components/conversations/ConversationPanel'
import mockConversations from '../__mocks__/conversations'
import { useAuthUser } from '../hooks/apis/auth/auth'

import { useQueryClient } from '@tanstack/react-query'
import Spinners from '../components/common/Spinners'





const ConversationPage = () => {
  //checking for the id first
  const { id } = useParams();
  const navigate = useNavigate();


 
 
  const queryClient = useQueryClient();

  // consuming the react query
   const { data, isLoading, isError } = useAuthUser();
 
   if (isLoading) {
    return <Spinners/> 
  }

  // Handle error state
  if (isError) {
    return <p>Error loading user data.</p>; 
  }

  // Handle authentication state
  if (!data) {
     // Invalidate or refetch the user query when the user is redirected to login
    queryClient.invalidateQueries(['User'])
    navigate('/login'); // Update the path to your actual login route
    return null; // Render nothing for now, as the user is being redirected
  }


   console.log("data", data);
   
  
  return (
    <Page>
      <ConversationSidebar conversations={[]}/>
      {!id &&  <ConversationPanel />}
      <Outlet/>
    </Page>
  )
}

export default ConversationPage