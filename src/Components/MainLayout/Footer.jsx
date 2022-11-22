import React from 'react'

export default function Footer() {
  const date = new Date()
  const Fullyear = date.getFullYear()


  return (
    <div>
      <p className='text-center p-4 fs-5'>Copyright &copy; {Fullyear} Ansh kakkar</p>
    </div>
  )
}

