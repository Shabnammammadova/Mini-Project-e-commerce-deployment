'use client';

import { deleteFavorite } from '@/app/actions/favorite';
import { useFavModal } from '@/src/hooks/use-fav-modal';
import { SafeFavorite } from '@/src/types';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';


import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';




export default function Wishlist({ favorite }: { favorite: SafeFavorite }) {
  const { isOpen, close } = useFavModal();
console.log(favorite);

function handleDelete(id) {
  try {
    const promise = deleteFavorite(id).then(() => {
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
    <Dialog open={isOpen} onClose={close} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 mt-20">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Favorite</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => close()}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {favorite?.items.map((favoriteItem) => (
                          <li key={favoriteItem.id} className="flex py-6">
                            <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Image
                                alt={favoriteItem.product.name}
                                src={favoriteItem.product.imageUrl}
                                className="h-full w-full object-cover object-center"
                                width={100}
                                height={50}
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    {favoriteItem.product.name}
                                  </h3>
                                  <p className="ml-4">${favoriteItem.product.price}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex">
                                  <button onClick={(e)=>{handleDelete(favoriteItem.id)}} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}