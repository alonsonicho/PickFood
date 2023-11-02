import { Route } from "react-router-dom";
import { RootLayout } from "./layouts";
import { AuthGuard, AuthenticationInitializer, RoleGuard, AdminGuard } from "./guards";
import { ROOT, MENUS, ORDERS, TABLES, KITCHEN, ROLE } from "@routes/routes";
import { AddMenu, Login, MenuList, OrdersList, Tables, Kitchen } from "./pages";
import RoutesWhitNotFound from "@helpers/routes-whit-not-found";

function App() {
  return (
    <>
      <AuthenticationInitializer />
      <RoutesWhitNotFound>
        <Route path={ROOT.LOGIN} element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route element={<RootLayout />}>
            <Route element={<AdminGuard roleProps={ROLE.ADMIN}/>}>
              <Route path={TABLES.TABLES} element={<Tables />} />
              <Route path={ORDERS.ORDERS} element={<OrdersList />} />
              <Route path={MENUS.MENU}>
                <Route path={MENUS.CATALOGO} element={<MenuList />} />
                <Route path={MENUS.AGREGAR_PRODUCTO} element={<AddMenu />} />
              </Route>
            </Route>
            <Route element={<RoleGuard roleProps={ROLE.COCINA}/>}>
              <Route path={KITCHEN.KITCHEN} element={<Kitchen />} />
            </Route>
          </Route>
        </Route>
      </RoutesWhitNotFound>
    </>
  );
}

export default App;
