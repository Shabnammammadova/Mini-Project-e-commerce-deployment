import prisma from "@/lib/db";
import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import { AddToCartButton } from "@/app/components/common/AddToCartButton";


const filters = [
  {
    id: "description",
    name: "Description",
    options: [
      {
        value: "white",
        label:
          "Discover elegance with our stylish leather tote bag. Crafted for versatility, it complements any outfit. The spacious interior ensures you carry essentials effortlessly. With durable craftsmanship and a chic design, this bag is your perfect daily companion. Elevate your fashion with this timeless accessory gubergren, no sea takimata sanctus est Lorem ipsum",
      },
    ],
  },
  {
    id: "material",
    name: "Material",
    options: [
      {
        value: "sunglasses",
        label:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit",
      },
    ],
  },
  {
    id: "size",
    name: "Maintenance",
    options: [
      {
        value: "2l",
        label:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit",
      },
    ],
  },
];
const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="bg-[#F3E6DA] dark:bg-gray-800 py-8 pt-32 font-serif">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 pt-12 pb-10 flex items-center justify-center">
                <Image
                  className="flex items-center justify-center object-cover"
                  src={product.imageUrl}
                  alt="Product Image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Bring Fashion Week home when you shop designer glasses from
                Versace, Dolce&Gabbana, Gucci and more. For a limited time, get
                up to <b>50%</b> off lenses on eyeglasses and sunglasses.
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>
<AddToCartButton productId={product.id}/>
              <div className='px-4 py-1 w-72 flex items-center gap-2 bg-[#F3E6DA]'>

        </div>
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-[#F3E6DA] px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
