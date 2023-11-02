import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listenToOrdersTable, listenToTables } from "@src/services"

const useTablesAndOrders = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(listenToTables());
        dispatch(listenToOrdersTable());
    }, [dispatch])

    const dataTables = useSelector((state) => state.tables);
    const dataOrdes = useSelector((state) => state.ordersTables)

    return {
        dataTables,
        dataOrdes
    }
}

export default useTablesAndOrders
