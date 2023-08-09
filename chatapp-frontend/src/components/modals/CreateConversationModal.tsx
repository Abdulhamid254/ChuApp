import { FC, createRef, useEffect } from "react";
import { ModalContainer, ModalContentBody, ModalHeader } from ".";
import { OverlayStyle } from "../../utils/styles"
import { CreateConversationForm } from "../forms/CreateConversationForm";
import  { MdClose } from 'REACT-ICONS/MD'

type Props = {
   setShowModal:  React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateConversationModal: FC<Props>= ( { setShowModal }) => {
    // to close a model u simply create a ref when u click outside the modal it will close.
    const ref = createRef<HTMLDivElement>();

    useEffect(()=> {
       // adding an event listener
       const handlekeydown = (e: KeyboardEvent) =>
          e.key === 'Escape' && setShowModal(false);
         window.addEventListener('keydown', handlekeydown);
        // the cleanup function when the component  unmounts 
        return () => window.removeEventListener('keydown', handlekeydown)
    }, []);


    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const { current } = ref;
        if (current === e.target) {
            console.log('Close Modal');
            setShowModal(false);
        }
    }
    
    return (
    <OverlayStyle ref={ref} onClick = {handleOverlayClick}>
        <ModalContainer>
            <ModalHeader>
                <h1>Create a Conversation</h1>
                <MdClose size={32} onClick={() => setShowModal(false)}/>
            </ModalHeader>
            <ModalContentBody>
                <CreateConversationForm />
            </ModalContentBody>
         </ModalContainer>
    </OverlayStyle>
    );
}