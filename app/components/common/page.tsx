import React from 'react'
import prisma from '@/lib/db';
import { Product } from '.';
import { Product as IProduct } from '@prisma/client';
import { CreateProductDialog } from '@/app/categories/create-product';

const Page = async() => {
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
     <CreateProductDialog categories={categories} />
      <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-8 mb-5 mt-5"
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
   
    </>
  )
}

export default Page


