import React, { ReactNode } from 'react'

const Authlayout = ({children} : {children: ReactNode}) => {
  return (
    <div>
      <div className='auth-layout'>{children}</div>
    </div>
  )
}

export default Authlayout
