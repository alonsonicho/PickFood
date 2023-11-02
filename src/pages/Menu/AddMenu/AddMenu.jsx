import { Input, Select, Switch, Textarea } from "@chakra-ui/react"

const AddMenu = () => {
  return (
    <div className="container grid grild-cols-1 lg:grid-cols-2 gap-10">
      <div className="container border-gray-200 border-2 flex flex-col gap-5 p-5">
        <h6 className="text-xl font-semibold text-center p-5 border-b-2 border-gray-200">INFORMACION DEL PRODUCTO</h6>
        <div className="grid gap-2">
          <label htmlFor="" className="">Nombre del producto</label>
          <Input placeholder='Producto' />
        </div>
        <div className="grid gap-2">
          <label htmlFor="">Seleccionar categoria</label>
          <Select placeholder='Seleccionar'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="">Cantidad</label>
            <Input placeholder='Ingresar cantidad' />
          </div>
          <div className="grid gap-2">
            <label htmlFor="">Precio</label>
            <Input placeholder='Ingresar precio' />
          </div>
        </div>
        <div className="grid gap-2">
          <label htmlFor="">Descripción</label>
          <Textarea placeholder='Ingresar descripción' />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Imagen del Producto</label>
          <input 
            type="file" 
            className="container file:bg-slate-300 file:px-6 file:py-3 file:border-none file:rounded-md border-2 border-gray-300 file:mr-4 file:m-3 rounded-md"
            />
        </div>
      </div>
      <div className="container border-gray-200 border-2 flex flex-col gap-5 p-5">
        <h6 className="text-xl font-semibold text-center p-5 border-b-2 border-gray-200">PRODUCTO</h6>
        <div>
          <img src="https://www.elolivar.com.pe/wp-content/uploads/2021/08/lomo-saltado.png" alt="" className="w-full h-auto lg:h-96"/>
        </div>
        <div className="flex justify-between p-4 border-b-2 border-gray-200">
          <label htmlFor="">Estado</label>
          <Switch colorScheme='teal' size='lg' />
        </div>
        <div>
        <button
            type='button'
            className='w-full bg-[#282c30] hover:bg-[#3a4046] text-white text-xl font-semibold py-2 rounded-md transition-colors'
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddMenu
