import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 bg-myred flex body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-mywhite mb-4 md:mb-0">
            <h1 className="scroll-m-20 border-b gap-5 pb-2 text-2xl flex font-semibold tracking-tight first:mt-0">
              Food & Recipes
            </h1>
          
          <div className="visible lg:hidden">
            <Sheet>
              <SheetTrigger>
                <IoMenu className="w-[24px] ml-36 h-[24px] text-5xl text-white" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <ul className=" font-medium text-[16px] flex flex-col items-start gap-5 py-5">
                      <Link href={"/"} className="mr-5 hover:text-black">
                        Home
                      </Link>
                      <Link href={"/blog"} className="mr-5 hover:text-black">
                        Blog
                      </Link>
                      <Link href={"/contact"} className="mr-5 hover:text-black">
                        Contact
                      </Link>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          </a>
          <nav className="md:ml-auto lg:block hidden flex-wrap items-center font-semibold text-mywhite cursor-pointer text-lg scroll-m-20 tracking-tighter justify-center">
            <Link href={"/"} className="mr-12 hover:text-gray-900">
              Home
            </Link>
            <Link href={"/blog"} className="mr-12 hover:text-gray-900">
              Blog
            </Link>
            <Link href={"/contact"} className="mr-7 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
