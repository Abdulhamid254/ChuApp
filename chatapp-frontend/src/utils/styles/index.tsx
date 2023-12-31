import styled from 'styled-components';
import { ConversationSidebarItemProps, InputContainerProps, PageProps } from './styleType';

export const SIDEBAR_WIDTH = 400;

export const InputField = styled.input`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  &:disabled {
    color: #3b3b3b;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${(prop) => prop.backgroundColor || '#131313'};
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 16px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition: 250ms background-color ease;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    background-color: #3a1cff;
  }
  &:disabled {
    background-color: #4937bc7c;
    color: #878787a2;
    cursor: not-allowed;
  }
`;

export const Page = styled.div<PageProps>`
  background-color: #1a1a1a;
  height: 100%;
  width: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items:${(props) => props.alignItems};
  
`;

export const ConversationsSidebarStyle = styled.aside`
   position: absolute;
   top: 0;
   left:0;
   gap:20;
   height:100%;
   width: ${SIDEBAR_WIDTH}px;
   background-color: #1a1a1a;
   border-right: 1px solid #5454543d;
   overflow-y: scroll;
   &::-webkit-scrollbar {
    display: none;
   }
`;

export const ConversationSidebarHeader = styled.div`
   position:fixed;
   width:${SIDEBAR_WIDTH}px;
   top: 0;
   left: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 32px;
   box-sizing: border-box;
   background-color:#151515;
   height: 100px;
   border-bottom: 1px solid #5454543d;
   & h1 {
    font-weight:400;
   }
`

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left:${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarContainer = styled.div`
  padding: 100px 0;
`;

export const ConversationSidebarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 18px 32px;
    width:${SIDEBAR_WIDTH}px;
    box-sizing: border-box; 
    border-bottom: 1px solid #5454543d;
    background-color: #131313;
  
`;

export const OverlayStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000c4;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContainerStyle = styled.div`
   background-color: #121212;
   width: 650px;
   box-sizing: border-box;
   border-radius: 10px;
`;

export const ModalHeaderStyle = styled.header`
width: 100%;
padding: 0 24px;
display: flex;
justify-content: space-between;
align-items: center;
 margin-top: 28px;
& h2 {
  font-weight: 500;
  margin: 0;
 
}`;

export const ModalContentBodyStyle = styled.div`
   padding: 24px;
`;

export const TextField = styled.textarea`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  resize: none;
`;
