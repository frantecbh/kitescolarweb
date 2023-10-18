import React from 'react'

import loading from '../assets/spinner.svg'

export const Loading = () => {
  return (
    <div className="justify-center h-screen flex items-center  flex-1">
      <img src={loading} className="h-16" alt="" />


      
    </div>
  )
}
