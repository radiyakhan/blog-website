import React from 'react'
import products from '../../../../Data/data';
import Image from 'next/image';
interface Paramst {
    params: {
        id: string;
    }
}
  
  const page = ({params} : Paramst) => {
    const paramsd = Number(params.id)
    const find = products.find((items)=> items.id === paramsd)
    return (
        <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={find?.image || "./"}
              width={600}
              height={48}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-myred">
                {find?.name}
              </h1>
              <p className="mb-8 text-white leading-relaxed">
                <span className="text-myred2 text-lg">Ingredients:</span>
                <br />
                {find?.description1}
                <br />
                <span className="text-myred2 text-lg">Instructions:</span>
                <br />
               {find?.description2}
              </p>
              <div className="flex justify-center">
                
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default page
