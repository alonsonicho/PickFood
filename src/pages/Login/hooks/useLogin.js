import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setAuth } from '@store/states/auth'
import { authLogin } from '../services/serviceLogin'
import { useToast } from '@chakra-ui/react';
import { errorMessages } from '@helpers/helpers'
import { TABLES } from '@routes/routes'
import Cookies from "universal-cookie";
import { getRole } from '@src/services/userRole'

const initialState = {
    email: '',
    password: '',
}

const useLogin = () => {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const [user, setUser] = useState(initialState)

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!user.email || !user.password) {
            toast({
                title: "Inicio de sesión no completado",
                description: "Ingrese un usuario y contraseña",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return;
        }

        const userCredential = await authLogin(user.email, user.password);

        if (userCredential.user) {
            const userRole = await getRole(userCredential.user.uid);
            toast({
                title: "Inicio de sesión exitoso",
                description: "Bienvenido a la plataforma",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            dispatch(setAuth({ email: userCredential.user.email, role: userRole, token: userCredential.user.accessToken }))
            cookies.set('token', userCredential.user.accessToken, { path: '/' })
            navigate(TABLES.TABLES)
        } else {
            toast({
                title: "Inicio de sesión no completado",
                description: errorMessages(userCredential),
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return {
        user,
        setUser,
        handleLogin
    }
}

export default useLogin

