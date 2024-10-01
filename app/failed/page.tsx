import Image from 'next/image'
import React from 'react'

const Failed = () => {
  return (
    <div className='max-h-screen mx-auto flex flex-col items-center justify-center gap-3 m-48 font-serif text-3xl text-orange-300 font-extrabold'>
    <Image src="https://lifestyle-eta.vercel.app/images/Frame.svg" alt='basket' width={150} height={150}/>
    Your purchase was not completed successfully.</div>
  )
}

export default Failed