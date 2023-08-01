import React from 'react'
import { InputField,InputContainer, InputLabel, Button} from '../../utils/styles';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault()
    // }
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    console.log(errors);
    const onSubmit =(data: any) =>{
        console.log(data);
        
    }
    
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type='email' id='email' {...register('Email',{required: 'Email is required'})}/>
        </InputContainer>
        <section className={styles.nameFieldRow}>
        <InputContainer>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <InputField type='email' id='firstName' {...register('First Name',{required: 'First Name is required'})}/>
        </InputContainer>
        <InputContainer>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <InputField type='email' id='lastName'  {...register('Last Name',{required: 'Last Name is required'})}/>
        </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type='password' id='password' {...register('password',{required: 'Password is required'})}/>
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