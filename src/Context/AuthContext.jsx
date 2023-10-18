import React, { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import { Loading } from '../components/Loading'
import { useNavigate } from 'react-router-dom'

const Context = createContext()

function AuthProvider({ children }) {

  const navigate = useNavigate()

  // const [authenticated, setAuthenticated] = useState(false)

  const [user, setUser] = useState(null)

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`  

      // setAuthenticated(true)
      // return navigate('/kit')   
    }

   

    //setLoading(false)

  }, [user])


  function SingOut() {

    try {

      localStorage.removeItem('token');
      sessionStorage.removeItem('userLoged');
      setUser(null)
    } catch (error) {
      // Lidar com erros, se necessário
      console.error('Erro ao limpar localStorage:', error);
    }

  }


  async function SingIn(email, password) {

    setLoading(true)
    try {
      const response = await api.post(
        '/signin',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const { token, usuario } = response.data

      localStorage.setItem('token', JSON.stringify(token))
      api.defaults.headers.Authorization = `Bearer ${token}`
   
      setUser(usuario)     

      setLoading(false)
      // setAuthenticated(true)
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) return <Loading />

  return (
    <Context.Provider value={{ SingIn, SingOut, user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
