import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center pt-20 bg-[#F3E6DA]  flex-col">
        <Image
          src="https://lifestyle-eta.vercel.app/new-image/logo.svg"
          alt="image-logo"
          width={155}
          height={40}
          className="mx-auto"
        />

        <div className="flex mt-20 w-full mx-auto justify-between font-serif text-black text-xl px-8 flex-col sm:items-center md:flex-row">
          <ul className="flex flex-col">
            <p className="mb-8">Social</p>
            <li className="hover:underline hidden md:block">Instagram</li>
            <li className="hover:underline hidden md:block">Facebook</li>
            <li className="hover:underline hidden md:block">Twitter</li>
            <li className="hover:underline hidden md:block">Linkedin</li>
          </ul>
          <ul className="flex flex-col">
            <p className="mb-8">Lifestyle Fashion</p>
            <li className="hover:underline hidden md:block">Shop</li>
            <li className="hover:underline hidden md:block">Contact</li>
          </ul>
          <ul className="flex flex-col">
            <p className="mb-8">Legal</p>
            <li className="hover:underline hidden md:block">
              Terms & Conditions
            </li>
            <li className="hover:underline hidden md:block">Privacy Policy</li>
            <li className="hover:underline hidden md:block">Contact</li>
          </ul>
          <ul className="flex flex-col">
            <p className="mb-8">Region</p>
            <li className="hover:underline hidden md:block">Finland | UK |</li>
          </ul>
        </div>
        <div className="flex items-center pt-12 pb-9 w-full mx-auto justify-between font-serif px-8 ">
          <div className="flex items-center pt-12 pb-9 w-full mx-auto justify-between font-serif px-8 md:px-2 flex-col md:flex-row md:gap-20">
            <p>Copyright 2023 Lifestyle Fashion</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
