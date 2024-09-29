'use client'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Category,Product as IProduct } from '@prisma/client'
import React, { useState } from 'react'
import { Product } from '.'

type Props = {
    products:IProduct[]
}


const Sort = ({products}:Props) => {

    const[sorting,setSorting] = useState(' ')
    const[sortedProducts,setSortedProducts] = useState(products)

    const handleChange = (e:SelectChangeEvent) =>{
        const selectvalue = e.target.value
        setSorting(selectvalue)
        const tempArray = products
        if(selectvalue === 'low'){
            tempArray.sort((a,b)=>a.price-b.price)
        }
        else{
            tempArray.sort((a,b)=>b.price-a.price)
        }
        setSortedProducts(tempArray)
    }
  return (
    <>
    <Select value={sorting} onChange={handleChange} className='w-[200px] ml-10'>
        <MenuItem value = ' ' disabled> <em>Select Sorting Type</em> </MenuItem>
        <MenuItem value = 'low'>Price Low to High</MenuItem>
        <MenuItem value = 'high'>Price High to Low</MenuItem>
    </Select>
    <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-8 mb-5 mt-5"
    >
{sortedProducts.map((product) => (
        <Product  key={product.id} product={product as IProduct & {category: Category}} />
      ))}
    </section>
    
    </>
  )
}

export default Sort