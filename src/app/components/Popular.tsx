"use client"
import { Button } from '@/components/ui/button'
import { urlFor } from '@/sanity/lib/image'
import { IProducts } from '@/types/productTypes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { addToCart } from '../action/actions'
import { client } from '@/sanity/lib/client'
import { allProduct } from '@/sanity/lib/queries'

function Popular() {
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(() => {
      async function fetchProducts() {
        try {
          const fetchedData: IProducts[] = await client.fetch(allProduct);
          setProducts(fetchedData.slice(0, 4)); // Fix: slice before setting state
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    
      fetchProducts();
    }, []);


  const handleAddToCart = (e: React.MouseEvent, product: IProducts) => {
 e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(product)
  }

  return (
    <div id='popular' className='w-[92%] mx-auto'>
      <h1 className="hidden md:block md:text-[32px] text-xl font-montserrat font-medium md:text-left pl-0 md:pl-1 text-center mb-4 text-darkPrimary">
                Our Popular Products
            </h1>
      
        <div className="font-montserrat px-4 sm:px-0 sm:mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 md:mt-20 mb-20">


    {products.map((product) => (

  <div key={product._id} className='py-4 px-4 bg-borderGray rounded-xl'>
    <Link href={`/category/${product._id}`}>

      {/* image */}
      <div className="overflow-hidden rounded-xl h-96">

        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
        />

      </div>

      {/* product name */}
      <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
        {product.name}
      </h2>

      {/* price */}
      <p className="scroll-m-20 text-lg font-medium tracking-tight text-darkPrimary mt-1">
        &#36;{product.price}
      </p>

    </Link>

  <div className='mt-2'>
      <Button onClick={(e) => handleAddToCart(e, product)}
      className='bg-darkPrimary w-full py-4 text-myWhite rounded hover:bg-myPrimary focus:bg-black'>
      <FaCartShopping className='text-myWhite hover:text-darkPrimary' />
      Add to Cart
    </Button>
  </div>


  </div>
)
)}


</div >
    </div>
  )
}

export default Popular