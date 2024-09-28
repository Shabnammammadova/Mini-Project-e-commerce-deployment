import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Blazer = () => {
  return (
    <>
      <section>
        <div className="relative w-full h-full">
          <Image
            className="object-cover w-full h-full mt-20"
            src="https://lifestyle-eta.vercel.app/images/hero-benner-3.jpg"
            alt="Haute Couture Collection"
            width={1520}
            height={490}
          />
          <div className="absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left left-5 text-white">
            <h2 className="uppercase text-xl xl:text-7xl tracking-wide font-serif">
              <span className="block text-4xl xl:text-7xl">Elevate your</span>

              <span className="block text-3xl xl:text-5xl">Closet</span>
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-20  xl:flex-row xl:items-center xl:justify-center xl:gap-60 mt-20 mb-20 ">
          <div className="pl-10 pr-10 flex flex-col gap-5">
            <p className="text-2xl flex flex-col font-serif">
              Summer 2023
              <span className="uppercase relative z-0 text-black font-serif text-4xl">
                Collection
              </span>
            </p>
            <p>
              straight fit blazer with a notched lapel collar. <br /> long sleeves with
              buttoned cuffs. chest welt <br /> pocket and flap hip pockets. inside
              pocket <br /> detail. back vents at the hem. front button <br /> fastening.
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
                src="https://lifestyle-eta.vercel.app/images/blazer-product-1.png"
                alt="bag"
                width={200}
                height={300}
              />
              <div className="text-center font-serif">
                <a href="#">
                  <h5 className="mb-2 text-2xl  tracking-tight text-gray-400 dark:text-white font-serif">
                    Blazer1
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">
                  Rectangle Blazer
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
                src="https://lifestyle-eta.vercel.app/images/blazer-product-2.png"
                alt="bag"
                width={200}
                height={300}
              />
              <div className="text-center font-serif">
                <a href="#">
                  <h5 className="mb-2 text-2xl  tracking-tight text-gray-400 dark:text-white font-serif">
                    Blazer2
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">
                  Triangle Blazer
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
      </section>

      {/* Grid cards */}

      <section className="w-full">
        <div className="flex  items-center  lg:flex-row flex-col">
          <div className="flex-shrink-0">
            <Image
              src="	https://lifestyle-eta.vercel.app/images/blazer-images-1.jpg"
              alt="bag"
              width={1000}
              height={590}
              className="object-cover"
            />
          </div>
          <div className="flex justify-center items-center mx-auto bg-[#F3E6DA] h-[590px] w-[300px] sm:w-full md:w-full md:h-[580px]">
            <Image
              src="https://lifestyle-eta.vercel.app/images/blazer-product-5.png"
              alt="bag"
              width={200}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex  items-center  lg:flex-row flex-col">
          <div className="flex justify-center items-center mx-auto bg-[#F3E6DA] h-[590px] w-[300px] sm:w-full md:w-full md:h-[580px]">
            <Image
              src="https://lifestyle-eta.vercel.app/images/blazer-product-6.png"
              alt="bag"
              width={200}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="https://lifestyle-eta.vercel.app/images/blazer-images-2.jpg"
              alt="bag"
              width={1000}
              height={590}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex  items-center  lg:flex-row flex-col">
          <div className="flex-shrink-0">
            <Image
              src="https://lifestyle-eta.vercel.app/images/blazer-images-3.jpg"
              alt="bag"
              width={1000}
              height={590}
              className="object-cover"
            />
          </div>
          <div className="flex justify-center items-center mx-auto bg-[#F3E6DA] h-[590px] w-[300px] sm:w-full md:w-full md:h-[580px]">
            <Image
              src="https://lifestyle-eta.vercel.app/images/blazer-product-7.png"
              alt="bag"
              width={200}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-5xl font-bold font-serif text-center mt-40 mb-40">
          Blazer <br />
          Mix & Match
        </h1>
      </section>

      <section
        id="Projects"
        className="w-full mx-auto grid grid-cols-1 gap-2 xl:grid-cols-3 lg:grid-cols-2 lg:gap-5 md:grid-cols-1 justify-items-center justify-center mt-10 mb-5 uppercase gap-y-20 gap-x-24 xl:gap-2"
      >
        <div className=" w-full  bg-[#F3E6DA] flex flex-col items-center gap-10">
          <Image
            src="https://lifestyle-eta.vercel.app/images/blazer-product-8.png"
            alt="Product"
            className="duration-500 hover:scale-105 relative top-20 "
            width={320}
            height={350}
          />
          <div>
            <div className="flex items-center w-full justify-between gap-10 relative mt-10">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
               Wool coat
              </p>
              <div className="ml-auto">
                <p>$345,00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-[#F3E6DA] flex flex-col items-center gap-20">
          <Image
            src="	https://lifestyle-eta.vercel.app/images/blazer-product-9.png"
            alt="Product"
            className="duration-500 hover:scale-105 relative top-20 object-contain "
            width={320}
            height={350}
          />
          <div>
            <div className="flex items-center w-full justify-between gap-10 relative mt-10">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                Blazer Coat
              </p>
              <div className="ml-auto">
                <p>$743,00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full   bg-[#F3E6DA] flex flex-col items-center gap-20">
          <Image
            src="https://lifestyle-eta.vercel.app/images/blazer-product-10.png"
            alt="Product"
            className="duration-500 hover:scale-105 relative top-20 "
            width={320}
            height={350}
          />
          <div>
            <div className="flex items-center w-full justify-between gap-10 relative mt-10">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                Balazer Coat
              </p>
              <div className="ml-auto">
                <p>$473,00</p>
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
              src="https://lifestyle-eta.vercel.app/images/instagram-7.jpg"
              alt="Product"
              className="h-80 w-72 object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src="https://lifestyle-eta.vercel.app/images/instagram-8.jpg"
              alt="Product"
              className="h-80 w-72 object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl">
            <Image
              src="	https://lifestyle-eta.vercel.app/images/instagram-9.jpg"
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
            src="	https://lifestyle-eta.vercel.app/images/collection-full-banner-3.jpg"
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

export default Blazer;
