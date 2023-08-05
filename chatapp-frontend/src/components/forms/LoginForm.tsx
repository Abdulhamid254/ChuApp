import React from 'react';
import { InputField,InputContainer, InputLabel, Button} from '../../utils/styles';
import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserCredentialsParams } from '../../utils/types';
import { useLoginMutation } from '../../hooks/apis/auth/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {

    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm<UserCredentialsParams>()

   const { mutate } = useLoginMutation()

    const onSubmit = async (data: UserCredentialsParams) =>{
       await mutate(data, {
        onSuccess: () => {
            console.log("User",data);
             toast.success("Login Successful!");
             navigate('/conversations');
             
             
        },
        onError: (response) => {
            toast.error("Error occurred while login");
            console.log(response);
            
        }
       })
        
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