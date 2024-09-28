'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';


import prisma from '@/lib/db';


export async function getCart() {
  const { userId } = auth();
  if (!userId) throw new Error('No user ID found');
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
    include: {
      cart: true,
    },
  });
  if (!user?.cart) throw new Error('No cart found');

  return user?.cart;
}

export async function getCartWithItems() {
  const { userId } = auth();
  if (!userId) throw new Error('No user ID found');
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
    include: {
      cart: {
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });
  if (!user?.cart) throw new Error('No cart found');

  return user?.cart;
}

export async function addToCart({ productId, quantity }: { productId: string; quantity: number }) {
  const cart = await getCart();

  let cartItem = await prisma.cartItem.findFirst({
    where: {
      productId,
      cartId: cart.id,
    },
  });
  if (!cartItem) {
    cartItem = await prisma.cartItem.create({
      data: {
        quantity,
        product: {
          connect: {
            id: productId,
          },
        },
        cart: {
          connect: {
            id: cart.id,
          },
        },
      },
    });
  } else {
    cartItem = await prisma.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        quantity: cartItem.quantity + quantity,
      },
    });
  }

  revalidatePath('/filter');

  return cartItem;
}

export async function deleteCart(id:string){
  const cart = await prisma.cartItem.delete({
   where:{
      id
   }
  });
  revalidatePath('/filter');
  return cart;
}
