import { useEffect, useState } from "react"
// import { getAllMenus } from "../services/service"

const useMenus = () => {

  const [dataMenus, setDataMenus] = useState([])

  useEffect(() => {
    async function fetchDataMenu () {
      try {
        // const menus = await getAllMenus()
        fetch('/src/data/data.json')
          .then(response => response.json())
          .then(data => setDataMenus(data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchDataMenu()
  }, [])

  return {
    dataMenus
  }
}

export default useMenus
