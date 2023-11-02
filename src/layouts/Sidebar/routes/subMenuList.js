import { RiBuilding3Line } from "react-icons/ri";
import { MENUS } from "@routes/routes";

export const subMenusList = [
    {
      name: "Menus",
      icon: RiBuilding3Line,
      path: MENUS.MENU,
      menus: [
        {
          title: "Catálogo",
          sub_path: MENUS.CATALOGO,
        },
        {
          title: "Agregar Producto",
          sub_path: MENUS.AGREGAR_PRODUCTO
        }
      ],
    },
  ];