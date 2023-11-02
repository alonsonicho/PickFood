const AddProduct = () => {
  return (
      <div className="flex flex-col space-y-8 md:pl-10 md:pr-24">
        <div className="flex justify-between items-center mt-12">
          <div>
            <h3 className="text-4xl font-semibold mb-2">
              Añadir <span className="text-green-500"> Plato</span>
            </h3>
            <div className="border-b-2 border-black mt-4 w-8"></div>
          </div>
        </div>

        <div className="">
          <form className="space-y-6">
            <div className="">
              <div className="border w-full">
                <label
                  htmlFor="email"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Product Name
                </label>
                <input
                  id="text"
                  name="productName"
                  type="text"
                  placeholder="eg. potato/apple"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="border">
                <label
                  htmlFor="productCategory"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  category
                </label>
                <input
                  id="text"
                  name="productCategory"
                  type="text"
                  placeholder="eg. fruit/vegetable"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 placeholder:text-sm shadow-sm sm:text-sm"
                />
              </div>
              <div className="border">
                <label
                  htmlFor=""
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                  Price (in &#8377;)
                </label>
                <input
                  id="text"
                  name="productPrice"
                  placeholder="eg. &#8377; 22"
                  type="text"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="border">
                <p
                  htmlFor="image"
                  className="px-4 pt-4 block text-xs font-medium text-gray-400"
                >
                    P
                </p>
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="block w-full appearance-none outline-none px-4 py-4 placeholder-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 flex w-full justify-center border-transparent bg-green-500 py-4 px-4 text-sm font-medium text-white shadow-sm "
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddProduct
