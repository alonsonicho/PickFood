import { useEffect } from 'react'
import { listenToKitchenOrders } from '@src/services'
import { useDispatch, useSelector } from 'react-redux';

const useKitchen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listenToKitchenOrders());
  }, [dispatch])

  const dataKitchenOrders = useSelector((state) => state.kitchen);

  return {
    dataKitchenOrders
  }
}

export default useKitchen



