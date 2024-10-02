"use client";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Category, Product as IProduct } from "@prisma/client";
import React, { useState } from "react";
import { Product } from ".";
import { Button } from "@/components/ui/button";

type Props = {
  products: IProduct[];
  categories:Category[]
};

const Sort = ({ products,categories }: Props) => {
  const [sorting, setSorting] = useState(" ");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [searhproduct, setSearchproduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [count,setCount] = useState(3)
  const handleChange = (e: SelectChangeEvent) => {
    const selectvalue = e.target.value;
    setSorting(selectvalue);
    const tempArray = products;
    if (selectvalue === "low") {
      tempArray.sort((a, b) => a.price - b.price);
    } else {
      tempArray.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(tempArray);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchproduct(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setSelectedCategory(e.target.value)
  }


  const filteredProducts = sortedProducts.filter(product => {
    const categoryfiltered = product.name.toLowerCase().includes(searhproduct)
    const category = selectedCategory ? product.categoryId === selectedCategory : true
    return categoryfiltered && category
  })

  const loadMore = () =>{
    setCount(prevCount=>prevCount+3)
  }
  return (
    <>
  <div className=" ml-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
  <Select
        value={sorting}
        onChange={handleChange}
        className=" max-w-[200px] flex  mb-4"
      >
        <MenuItem value=" " disabled>
          {" "}
          <em>Select Sorting Type</em>{" "}
        </MenuItem>
        <MenuItem value="low">Price Low to High</MenuItem>
        <MenuItem value="high">Price High to Low</MenuItem>
      </Select>
      <Select
        value={selectedCategory || ''}
        onChange={handleCategoryChange}
        displayEmpty
        className="max-w-[200px] flex  mb-4"
      >
        <MenuItem value=''>All Categories</MenuItem>
        {categories.map(category => (
          <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
        ))}
      </Select>
  
  </div>
  <div className="flex px-4 py-3 rounded-md border-2 border-gray-200 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="fill-gray-600 mr-3 rotate-90"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input
          value={searhproduct}
          onChange={handleSearch}
          type="email"
          placeholder="Search Something..."
          className="w-full outline-none bg-transparent text-gray-600 text-sm"
        />
      </div>
      <section
        id="Projects"
        className="w-full mx-auto grid grid-cols-1 gap-2 xl:grid-cols-3 lg:grid-cols-2 lg:gap-5 md:grid-cols-1 justify-items-center justify-center mt-10 mb-5 uppercase gap-y-20 gap-x-24 xl:gap-2"
      >
        {filteredProducts.slice(0,count).map((product) => (
          <Product
            key={product.id}
            product={product as IProduct & { category: Category }}
          />
        ))}
      </section>
     {count<filteredProducts.length &&(
       <Button onClick={loadMore} variant="outline" className="flex items-center mx-auto mb-5 bg-[#9a8672]">Load more</Button>
     )}
    </>
  );
};

export default Sort;
