import React from 'react'
import { InputField,InputContainer, InputLabel, Button} from '../../utils/styles';
import styles from './index.module.scss'
import { Link,useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CreateUserParams } from '../../utils/types';
import { useSignUpMutation } from '../../hooks/apis/auth/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const RegisterForm = () => {
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault()
    // }

    const navigate = useNavigate();
    const {
        register,   
        handleSubmit,
        formState: {errors},
    } = useForm<CreateUserParams>();

    // console.log(errors);

    
   
const { mutate } = useSignUpMutation()

  const onSubmit = async (data:CreateUserParams) => {
      await mutate(data, {
        onSuccess: () => {
            console.log("User",data);
             toast.success("User Registered Successfully!");
             navigate('/login');
        },
        onError: (response) => {
            toast.error("Error occurred while registering");
            console.log(response);
            
        }
      })
  };
    
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type='email' id='email' {...register('email',{required: 'Email is required'})}/>
        </InputContainer>
        <section className={styles.nameFieldRow}>
        <InputContainer>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <InputField type='firstName' id='firstName' {...register('firstName',{required: 'First Name is required'})}/>
        </InputContainer>
        <InputContainer>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <InputField type='lastName' id='lastName'  {...register('lastName',{required: 'Last Name is required'})}/>
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