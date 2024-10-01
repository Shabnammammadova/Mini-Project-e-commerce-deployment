import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import React, { PropsWithChildren } from 'react'
import { LoaderCircle } from 'lucide-react';
const AuthLayout = ({children}:PropsWithChildren) => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center flex-col mt-14 mb-16'>
        <h1 className='text-orange-600 font-bold font-serif text-3xl'>Welcome!</h1>
        <p className='mb-8 text-black'>Please login to your account</p>
        <ClerkLoaded>
        {children}
        </ClerkLoaded>
        <ClerkLoading>
        <LoaderCircle size={30} className='animate-spin'/>
        </ClerkLoading>
    </div>
  )
}

export default AuthLayout