import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 bg-myred body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <h1 className="scroll-m-20 border-b-2 gap-5 pb-2 text-mywhite text-4xl flex font-semibold tracking-tight first:mt-0">
              Food & Recipes
            </h1>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Biryani</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Cheese Handi</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Mutton Nihari</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Pizza</h1>
          </Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Chapli Kabab</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Chicken Kabab</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Chicken Samosa</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Aloo Samosa</h1>
          </Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Chinese Rice</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Club Sandwich</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">BBQ</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Burger</h1>
          </Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Broast</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Karahi</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Chicken Tikka</h1>
          </Link>
          </li>
          <li>
            <Link href={"/blog"}>
            <h1 className="text-mywhite/80 hover:text-gray-800 cursor-pointer">Spaghetti</h1>
          </Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © Radiya khan —
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a 
        className="text-gray-800 text-xl hover:text-blue-600" 
        target='_blank'
        href={'https://www.facebook.com/profile.php?id=100083278800324&mibextid=ZbWKwL'}>
        <FaFacebookF />
        </a>
        <a 
        className="ml-3 text-gray-800 text-2xl  hover:text-blue-400" 
        target='_blank'
        href={"https://www.linkedin.com/in/radiya-khan-133b112ba"}>
        <FaLinkedinIn />
        </a>
        <a 
        className="ml-3 font-bold text-gray-800 text-2xl hover:text-pink-400" 
        target='_blank'
        href={"https://www.instagram.com/radiya._.345?igsh=NzQ5MTZnMTNxN2lv"}>
        <FiInstagram />
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
