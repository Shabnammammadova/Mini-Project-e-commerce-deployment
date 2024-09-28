// 'use server';

// import { revalidatePath } from 'next/cache';
// import { auth } from '@clerk/nextjs/server';
// import prisma from '@/lib/db';

// async function getUserId() {
//   const { userId } = auth();
//   if (!userId) throw new Error('No user ID found');
//   return userId;
// }

// async function findUserWithFavorites(userId: string) {
//   return await prisma.user.findUnique({
//     where: { externalId: userId },
//     include: { favorite: true },
//   });
// }

// export async function getFavorite() {
//   const userId = await getUserId();
//   const user = await findUserWithFavorites(userId);
  
//   if (!user?.favorite) {
//     console.warn(`User ${userId} has no favorites. Creating a new favorite.`);
    

//     const newFavorite = await prisma.favorite.create({
//       data: { userId: user.id }, 
//     });
//     return newFavorite; 
//   }
  
//   return user.favorite;
// }

// export async function getFavoriteWithItems() {
//   const userId = await getUserId();
//   const user = await prisma.user.findUnique({
//     where: { externalId: userId },
//     include: {
//       favorite: {
//         include: {
//           items: {
//             include: { product: true },
//           },
//         },
//       },
//     },
//   });
  
//   if (!user?.favorite) throw new Error('No favorite found');
//   return user.favorite;
// }

// export async function addToFavorite({ productId, quantity }: { productId: string; quantity: number }) {
//   const favorite = await getFavorite(); 
//   let favoriteItem = await prisma.favoriteItem.findFirst({
//     where: {
//       productId,
//       favoriteId: favorite.id,
//     },
//   });

//   if (!favoriteItem) {
//     favoriteItem = await prisma.favoriteItem.create({
//       data: {
//         quantity,
//         product: { connect: { id: productId } },
//         favorite: { connect: { id: favorite.id } },
//       },
//     });
//   } else {
//     favoriteItem = await prisma.favoriteItem.update({
//       where: { id: favoriteItem.id },
//       data: { quantity: favoriteItem.quantity + quantity },
//     });
//   }

//   revalidatePath('/filter');
//   return favoriteItem;
// }

// export async function deleteFavorite(id: string) {
//   const favorite = await prisma.favoriteItem.delete({
//     where: { id },
//   });
//   revalidatePath('/filter');
//   return favorite;
// }


'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/db';

async function getUserId() {
  const { userId } = auth();
  if (!userId) throw new Error('No user ID found');
  return userId;
}

async function findUserWithFavorites(userId: string) {
  return await prisma.user.findUnique({
    where: { externalId: userId },
    include: { favorite: true },
  });
}

export async function getFavorite() {
  const userId = await getUserId();
  const user = await findUserWithFavorites(userId);

  if (!user) {
    // Create a new user if no user found
    console.warn(`User ${userId} not found. Creating a new user.`);
    const newUser = await prisma.user.create({
      data: { externalId: userId },
    });
    // Create a new favorite for the new user
    const newFavorite = await prisma.favorite.create({
      data: { userId: newUser.id },
    });
    return newFavorite;
  }

  if (!user.favorite) {
    console.warn(`User ${userId} has no favorites. Creating a new favorite.`);
    const newFavorite = await prisma.favorite.create({
      data: { userId: user.id },
    });
    return newFavorite;
  }

  return user.favorite;
}

export async function getFavoriteWithItems() {
  const userId = await getUserId();
  const user = await prisma.user.findUnique({
    where: { externalId: userId },
    include: {
      favorite: {
        include: {
          items: {
            include: { product: true },
          },
        },
      },
    },
  });

  if (!user?.favorite) throw new Error('No favorite found');
  return user.favorite;
}

export async function addToFavorite({ productId, quantity }: { productId: string; quantity: number }) {
  const favorite = await getFavorite(); 
  let favoriteItem = await prisma.favoriteItem.findFirst({
    where: {
      productId,
      favoriteId: favorite.id,
    },
  });

  if (!favoriteItem) {
    favoriteItem = await prisma.favoriteItem.create({
      data: {
        quantity,
        product: { connect: { id: productId } },
        favorite: { connect: { id: favorite.id } },
      },
    });
  } else {
    favoriteItem = await prisma.favoriteItem.update({
      where: { id: favoriteItem.id },
      data: { quantity: favoriteItem.quantity + quantity },
    });
  }

  revalidatePath('/filter');
  return favoriteItem;
}

export async function deleteFavorite(id: string) {
  const favorite = await prisma.favoriteItem.delete({
    where: { id },
  });
  revalidatePath('/filter');
  return favorite;
}
