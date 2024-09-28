import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {
  return (
    <>
      <div className="container mx-auto py-20 px-4 lg:px-0">
        <h1 className="mx-auto uppercase mt-20 text-center font-serif text-4xl md:text-5xl lg:text-6xl">
          Lifestyle
          <p className="text-orange-500">Multipurpose</p> e-commerce shop <br />
          pages
        </h1>
        <p className="text-center mt-5 text-slate-400 font-serif text-sm lg:text-base">
          Discover the ultimate destination for your fashion cravings! Our Shop
          page is a curated gallery
          <br />
          showcasing the latest trends and timeless classics. Indulge in a
          seamless shopping
          <br /> experience, where style meets convenience. Find your next
          wardrobe staple here!
        </p>
        <Button className="mx-auto flex mt-5 w-48 md:w-60 h-10 font-serif">
          VIEW DEMO
        </Button>
      </div>
{/* Filter added basket page */}

      <section className="pt-16 pb-20 bg-[#F3E6DA]  mb-2 px-4 md:px-16 lg:px-24 xl:px-48">
        <div>
          <h1 className="font-serif text-center text-3xl md:text-4xl lg:text-5xl">
            Quick
            <p className="text-4xl md:text-5xl">Demo of Shop pages</p>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 xl:gap-x-48 lg:gap-x-16 lg:gap-y-11 sm:content-center my-16 max-w-[680px] md:max-w-screen-md lg:max-w-screen-xl mx-auto text-center">
          <Link href="/filter">
            <div className="flex flex-col items-center">
              <div className="border border-black rounded-lg h-72 xl:w-[524px] xl:h-[380px] md:h-72 sm:h-[250px] sm:w-[320px] overflow-hidden">
                <Image
                  src="https://lifestyle-eta.vercel.app/images/shop-sunglasses-page.png"
                  alt="Sunglasses Shop"
                  width={535}
                  height={380}
                  className="cursor-pointer z-0 object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105 w-full h-auto lg:w-[535px] lg:h-[380px] md:w-[535px] md:h-[385px] sm:w-[320px] sm:h-[250px]"
                />
              </div>
              
              <p className="text-xl md:text-2xl mt-5 font-serif">
                Sunglasses Shop
              </p>
            </div>
            </Link>
            <Link href="/filter">
            <div className="flex flex-col items-center">
              <div className="border border-black rounded-lg h-72 xl:w-[524px] xl:h-[380px] md:h-72 sm:h-[250px] sm:w-[320px] overflow-hidden">
                <Image
                  src="https://lifestyle-eta.vercel.app/images/shop-bag-page.jpg"
                  alt="Bag Shop"
                  width={535}
                  height={380}
                  className="cursor-pointer z-0 object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105 w-full h-auto lg:w-[535px] lg:h-[385px] md:w-[535px] md:h-[385px] sm:w-[320px] sm:h-[250px]"
                />
              </div>
              
              <p className="text-xl md:text-2xl mt-5 font-serif">Bag Shop</p>
            </div>
            </Link>
            <Link href="/filter">
            <div className="flex flex-col items-center">
              <div className="border border-black rounded-lg h-72 xl:w-[524px] xl:h-[380px] md:h-72 sm:h-[250px] sm:w-[320px] overflow-hidden">
                <Image
                  src="https://lifestyle-eta.vercel.app/images/shop-blazer-page.jpg"
                  alt="Blazer Shop"
                  width={535}
                  height={380}
                  className="cursor-pointer z-0 object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105 w-full h-auto lg:w-[535px] lg:h-[385px] md:w-[535px] md:h-[385px] sm:w-[320px] sm:h-[250px]"
                />
              </div>
              <p className="text-xl md:text-2xl mt-5 font-serif">Blazer Shop</p>
            </div>
            </Link>
            <Link href="/filter">
            <div className="flex flex-col items-center">
              <div className="border border-black rounded-lg h-72 xl:w-[524px] xl:h-[380px] md:h-72 sm:h-[250px] sm:w-[320px] overflow-hidden">
                <Image
                  src="https://lifestyle-eta.vercel.app/images/shop-shoes-page.jpg"
                  alt="Footwear Shop"
                  width={535}
                  height={380}
                  className="cursor-pointer z-0 object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105 w-full h-auto lg:w-[535px] lg:h-[385px] md:w-[535px] md:h-[385px] sm:w-[320px] sm:h-[250px]"
                />
              </div>
              <p className="text-xl md:text-2xl mt-5 font-serif">
                Footwear Shop
              </p>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
