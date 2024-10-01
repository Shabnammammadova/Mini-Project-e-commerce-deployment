import React from 'react'
import prisma from '@/lib/db';
// import { Product } from '.';
// import { Product as IProduct } from '@prisma/client';
import { CreateProductDialog } from '@/app/categories/create-product';
import { Role } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';
import Sort from './sort';


const Page = async() => {
  const { userId } = auth();
  if (!userId) return null;
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
  });

  const isAdmin = user?.role === Role.ADMIN;
const productsPromise= await prisma.product.findMany({
  include:{
    category:{
     select:{
      name:true
     }
    }
  }
})

const [products,categories]=await Promise.all([productsPromise,prisma.category.findMany()])
console.log(products);


  return (
    <>
    {isAdmin && (
<CreateProductDialog categories={categories} />
    )}
     <Sort products={products} categories={categories}/>

   
    </>
  )
}

export default Page


