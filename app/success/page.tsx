import Image from 'next/image'
import React from 'react'

const Success = () => {
  return (
    <div className='max-h-screen mx-auto flex flex-col items-center justify-center gap-3 m-48 font-serif text-3xl text-green-500 font-extrabold'>
        <Image src="https://static.vecteezy.com/system/resources/previews/024/622/372/original/online-shopping-payment-successful-financial-business-with-credit-card-free-png.png" alt='basket' width={150} height={150}/>
        Your shopping has been successfully completed.</div>
  )
}

export default Success