import useLogin from "./hooks/useLogin"

const Login = () => {
  
  const { user, setUser, handleLogin } = useLogin()

  return (
    <div className='min-h-screen bg-gray-100 flex items-center'>
      <div className='container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300'>
        <form 
          onSubmit={handleLogin}
          className='py-12 p-10 bg-white rounded-xl'>
          <h1 className='text-2xl font-semibold mb-4 text-center flex items-center flex-col gap-2 justify-center text-blue-950'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              fill='currentColor'
              className='bi bi-person-fill-lock'
              viewBox='0 0 16 16'
            >
              <path d='M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z' />
            </svg>
            Iniciar Sesión
          </h1>
          <div className='mb-6'>
            <label
              className='mr-4 text-gray-700 font-bold inline-block mb-2'
              htmlFor='name'
            >
              Usuario
            </label>
            <input
              type='text'
              name='email'
              className='border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded'
              placeholder='Ingresar usuario'
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className=''>
            <label
              className='mr-4 text-gray-700 font-bold inline-block mb-2'
              htmlFor='name'
            >
              Contraseña
            </label>
            <input
              type='password'
              name='password'
              className='border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded'
              placeholder='**********'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <input
            type='submit'
            name='submit'
            className='w-full mt-6 cursor-pointer text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300'
          />
        </form>
      </div>
    </div>
  )
}

export default Login
