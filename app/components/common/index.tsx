"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Category, Product as IProduct} from '@prisma/client'
import { Pencil, Trash } from 'lucide-react'
import { deleteProduct } from '@/app/actions/product'
import { toast } from 'sonner'
// import Sort from './sort'



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

<div className="w-full bg-white shadow-md rounded-xl duration-500">
  <div className="bg-[#F3E6DA] h-[300px] flex items-center justify-center rounded-t-xl relative">
    <Link key={product.id} href={`/filter/product/${product.id}`}>
      <Image src={product.imageUrl} alt="img" width={200} height={100} className="text-center flex items-center justify-center" />
    </Link>
    <p className="text-lg font-extrabold text-black truncate block capitalize absolute top-0 left-0 mx-2">
      {product.category.name}
    </p>
    <div className="px-4 py-1 flex flex-col items-center gap-2 rounded-b-xl absolute top-10 right-0">
    <Button className='bg-transparent text-black border-transparent hover:bg-green-600'><Link href={`/edit?id=${product.id}&name=${product.name}&price=${product.price}&imageUrl=${product.imageUrl}`}><Pencil /></Link></Button>
    <Button className='bg-transparent text-black border-transparent hover:bg-red-600' onClick={()=>{handleDelete(product.id)}}><Trash/></Button>
    </div>
  </div>
  <div className="px-4 py-2 w-full flex items-center justify-between rounded-b-xl bg-[#F3E6DA]">
    <p className="text-lg text-black truncate block capitalize">{product.name}</p>
    <p className="text-lg text-black cursor-auto">${product.price}</p>
  </div>
</div>

  )
}

