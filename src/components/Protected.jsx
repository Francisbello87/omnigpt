import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Protected = ({children}) => {
    const {user} = UserAuth()
    // const [ users] = useAuthState(auth);

    if(!user) {
        return(<Navigate to='/' />)
    }
  return (
    children
  )
}

export default Protected