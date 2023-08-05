import React from 'react'
import { Page } from '../utils/styles'
import ConversationSidebar from '../components/conversations/ConversationSidebar'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import ConversationPanel from '../components/conversations/ConversationPanel'
import mockConversations from '../__mocks__/conversations'
import { useAuthUser } from '../hooks/apis/auth/auth'
import { User } from '../utils/types'
import { QueryClient, useQueryClient } from '@tanstack/react-query'
import Spinners from '../components/common/Spinners'


const ConversationPage = () => {
  //checking for the id first
  const { id } = useParams();
  const navigate = useNavigate();
    const queryClient = useQueryClient();

   const { data:user, isLoading:isUserLoading, isError: isUserError } = useAuthUser();


   if (isUserLoading) {
    return <Spinners/> 
  }

  // Handle error state
  if (isUserError) {
    return <p>Error loading user data.</p>; 
  }

  // Handle authentication state
  if (!user) {
     // Invalidate or refetch the user query when the user is redirected to login
    queryClient.invalidateQueries(['User'])
    navigate('/login'); // Update the path to your actual login route
    return null; // Render nothing for now, as the user is being redirected
  }

   console.log("User",user);
   
  
  return (
    <Page>
      <ConversationSidebar conversations={mockConversations}/>
      {!id &&  <ConversationPanel />}
      <Outlet/>
    </Page>
  )
}

export default ConversationPage