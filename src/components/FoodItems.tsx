import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};
const products: Product[] = [
  {
    id: 1,
    name: "Biryani",
    description:
      "Our biryani is a special blend of spices, basmati rice, and hospitality, packed with flavor and aroma in every bite",
    image: "/biryani.jpg",
  },
  {
    id: 2,
    name: "Cheese Handi",
    description:
      "Our Cheese Handi is a creamy and rich dish, where melt-in-your-mouth cheese blends perfectly with aromatic spices and fresh ingredients",
    image: "/handi.jpg",
  },
  {
    id: 3,
    name: "Mutton Nihari",
    description:
      "Our Mutton Nihari is a rich and flavorful dish, where tender mutton is slow-cooked in a blend of aromatic spices, creating a deep, savory taste",
    image: "/nihari.jpg",
  },
  {
    id: 4,
    name: "Pizza",
    description:
      "Our pizza is a perfect blend of crispy crust, rich tomato sauce, and a variety of fresh, flavorful toppings",
    image: "/pizza.jpg",
  },
];

const FoodItems = () => {
  return (
    <div className="mb-20">
      <div className="text-mywhite font-bold text-center py-14 text-5xl">
        Blogs
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((items) => {
          return (
            <section key={items.id} className="text-gray-600 body-font">
              <div className="container px-5 pb-9 mx-auto">
                <div className="-m-4">
                  <div className="p-4 w-80">
                    <div className="h-full hover:scale-105 hover:duration-300 overflow-hidden">
                      <Link href={`/blog/${items.id}`}>
                      <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={items.image}
                        alt={items.name}
                        width={600}
                        height={48}
                      />
                      </Link>
                      <div className="bg-white p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          CATEGORY
                        </h2>
                        <h1 className="title-font text-2xl font-semibold text-myred mb-3">
                          {items.name}
                        </h1>
                        <p className="leading-relaxed mb-3 line-clamp-4">
                          {items.description}
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <Link href={`/blog/${items.id}`}>
                            <h1 className="text-myred inline-flex cursor-pointer items-center md:mb-2 lg:mb-0">
                              Learn More
                              <FaArrowRightLong className="text-myred ml-3 mt-[3px]" />
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <div>
        <button className="lg:w-[250px] flex lg:h-auto sm:h-auto sm:w-auto p-5 sm:mt-3 bg-myred2 text-white text-base font-bold lg:mx-[570px] ml-[68px] text-center">
        <Link href={"/blog"}>
              <h1 className="flex">
              Explore More Recipes
              <FaArrowRightLong className="text-white mt-[5.5px] ml-5 hover:text-lg hover:duration-300" />
              </h1>
        </Link>
            </button>
      </div>
    </div>
  );
};

export default FoodItems;
