import React from 'react';
import { InputField,InputContainer, InputLabel, Button} from '../../utils/styles';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
    }
  return (
     <form className={styles.form} onSubmit={onSubmit}>
         <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type='email' id='email'/>
        </InputContainer>
        <InputContainer className={styles.loginFormPassword}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type='password' id='password'/>
        </InputContainer>
        <Button className={styles.button}>Login</Button>
        <div className={styles.footerText}>
            <span>Do not have an Account?</span>
            <Link to='/register' style={{marginLeft:'10px'}}>SignUp</Link>
        </div>
     </form>
  )
}

export default LoginForm