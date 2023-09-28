import axios from 'axios';
import { GET_EMPLOYEE, GET_EMPLOYEES, GET_USER, GET_USERS } from './types';


export function getUsers(user){

    return async (dispatch) => {
        try{
            if(user){
                const response = await axios.get(`http://localhost:3001/user?usuario=${user}`)
                const data = response.data
                dispatch({type: GET_USER, payload: data})
            }else{
                const response = await axios.get('http://localhost:3001/user')
                const data = response.data
                // console.log('data en la action user -> ',data)
                dispatch({type: GET_USERS, payload: data})
            }
            
        }catch(error){
            console.log(error);
        }
    }
}

export function getEmployees (cedula) {

    return async (dispatch) => {
        try{
            if(cedula){
                const response = await axios.get(`http://localhost:3001/employee?cedula=${cedula}`)
                const data = response.data
                dispatch({type: GET_EMPLOYEE, payload: data})
            }else{
                const response = await axios.get('http://localhost:3001/employee')
                const data = response.data
                // console.log('data en la action employees -> ',data)
                dispatch({type: GET_EMPLOYEES, payload: data})
            }
            
        }catch(error){
            console.log(error);
        }
    }
}