'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IProducts } from '@/types/productTypes';
import { urlFor } from '@/sanity/lib/image';
import { Button } from '@/components/ui/button';
import { FaCartShopping } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { addToCart } from '../action/actions';

export default function Category({
  products,
  category,
}: {
  products: IProducts[];
  category: string;
}) {
  const handleAddToCart = (e: React.MouseEvent, product: IProducts) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    
    addToCart(product);
  };
  

  return (
    <section>
      <div className="w-[92%] mx-auto mt-40 md:mt-20 mb-20">
        <h1 className="md:text-[32px] text-xl font-montserrat font-medium md:text-left pl-0 md:pl-6 text-center mb-4">
          Our products for {category}
        </h1>
        <div className="font-montserrat px-4 sm:px-0 sm:mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 md:mt-20 mb-20">
          {products.map((product) => (
            <div key={product._id} className="py-4 px-4 bg-borderGray rounded-xl">
              <Link href={`/category/${product._id}`}>
                <div className="overflow-hidden rounded-xl h-96">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                  />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
