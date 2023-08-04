// import { useMutation } from "@tanstack/react-query"
import axios, { AxiosRequestConfig, } from "axios";
import { CreateUserParams } from "../../../utils/types";





// acts as our base url
const API_URL = process.env.REACT_APP_API_URL;

//send the cookies from the browser to the server
const config: AxiosRequestConfig = { withCredentials: true};



//function for registering the user
// eslint-disable-next-line react-hooks/rules-of-hooks
// export const registerUser = async (userInfo: CreateUserParams) => {
//   const response = await axios.post(`${API_URL}/auth/register`, userInfo, config);
//   const data = await response.data;
//   return data as CreateUserParams;
// };


 
 // eslint-disable-next-line react-hooks/rules-of-hooks
//  export  const RegisterUserMutation = (userInfo: CreateUserParams) => {
//    return useMutation({
//     mutationFn: async () => {
//         const response = await axios.post(`${API_URL}/auth/register`, {
//         firsttName: userInfo.firstName, lastName: userInfo.lastName, email: userInfo.email,password: userInfo.password
//       },config);
//       const data = response.data;
//       return data;
//     }
//  })
//  } 


// export const useSignUp = () => {
//   const signUpMutation = useMutation<AxiosResponse<any>, AxiosError, CreateUserParams>(
//     (data: CreateUserParams) =>
//       axios.post(`${API_URL}/auth/register`, {
//         firsttName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         password: data.password,
//       })
//   );

//   return signUpMutation;
// };




// const { REACT_APP_API_URL } = process.env;
// const config:  AxiosRequestConfig = { withCredentials: true};

export const postRegisterUser = async( data: CreateUserParams) =>
axios.post(`${API_URL}/auth/register`, data, config)