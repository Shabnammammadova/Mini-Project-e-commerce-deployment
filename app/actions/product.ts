"use server"

import prisma from "@/lib/db";
import { Prisma, Product } from "@prisma/client";
import { revalidatePath } from "next/cache";


type Props = Omit<Product,'id' | 'createdAt' | 'updatedAt' | 'inStock'>
export async function createProduct(data:Props){
 const product = await prisma.product.create({
    data,
 });
 revalidatePath('/filter')
 return product
}

export async function getProduct(id:string){
   const product = await prisma.product.findUnique({
      include:{
         category:{
            select:{
               id:true
            }
         }
      },
      where:{
         id
      }
   })
   return product
}

//Update
export async function updateProduct(data: Prisma.ProductUpdateInput & { id: string; categoryId?:string}) {
   const { id, name, price,imageUrl,categoryId } = data;   
   const product = await prisma.product.update({
       where: {
           id
       },
       data: {
           name,
           price:Number(price),
           imageUrl,
           category:{ connect: { id: categoryId as string } }
       }
   });
   revalidatePath("/filter");
   return product;
}



//Delete
export async function deleteProduct(id:string){
   const product = await prisma.product.delete({
    where:{
       id
    }
   });
   revalidatePath('/filter');
   return product;
}


export async function getCategories(){
   const categories = await prisma.category.findMany()
   return categories;
}

