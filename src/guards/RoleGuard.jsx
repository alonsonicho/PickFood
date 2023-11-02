/* eslint-disable react/prop-types */
import { KITCHEN } from "@routes/routes"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const RoleGuard = ({ roleProps }) => {

  const userState = useSelector(state => state.auth)

  return userState.role === roleProps ? <Outlet/> : <Navigate replace to={KITCHEN.KITCHEN}/> 
}

export default RoleGuard
