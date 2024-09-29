"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Category, Product as IProduct} from '@prisma/client'
import { Pencil, Trash } from 'lucide-react'
import { deleteProduct } from '@/app/actions/product'
import { toast } from 'sonner'




export const Product = ({product}:{product:IProduct & {category: Category}}) => {


  function handleDelete(id:string) {
    try {
      const promise = deleteProduct(id).then(() => {
        console.log("Product deleted successfully.");
        toast.promise(promise,{
          success:"Product deleted"
        })
      });
      console.log(promise);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  }
  

  
  return (
    <div>

    <div>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500">
        <div className='bg-[#F3E6DA] h-[300px] flex items-center justify-center'>
        <Link key={product.id} href={`/filter/product/${product.id}`}>
          <Image src={product.imageUrl} alt='img' width={200} height={150} className='pt-10 pb-10 text-center flex items-center justify-center' />
          </Link>
        </div>
        <div className="px-4 py-3 w-72 flex flex-col gap-2  bg-[#F3E6DA]">
        <p className="text-lg text-black truncate block capitalize"><b>Category:</b>{product.category.name}</p>
          <p className="text-lg  text-black truncate block capitalize"><b>Name:</b>{product.name}</p>
          <p className="text-lg  text-black cursor-auto "><b>Price:</b>${product.price}</p>
        </div>
        <div className='px-4 py-1 w-72 flex items-center gap-2 bg-[#F3E6DA]'>
          <Button className='bg-black hover:bg-green-600'><Link href={`/edit?id=${product.id}&name=${product.name}&price=${product.price}&imageUrl=${product.imageUrl}`}><Pencil /></Link></Button>
          <Button className='bg-black hover:bg-red-600' onClick={()=>{handleDelete(product.id)}}><Trash/></Button>
        </div>
      </div>
    </div>
    </div>

  )
}

