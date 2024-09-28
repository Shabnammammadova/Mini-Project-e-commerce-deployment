"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { getCategories, getProduct, updateProduct } from "../actions/product";
import { toast } from "sonner";

const EditProduct = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [prodCategory,setProdCategory] = useState([])
  const [products, setProducts] = useState({
    id: id!,
    name: "",
    price: "",
    imageUrl: "",
    category: "",
    categoryId:""
  });

  const getProductById = async () => {
    const product = await getProduct(id!);
    setProducts(product);
  };

  const getCategory = async () => {
    const category = await getCategories();
    setProdCategory(category)
  };


  useEffect(() => {
    getCategory();
    getProductById();
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = await updateProduct(products);
    toast.success("Product updated successfully");
    console.log(updatedProduct);
    
  };

  console.log(products);
  

  return (
    <div className="bg-white border-4 rounded-lg shadow relative text-center m-40 font-serif text-3xl">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold m-auto">Edit product</h3>
      </div>
      <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                value={products.name}
                onChange={onChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Price
              </label>
              <Input
                type="number"
                name="price"
                id="price"
                value={products.price}
                onChange={onChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Category
              </label>
              <select
                name="categoryId"
                id="category"
                value={products.categoryId}  
                onChange={onChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              >
                {
                  prodCategory.map((category)=>(
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
                
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Image
              </label>
              <Input
                type="text"
                name="imageUrl"
                id="imageUrl"
                value={products.imageUrl}
                onChange={onChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                required
              />
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
