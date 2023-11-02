import { ROOT } from "@routes/routes";
import { auth } from "@src/firebase/database";
import { clearAuth } from "@store/states/auth";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

const useLogout = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const dispatch = useDispatch()

  const handleLogout = () => {
    Swal.fire({
      title: "¿Está seguro que desea cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("", "La sesión ha finalizado correctamente. ", "success");
        signOut(auth);
        cookies.remove("token");
        dispatch(clearAuth());
        navigate(ROOT.LOGIN);
      }
    });
  };

  return {
    handleLogout,
  };
};

export default useLogout;
