/* eslint-disable react/prop-types */
import { TABLES } from "@routes/routes"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AdminGuard = ({ roleProps }) => {

  const userState = useSelector(state => state.auth)

  return  userState.role === roleProps ? <Outlet/> : <Navigate replace to={TABLES.TABLES}/>
}

export default AdminGuard
