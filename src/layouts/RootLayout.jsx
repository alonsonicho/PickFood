import Sidebar from "./Sidebar/index";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 mx-auto  flex-grow overflow-y-auto max-h-screen p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
