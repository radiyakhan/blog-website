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
    description: "Our biryani is a special blend of spices, basmati rice, and hospitality, packed with flavor and aroma in every bite",
    image: "/biryani.jpg",
  },
  {
    id: 2,
    name: "Cheese Handi",
    description: "Our Cheese Handi is a creamy and rich dish, where melt-in-your-mouth cheese blends perfectly with aromatic spices and fresh ingredients",
    image: "/handi.jpg",
  },
  {
    id: 3,
    name: "Mutton Nihari",
    description: "Our Mutton Nihari is a rich and flavorful dish, where tender mutton is slow-cooked in a blend of aromatic spices, creating a deep, savory taste",
    image: "/nihari.jpg",
  },
  {
    id: 4,
    name: "Pizza",
    description: "Our pizza is a perfect blend of crispy crust, rich tomato sauce, and a variety of fresh, flavorful toppings",
    image: "/pizza.jpg",
  },
  {
    id: 5,
    name: "Chapli Kabab",
    description: "Our Chapli Kebab is a savory delight, made with minced meat, fragrant spices, and fresh herbs, cooked to a crispy perfection",
    image: "/chapli-kabab.jpg",
  },
  {
    id: 6,
    name: "Chicken Kabab",
    description: "Our Chicken Kabab is a flavorful treat, made with tender chicken marinated in a blend of aromatic spices and herbs, then grilled to perfection",
    image: "/kabab.jpg",
  },
  {
    id: 7,
    name: "Chicken Samosa",
    description: "Our Chicken Samosa is a crispy, golden delight filled with a savory blend of spiced chicken and fresh herbs",
    image: "/chicken-samosa.jpg",
  },
  {
    id: 8,
    name: "Aloo Samosa",
    description: "Our Aloo Samosa is a delicious pastry filled with a spiced potato mixture, offering a perfect balance of flavors and crunch.",
    image: "/samosa.jpg",
  },
  {
    id: 9,
    name: "Chinese Rice",
    description: "Our Chinese Rice is a flavorful and aromatic dish, made with perfectly cooked rice, stir-fried vegetables, and a delicious mix of soy sauce and spices.",
    image: "/chiness.jpg",
  },
  {
    id: 10,
    name: "Club Sandwich",
    description: "Our Club Sandwich is a hearty, satisfying meal stacked with layers of crispy bacon, tender chicken, fresh vegetables, and creamy mayo, all nestled between toasted bread",
    image: "/club-sandwich.jpg",
  },
  {
    id: 11,
    name: "BBQ",
    description: "Our BBQ offers a mouthwatering experience with perfectly grilled meats, infused with smoky flavors and tender juiciness",
    image: "/bbq.jpg",
  },
  {
    id: 12,
    name: "Burger",
    description: "Our Burger is a mouthwatering creation, featuring a juicy, perfectly seasoned patty topped with fresh lettuce, tomato, cheese, and a special sauce, all sandwiched between a soft, toasted bun.",
    image: "/burger.jpg",
  },
  {
    id: 13,
    name: "Broast",
    description: "Our Broast is a crispy, golden delight made with marinated chicken, perfectly fried to a crunchy exterior while remaining tender and juicy inside",
    image: "/broast.jpg",
  },
  {
    id: 14,
    name: "Karahi",
    description: "Delight in the rich, aromatic flavors of our Karhai, a traditional dish made with tender meat, fresh spices, and a blend of authentic ingredients.",
    image: "/karhai.jpg",
  },
  {
    id: 15,
    name: "Chicken Tikka",
    description: "Savor the smoky, tender Chicken Tikka, marinated in a blend of spices and grilled to perfection. Each bite delivers a burst of flavor, making it a delicious choice for any occasion.",
    image: "/chivken-tikka.jpg",
  },
  {
    id: 16,
    name: "Spaghetti",
    description: "Enjoy the rich and comforting taste of our Spaghetti, perfectly cooked and paired with a savory sauce, whether it's a classic marinara, creamy Alfredo, or a spicy arrabbiata.",
    image: "/speghitte.jpg",
  },

];

const FoodItems = () => {
  return (
    <div>
      <div className="text-mywhite font-bold text-center py-14 text-5xl">
        Blogs
      </div>
     <div className="flex flex-wrap justify-center">
     {products.map((items) => {
        return (
         <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
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
    </div>
  );
};

export default FoodItems;
