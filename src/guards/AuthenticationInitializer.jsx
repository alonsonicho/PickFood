import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@src/firebase/database";
import { useDispatch } from "react-redux";
import { clearAuth, setAuth } from "@src/store/states/auth";
import { TABLES } from "@routes/routes";
import { getRole } from "@src/services/userRole";
import Cookies from "universal-cookie";

const AuthenticationInitializer = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, async (userFirebase) => {
    if (userFirebase) {
      const userRole = await getRole(userFirebase.uid);
      cookies.set("token", userFirebase.accessToken, { path: TABLES.TABLES });
      dispatch(
        setAuth({
          email: userFirebase.email,
          token: userFirebase.accessToken,
          role: userRole,
        })
      );
    } else {
      cookies.remove("token");
      dispatch(clearAuth());
    }
  });

  return null;
};

export default AuthenticationInitializer;
