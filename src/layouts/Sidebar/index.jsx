// import SubMenu from "./components/SubMenu";
import { motion } from "framer-motion";
// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { GiKnifeFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";
// import { subMenusList } from "./routes/subMenuList";
import { KITCHEN, ORDERS, ROLE, TABLES } from "@routes/routes";
// Firebase Auth
import { useSelector } from "react-redux";
import { useLogout, useSidebar } from "./hooks";

const Sidebar = () => {
  const { sidebarRef, Nav_animation, isTabletMid, setOpen, open } =
    useSidebar();
  const { handleLogout } = useLogout();
  const dataUser = useSelector((state) => state.auth);

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-white border-r-2 text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen"
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          />
          <span className="text-xl whitespace-pre">PickFood</span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <div className="flex-1">
              {dataUser.role === ROLE.ADMIN && (
                <>
                  <li>
                    <NavLink to={TABLES.TABLES} className="link">
                      <HiOutlineDatabase size={23} className="min-w-max" />
                      Mesas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={ORDERS.ORDERS} className="link">
                      <BsPerson size={23} className="min-w-max" />
                      Ordenes
                    </NavLink>
                  </li>
                </>
              )}
              {dataUser.role == ROLE.COCINA && (
                <li>
                  <NavLink to={KITCHEN.KITCHEN} className="link">
                    <GiKnifeFork size={23} className="min-w-max" />
                    Cocina
                  </NavLink>
                </li>
              )}

              {/* {dataUser.role === ROLE.ADMIN && (open || isTabletMid) && (
                <div className="border-y py-5 border-slate-300 ">
                  <small className="pl-3 text-slate-500 inline-block mb-2">
                    Categorias
                  </small>
                  {subMenusList?.map((menu) => (
                    <div key={menu.name} className="flex flex-col gap-1">
                      <SubMenu data={menu} />
                    </div>
                  ))}
                </div>
              )} */}
            </div>
            <li>
              <button
                className="p-2.5 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
                onClick={handleLogout}
              >
                <ImExit size={23} className="min-w-max" />
                Salir
              </button>
            </li>
          </ul>
          <div className="border-t flex p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${open ? "w-52 ml-3" : "w-0"
                }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{dataUser.role}</h4>
                <span className="text-xs text-gray-600">{dataUser.email}</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                x: -10,
                y: -200,
                rotate: 0,
              }
              : {
                x: -10,
                y: -200,
                rotate: 180,
              }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2  cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
