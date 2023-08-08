/* eslint-disable react-hooks/rules-of-hooks */
// import { useMutation } from "@tanstack/react-query"
import axios, { AxiosRequestConfig, } from "axios";
import { useContext } from 'react'
import { CreateUserParams, User, UserCredentialsParams } from "../../../utils/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





// context coming into play




// acts as our base url
const API_URL = process.env.REACT_APP_API_URL;

//send the cookies from the browser to the server
const config: AxiosRequestConfig = { withCredentials: true};

// registering the user

export const useSignUpMutation = () => {
    return useMutation((formPayload:CreateUserParams) => {
        return axios.post(`${API_URL}/auth/register`, formPayload, config);
    })      
}




// loggin the user

export const useLoginMutation = () => {
    return useMutation((body:UserCredentialsParams) => {
        return axios.post(`${API_URL}/auth/login`, body, config);
    })
}


// getting user status

// export const useAuthUser = () => {
//     return useQuery(['User'], () => {
//         return axios.get<User>(`${API_URL}/auth/status`, config);
//     });
// }

// getting user status
export const useAuthUser = () => {
    return useQuery({
        queryKey: ["User"],
        queryFn: async () => {
            const  data  = await  axios.get<User>(`${API_URL}/auth/status`, config);
            return data 
        },
        onSuccess(data) {
           toast.success("Authentication Success!");
        },
        onError(err) {
           toast.error("Authentication error ocurred!!"); 
        }
    })
}