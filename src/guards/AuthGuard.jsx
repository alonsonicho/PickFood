import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { ROOT } from "@routes/routes"
import Cookies from "universal-cookie"

const AuthGuard = () => {

    const cookies = new Cookies();
    const token = cookies.get('token')
    const userAuth = useSelector(state => state.auth.token)


    return token || userAuth ? <Outlet /> : <Navigate replace to={ROOT.LOGIN}/>
}

export default AuthGuard;
