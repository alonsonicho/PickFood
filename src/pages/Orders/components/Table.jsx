const Table = () => {
  return (
    <>
      <div className="px-4 mx-auto max-w-screen-xl  lg:px-6">
        <div className="w-full overflow-x-auto bg-gray-100 mt-10">
          <div className="overflow-hidden sm:min-w-full text-center">
            <div className="grid grid-cols-12 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-4 md:gap-x-10 dark:border-gray-700">
              <div className="text-gray-500 dark:text-gray-400 col-span-3"></div>
              <div className="col-span-3 flex items-center justify-center">
                <a
                  href="#"
                  className="flex items-center justify-center md:gap-2 text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-3 text-center dark:focus:ring-blue-900"
                >
                  <span className=" hidden md:block">Download Free</span>
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 19"
                  >
                    <path
                      stroke="currentColor"
                      d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="col-span-3 flex items-center justify-center">
                <a
                  href="#"
                  className="flex items-center justify-center md:gap-2 text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-3 text-center dark:focus:ring-blue-900"
                >
                  <span className=" hidden md:block">Purchase Now</span>
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                  </svg>
                </a>
              </div>
              <div className="col-span-3 flex items-center justify-center">
                <a
                  href="#"
                  className="flex items-center justify-center md:gap-2 text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-3 text-center dark:focus:ring-blue-900"
                >
                  <span className=" hidden md:block">Purchase Now</span>
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
