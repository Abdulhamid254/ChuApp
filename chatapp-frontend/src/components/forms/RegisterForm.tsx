import React from 'react'
import { InputField,InputContainer, InputLabel, Button} from '../../utils/styles';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
    }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
        <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type='email' id='email'/>
        </InputContainer>
        <section className={styles.nameFieldRow}>
        <InputContainer>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <InputField type='email' id='firstName'/>
        </InputContainer>
        <InputContainer>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <InputField type='email' id='lastName'/>
        </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type='password' id='password'/>
        </InputContainer>
        <Button className={styles.button}>Create My Account</Button>
        <div className={styles.footerText}>
            <span>Already have an Account?</span>
            <Link to='/login' style={{marginLeft:'10px'}}>Login</Link>
        </div>
    </form>
  )
}

export default RegisterForm