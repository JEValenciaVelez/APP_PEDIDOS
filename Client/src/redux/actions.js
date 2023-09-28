import axios from 'axios';
import { GET_EMPLOYEE, GET_EMPLOYEES, GET_USER, GET_USERS, GET_USER_LOGIN } from './types';


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

export function getLoginUser (user , password) {

    return async (dispatch) => {
        console.log(`en la action : user: ${user}, password: ${password}`)
        try{
            if(user && password){

                const params = { // Utiliza "params"  para los parámetros GET
                    usuario: user,
                    contraseña: password
                }

                console.log(`params en la action -> ${params}`)

                const response = await axios.get('http://localhost:3001/login', { params })
                const data = response.data
                console.log(`data en la action -> ${data}`)
                dispatch({type: GET_USER_LOGIN, payload: data})

            }else{
                
                const data = 'Se debe proveer usuario y contraseña'
                // console.log('data en la action login -> ',data)
                dispatch({type: GET_USER_LOGIN, payload: data})
            }
            
        }catch(error){
            console.log(error);
        }
    }
}