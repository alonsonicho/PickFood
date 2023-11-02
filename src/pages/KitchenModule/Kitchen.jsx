import useKitchen from "./hooks/useKitchen"
import CardOrder from "./components/CardOrder"

const Kitchen = () => {

  const { dataKitchenOrders } = useKitchen()

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
      {dataKitchenOrders.map((order, index) => (
        <CardOrder
          key={index}
          order={order}
        />
      ))}
    </div>
  )
}

export default Kitchen
