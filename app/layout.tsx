// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import {} from 'next/font/local'
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import {ClerkProvider} from '@clerk/nextjs'
// import { Toaster } from "sonner";
// import Cart from "./components/common/cart";
// import { SafeCart, SafeFavorite } from "@/src/types";
// import prisma from "@/lib/db";
// import { auth } from "@clerk/nextjs/server";
// import Wishlist from "./components/common/favorite";



// const barlow = localFont({
//   src: "./fonts/Barlow-Regular.ttf",
//   variable: "--font-barlow",
// });
// const sans = localFont({
//   src:"./fonts/OpenSans-VariableFont_wdth,wght.ttf",
//   variable:"--font-sans"
// });
// const tinos = localFont({
//   src:"./fonts/Tinos-Regular.ttf",
//   variable:"--font-tinos"
// })
// const playfair = localFont({
//   src:"./fonts/PlayfairDisplay-VariableFont_wght.ttf",
//   variable:"--font-playfairdisplay"
// })

// export const metadata: Metadata = {
//   title: "Lifestyle",
//   description: "Generated by create next app",
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const { userId } = auth();
//   const user = await prisma.user.findUnique({
//     where: {
//       externalId: userId!,
//     },
//   });
//   const cart = await prisma.cart.findUnique({
//     where: {
//       userId: user!.id,
//     },
//     include: {
//       items: {
//         include: {
//           product: true,
//         },
//       },
//     },
//   });
//   const favorite = await prisma.favorite.findUnique({
//     where: {
//       userId: user!.id,
//     },
//     include: {
//       items: {
//         include: {
//           product: true,
//         },
//       },
//     },
//   });

//   return (
//     <ClerkProvider>
//  <html lang="en" className={`${barlow.variable} ${sans.variable} ${tinos.variable} ${playfair.variable}`}>
//       <body className="font-sans flex flex-col justify-between">
//         <Header/>
//         <Cart cart={cart as SafeCart} />
//         <Wishlist favorite={favorite as SafeFavorite}/>
//         <div>{children}
//           <Toaster richColors/>
//         </div>
//         <Footer/>
//       </body>
//     </html>
//     </ClerkProvider>
   
//   );
// }




import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Cart from "./components/common/cart";
import { SafeCart, SafeFavorite } from "@/src/types";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Wishlist from "./components/common/favorite";

const barlow = localFont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow",
});
const sans = localFont({
  src: "./fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-sans",
});
const tinos = localFont({
  src: "./fonts/Tinos-Regular.ttf",
  variable: "--font-tinos",
});
const playfair = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfairdisplay",
});

export const metadata: Metadata = {
  title: "Lifestyle",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (!userId) {
    return (
      <ClerkProvider>
        <html
          lang="en"
          className={`${barlow.variable} ${sans.variable} ${tinos.variable} ${playfair.variable}`}
        >
          <body className="font-sans flex flex-col justify-between">
            <Header />
            <div>{children}</div>
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
  });


  if (!user) {
    return (
      <ClerkProvider>
        <html
          lang="en"
          className={`${barlow.variable} ${sans.variable} ${tinos.variable} ${playfair.variable}`}
        >
          <body className="font-sans flex flex-col justify-between">
            <Header />
            <div>{children}</div>
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    );
  }

  
  const cart = await prisma.cart.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  const favorite = await prisma.favorite.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${barlow.variable} ${sans.variable} ${tinos.variable} ${playfair.variable}`}
      >
        <body className="font-sans flex flex-col justify-between">
          <Header />
        
          {cart && <Cart cart={cart as SafeCart} />}
          {favorite && <Wishlist favorite={favorite as SafeFavorite} />}
          <div>
            {children}
            <Toaster richColors />
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
