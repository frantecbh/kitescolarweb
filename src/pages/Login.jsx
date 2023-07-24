import React, { useContext, useState } from 'react'
import { Context } from '../Context/AuthContext'

import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { authenticated, SingIn } = useContext(Context)

  function handleLogin() {
    SingIn(email, password)
  }

  if (authenticated) {
    return navigate('/kit')
  }

  return (
    <>
      <div className="bg-zinc-50 h-screen mx-auto w-full  flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-center text-sky-900 font-semibold">
                Kit Escolar
              </h2>
            </div>
          </div>
          <div>
            <div className="mt-4 space-y-4">
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-gray-600"
                  name="email"
                >
                  email
                </label>
                <input
                  className="block w-full px-6 py-3 text-sky-900 bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Informe seu email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-gray-600"
                  name="password"
                >
                  Senha
                </label>
                <input
                  className="block w-full px-6 py-3 text-sky-900 bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Informe sua senha"
                  autoComplete="off"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white transition-all bg-sky-900 border-2 border-sky-900 rounded-full nline-flex hover:bg-transparent hover:border-sky-900  hover:text-sky-900  focus:outline-none focus-visible:outline-sky-900 text-sm focus-visible:ring-sky-900 duration-300"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
