import Image from "next/image";
import Link from "next/link";
import React from "react";

import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { Role } from "@prisma/client";
import { CartButton } from "./common/CartButton";
import { FavButton } from "./common/FavButton";

const Header = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
  });

  const isAdmin = user?.role === Role.ADMIN;
  return (
    <div className="fixed z-50 w-full bg-[#F3E6DA]">
      <div className="flex items-center justify-between px-4 lg:px-10 py-6 max-w-screen-2xl mx-auto">
        {/* Navigation Links */}
        <div className="hidden xl:flex gap-6 items-center font-serif text-lg">
          <Link href="/shop">Shop</Link>
          <Link href="/sunglasses">Sunglasses</Link>
          <Link href="/bag">Bag</Link>
          <Link href="/blazer">Blazer</Link>
          <Link href="/shoes">Shoes</Link>
        </div>
        <div className="flex justify-center w-full xl:w-auto">
          <Image
            width={50}
            height={50}
            src="https://lifestyle-eta.vercel.app/new-image/sticky-logo.svg"
            alt="logo"
            className="mx-auto"
          />
        </div>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <Link href="/auth/sign-in">
              <Button>Dashboard</Button>
            </Link>
          )}
          <div className=" hidden xl:block">
            <UserButton/>
          </div>
          <FavButton/>
          <CartButton/>
        </div>
      </div>
    </div>
  );
};

export default Header;
