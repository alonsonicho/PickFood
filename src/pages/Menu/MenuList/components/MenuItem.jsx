/* eslint-disable react/prop-types */

const MenuItem = ({ menu }) => {

  const { name, quantity, image, description, price } = menu;

  return (
    <div className='border-2 border-gray-300 rounded-md sm: max-w-96'>
      <div className='rounded-md'>
        <img
          src={image}
          alt='card_img'
          className='w-full h-52 object-cover rounded-t-md'
        />
      </div>
      <div className='w-full grid mt-3 gap-3 px-4 pb-3'>
        <div className='flex items-center justify-between'>
          <h6 className='text-gray-800 font-semibold'>{name}</h6>
          <h6 className='text-gray-800 font-semibold text-lg'>S/{price}.00</h6>
        </div>
        <div className='flex justify-between'>
          <p>Cantidad: {quantity}</p>
          <span className='bg-green-500 text-white text-sm font-semibold p-1 rounded-md'>
            En stock
          </span>
        </div>
        <p className='text-gray-800 text-base h-auto min-h-[50px]'>
          {description}
        </p>
        <button
          type='button'
          className='w-full bg-[#282c30] hover:bg-[#3a4046] text-white py-2 rounded-md transition-colors'
        >
          Mas informacion
        </button>
      </div>
    </div>
  )
}

export default MenuItem
