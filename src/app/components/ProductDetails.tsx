"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCartShopping, FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { IProducts } from "@/types/productTypes";
import { useEffect, useState } from "react";
import { addToCart, getCartItems } from "@/app/action/actions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


const ProductDetails = ({ product }: { product: IProducts }) => {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };
    fetchCart();
  }, []);


  const router = useRouter();
    const handleAddToCart = (e: React.MouseEvent, product: IProducts) => {
      e.preventDefault()
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: `${product.name} added to cart`,
        showConfirmButton: false,
        timer: 1000
      })
      router.push("/cart");
      addToCart(product)
    }

  
return (
    <section className="w-[90%] mx-auto">

      <div key={product._id} className="container mx-auto my-4">
        {/* Product Image */}
        <div className="w-full flex flex-wrap lg:flex-nowrap md:flex-nowrap overflow-hidden items-center justify-center rounded">
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={450}
            className="md:w-[35%] rounded Hover:scale-125 duration-500 object-contain"
          />



          {/* Category */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="scroll-m-20 text-lg font-normal tracking-wider text-darkPrimary ">
              {product.categoryName}
            </h2>

            {/* Title */}
            <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight text-darkPrimary mb-1">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="rating rating-sm mt-2 ">
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            </div>

            {/* divider */}
            <div className="divider"></div>

            {/* Features */}
            <div className="mt-2">
              <ul className="scroll-m-20 text-base font-semibold tracking-tight text-darkPrimary ">Features</ul>
              {product.features?.map((feature, index) => (
                <li key={index} className="scroll-m-20 text-base font-normal tracking-tight text-darkPrimary">{feature}</li>
              ))}
             </div>

            {/* Description */}
            <p className="scroll-m-20 text-base font-semibold tracking-tight text-darkPrimary mt-4">
              Description
            </p>
            <p className="scroll-m-20 text-base font-normal tracking-tight text-darkPrimary">
              {product.description}
            </p>

            <div className="mt-5 mb-8 text-darkPrimary">

              {/* Size */}

              <h2 className="scroll-m-20 text-base font-semibold tracking-tight">Dimensions</h2>
              <div className='flex items-center gap-5'>

                {/* Height */}
                <div>
                  <p className="mt-3 scroll-m-20 text-base font-semibold tracking-tight">Height</p>
                  <p className="scroll-m-20 text-base font-normal tracking-tight text-darkPrimary">{product.height}</p>
                </div>
                {/* Width */}
                <div>
                  <p className="mt-3 scroll-m-20 text-base font-semibold tracking-tight">Width</p>
                  <p className="scroll-m-20 text-base font-normal tracking-tight text-darkPrimary">{product.width}</p>
                </div>
                {/* depth */}
                <div>
                  <p className="mt-3 scroll-m-20 text-base font-semibold tracking-tight">Depth</p>
                  <p className="scroll-m-20 text-base font-normal tracking-tight text-darkPrimary">{product.depth}</p>
                </div>



              </div>
            </div>

             {/* stock */}
            <div className="flex justify-between items-center">
         
              <div className="flex flex-col md:flex-row">
                <h2 className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-darkPrimary">Stock&#58;</h2>
                <h2 className="mr-3 scroll-m-20 text-base font-normal tracking-tight text-darkPrimary">{product.quantity}</h2>
              </div>

            </div>

            {/* divider */}
            <div className="divider"></div>

            {/* price */}
            <div className="flex items-center justify-between">
              <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-darkPrimary">
                &#36;&nbsp;{product.price}
              </span>

              {/* Add to Cart Button */}

              <Button onClick={(e) => handleAddToCart(e, product)} className='bg-darkPrimary px-6 py-4 text-myWhite rounded hover:bg-myPrimary focus:bg-black'>
                <FaCartShopping className='text-myWhite hover:text-darkPrimary' />
                Add to Cart</Button>
            </div>
   
          </div>
        </div>
      </div>
      <Link href={"/ProductListing"}>
      <div className='flex items-center justify-center gap-2 mb-12 mt-12 md:mt-2 group'>
        <div><FaArrowLeft className='text-darkPrimary group-hover:text-myPrimary duration-300 rounded cursor-pointer'/></div>
      <p className='scroll-20 text-lg font-normal tracking-tight text-darkPrimary group-hover:text-myPrimary duration-300 rounded cursor-pointer'>Back to shopping</p>
      </div>
      </Link>
    </section>
  );
};

export default ProductDetails;
