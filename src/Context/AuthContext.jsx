import React, { createContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import axios from 'axios'

const Context = createContext()

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false)

  async function SingIn(email, password) {
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
      // console.log(response.data.token)

      const { token } = response.data

      console.log(token)

      localStorage.setItem('token', JSON.stringify(token))

      setAuthenticated(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Context.Provider value={{ authenticated, SingIn }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
