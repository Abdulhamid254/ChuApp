import { Button, InputContainer, InputField, InputLabel, TextField } from "../../utils/styles"
import styles from './index.module.scss';


export const  CreateConversationForm =() => {
   return (
   <form className={styles.createConversationForm}>
      <InputContainer backgroundColor="#161616">
        <InputLabel>Receipent</InputLabel>
        <InputField/>
     </InputContainer>

     <section className={styles.message}>
     <InputContainer backgroundColor="#161616">
        <InputLabel>Message (optional)</InputLabel>
        <TextField/>
     </InputContainer>
     </section>
     <Button onClick={(e) => e.preventDefault()}>Create Conversation</Button>
   </form>
   )
}