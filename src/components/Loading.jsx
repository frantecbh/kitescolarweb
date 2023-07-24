import React from 'react'

import loading from '../assets/spinner.svg'

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-1">
      <img src={loading} className="h-16" alt="" />
    </div>
  )
}
