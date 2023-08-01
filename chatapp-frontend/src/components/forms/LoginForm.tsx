import React from 'react';
import { InputField,InputContainer, InputLabel, Button} from '../../utils/styles';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm()

    console.log(errors);
    const onSubmit =(data: any) =>{
        console.log(data);
        
    }

    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault()
    // }
  return (
     <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type='email' id='email' {...register('email', { required: true})}/>
        </InputContainer>
        <InputContainer className={styles.loginFormPassword}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type='password' id='password' {...register('password', {required: true})}/>
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