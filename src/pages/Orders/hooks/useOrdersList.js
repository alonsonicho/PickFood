import { listenToOrders } from "@src/services";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

const useOrdersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(listenToOrders());
  }, [dispatch])

  const dataOrdersList = useSelector((state) => state.orders);

  return {
    dataOrdersList
  }
}

export default useOrdersList
