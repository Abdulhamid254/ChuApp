import React from 'react'
import { Page } from '../utils/styles'
import ConversationSidebar from '../components/conversations/ConversationSidebar'
import { Outlet, useParams } from 'react-router-dom'
import ConversationPanel from '../components/conversations/ConversationPanel'


const ConversationPage = () => {
  //checking for the id first
  const { id } = useParams();
  
  return (
    <Page>
      <ConversationSidebar/>
      {!id &&  <ConversationPanel />}
      <Outlet/>
    </Page>
  )
}

export default ConversationPage