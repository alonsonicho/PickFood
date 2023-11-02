import { Link } from "react-router-dom"
import { TABLES } from "@routes/routes"

const PageNotFound = () => {
  return (
    <div className="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">¡Lo sentimos!</h2>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">La página a la que intentas acceder no existe.</h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={TABLES.TABLES} className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">
              Ir a la pagina principal <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default PageNotFound

