import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Sunglasses = () => {
  return (
    <>
      <section className="relative flex flex-col md:flex-row w-full justify-between">
        <div className="bg-[#F3E6DA] flex items-center  justify-center  p-32 md:p-20  lg:p-40 xl:w-1/2 xl:relative xl:flex-col xl:justify-center xl:pr-16 xl:pl-10 xl:py-10 xl:order-1">
          <div className="text-left  xl:text-center ">
            <h1 className="text-8xl font-serif text-black leading-none">
              Comfort &
            </h1>
            <p className="text-5xl font-serif text-black leading-none mt-4">
              Magic awaits.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 xl:order-2">
          <Image
            src="https://lifestyle-eta.vercel.app/images/hero-benner-1.png"
            alt="image"
            width={955}
            height={770}
            className="object-cover object-top lg:w-full h-full"
          />
        </div>
      </section>

      <div className="flex flex-col items-center gap-20  xl:flex-row xl:items-center xl:justify-center xl:gap-60 mt-20 mb-20 ">
        <div className="pl-10 pr-10 flex flex-col gap-5">
          <p className="text-2xl flex flex-col font-serif">
            Summer 2023
            <span className="uppercase relative z-0 text-black font-serif text-4xl">
              Collection
            </span>
          </p>
          <p>
            Sunglasses with Italian designs! Whatever the
            <br /> occasion be, these unique luxury designs are <br /> going to
            stand out.
          </p>
          <Button
            className="1px divide-solid bg-transparent text-black pt-5 pb-5 pl-24 pr-24 max-w-[300px]"
            variant={"outline"}
          >
            Shop All
          </Button>
        </div>
        <div className="flex flex-col gap-24 items-center  lg:flex-row lg:gap-60 ">
          <div className="max-w-sm ">
            <Image
              src="	https://lifestyle-eta.vercel.app/images/gogals-product-1.png"
              alt="sunglasses"
              width={200}
              height={300}
            />
            <div className="text-center font-serif">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-tight text-gray-400 dark:text-white font-serif">
                  Sunglasses1
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">
                Round Framed
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                $59,00
              </p>
              <Button
                className="1px divide-solid bg-transparent text-black pt-5 pb-5 pl-24 pr-24 max-w-[300px]"
                variant={"outline"}
              >
                Buy
              </Button>
            </div>
          </div>
          <div className="max-w-sm ">
            <Image
              src="https://lifestyle-eta.vercel.app/images/gogals-product-2.png"
              alt="sunglasses"
              width={300}
              height={300}
            />
            <div className="text-center font-serif">
              <a href="#">
                <h5 className="mb-2 text-2xl  tracking-tight text-gray-400 dark:text-white font-serif">
                  Sunglasses2
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">
                Tringle Framed
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                $59,00
              </p>
              <Button
                className="1px divide-solid bg-transparent text-black pt-5 pb-5 pl-24 pr-24 max-w-[300px]"
                variant={"outline"}
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid section */}
      <section className="flex p-0 w-full min-h-[1280px] lg:flex-row flex-col">
        <div className="w-full min-h-[400px] object-fill">
          <Image
            src="https://lifestyle-eta.vercel.app/images/gogals-images-1.jpg"
            alt="image"
            width={400}
            height={400}
            className="object-cover object-center  w-full h-full"
          />
        </div>

        <div className="grid  grid-cols-2 grid-rows-2 gap-0 w-full">
          <div className="bg-[#F3E6DA] text-center flex items-center justify-center gap-10 flex-col w-full h-full font-bold font-serif">
            <Image
              src="https://lifestyle-eta.vercel.app/images/gogals-product-5.png"
              alt="image"
              width={244}
              height={244}
              className="object-cover object-center text-center"
            />
            <p className="text-2xl">Bloom Flower</p>
            <span>$29,00</span>
          </div>
          <div className="w-full h-full">
            <Image
              src="https://lifestyle-eta.vercel.app/images/gogals-images-2.jpg"
              alt="image"
              width={400}
              height={400}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-full h-full">
            <Image
              src="https://lifestyle-eta.vercel.app/images/gogals-images-2.jpg"
              alt="image"
              width={400}
              height={400}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="bg-[#F3E6DA] text-center flex items-center justify-center gap-10 flex-col w-full h-full font-bold font-serif">
            <Image
              src="https://lifestyle-eta.vercel.app/images/gogals-product-6.png"
              alt="image"
              width={244}
              height={244}
              className="object-cover object-center text-center"
            />
            <p className="text-2xl">Rectangle Glasses</p>
            <span>$29,00</span>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-5xl font-bold font-serif text-center mt-40 mb-40">
          Glasses <br />
          Mix & Match
        </h1>
      </section>

      <section
        id="Projects"
        className="w-full mx-auto grid grid-cols-1 gap-2 xl:grid-cols-3 lg:grid-cols-2 lg:gap-5 md:grid-cols-1 justify-items-center justify-center mt-10 mb-5 uppercase gap-y-20 gap-x-24 xl:gap-2"
      >
        <div className=" w-full  bg-[#F3E6DA] flex flex-col items-center gap-10">
          <Image
            src="https://lifestyle-eta.vercel.app/images/gogals-product-7.png"
            alt="Product"
            className="duration-500 hover:scale-105 relative top-20 "
            width={320}
            height={350}
          />
          <div>
            <div className="flex items-center w-full justify-between gap-20 relative mt-10">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                White framed glasses 
              </p>
              <div className="ml-auto">
                <p>$49,00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#F3E6DA] flex flex-col items-center gap-10">
          <Image
            src="https://lifestyle-eta.vercel.app/images/gogals-product-8.png"
            alt="Product"
            className="duration-500 hover:scale-105 relative top-20 "
            width={320}
            height={350}
          />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center w-full justify-between gap-20 relative mt-10">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                Cat Eye One
              </p>
              <div className="ml-auto">
                <p>$49,00</p> 
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#F3E6DA] flex flex-col items-center gap-10">
          <Image
            src="https://lifestyle-eta.vercel.app/images/gogals-product-9.png"
            alt="Product"
            className="duration-500 hover:scale-105 relative top-20 "
            width={320}
            height={350}
          />
          <div >
            <div className="flex items-center w-full justify-between gap-3 relative mt-10">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                Maroon glasses
              </p>
              <div className="ml-auto">
                <p>$49,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="bg-[#F3E6DA] w-full pt-32 pb-10 ">
        <div className="relative text-left z-10 -mb-10 pr-8 pl-10 lg:pr-10 lg:pl-20">
          <h1 className="uppercase text-white text-7xl font-serif m-0">
            Be inspired <span className="text-4xl block">@lifestyle</span>
          </h1>
        </div>
        <section
          id="Projects"
          className="w-fit  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-5 mt-10 mb-5"
        >
          <div className="w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://lifestyle-eta.vercel.app/images/instagram-1.jpg"
              alt="Product"
              className="h-80 w-72 object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://lifestyle-eta.vercel.app/images/instagram-2.jpg"
              alt="Product"
              className="h-80 w-72 object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://lifestyle-eta.vercel.app/images/instagram-3.jpg"
              alt="Product"
              className="h-80 w-72 object-cover"
              width={300}
              height={300}
            />
          </div>
        </section>
        <div className="relative text-right -mt-12 font-serif pr-2 pl-10 lg:pr-48 lg:pl-20 text-white">
          <h1 className="m-0 text-7xl">
            Follow Us<span className="text-4xl block">on Instagram</span>
          </h1>
        </div>
      </div>


      <section>
  <div className="relative w-full h-full">

    <Image
      className="object-cover w-full h-full"
      src="https://lifestyle-eta.vercel.app/images/collection-full-banner-1.jpg"
      alt="Haute Couture Collection"
      width={1520}
      height={490}
    />
    <div className="absolute inset-0 bg-[rgba(72,72,72,0.44)]"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
      <h2 className="uppercase text-2xl xl:text-5xl font-bold tracking-wide font-serif">
        <span className="block text-3xl">The</span>
        Haute Couture
        <span className="block text-3xl">Collection</span>
      </h2>
    </div>
  </div>
</section>

    </>
  );
};

export default Sunglasses;
