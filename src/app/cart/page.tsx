"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { IProducts } from '@/types/productTypes'
import { getCartItems, removeFromCart, updateCartQuantity } from '../action/actions'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import BackToShoppingLink from '../components/common/BackToShoppingLink'
import { useRouter } from 'next/navigation'

const Cart = () => {

  //  Add to Cart Functionality

  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to proceed?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2A254B",
      cancelButtonColor: "#4E4D93",
      iconColor: "#2A254B",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Item removed!",
          "The product has been successfully deleted from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#2A254B",
      cancelButtonColor: "#4E4D93",
      iconColor: "#2A254B",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );

        router.push("/checkout")

        setCartItems([]);
      }
    });
  };


  return (
    <div className='w-[90%] mx-auto mt-12 mb-24 font-montserrat'>
      <BackToShoppingLink />
      <div className='grid grid-cols-1 my-4'>
        {/* Item */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id}>


              <div className='flex mb-10 '>
                {/* image */}
                <div className='overflow-hidden h-40 w-40'>
                  <Image src={urlFor(item.image).url()}
                    alt={item.name} width={400} height={400} className='w-full h-full object-cover' />
                </div>

                {/* information */}
                <div className='flex px-6 justify-between items-center w-full'>
                  <div>

                    {/* title */}
                    <h2 className='text-darkPrimary text-lg font-semibold leading-none line-clamp-1'>
                      {item.name}
                    </h2>
                    {/* size */}
                    <p className='mt-2 text-sm font-semibold text-darkPrimary leading-none line-clamp-1'>
                      Size:
                    </p>
                    <p className='mt-2 text-sm font-normal text-darkPrimary leading-none'>
                      Height:&nbsp;<span>{item.height}</span></p>
                    <p className='mt-2 text-sm font-normal text-darkPrimary leading-none'>
                      Width:&nbsp;<span>{item.width}</span></p>
                    <p className='mt-2 text-sm font-normal text-darkPrimary leading-none'>
                      Depth:&nbsp;<span>{item.depth}</span></p>


                    {/* quantity */}
                    <div className='flex items-center mt-2'>
                      <Button onClick={() => handleDecrement(item._id)}
                        className='group hover:bg-borderDark bg-darkPrimary text-myWhite w-fit h-fit rounded text-sm duration-300'>
                        <FaMinus className='group-hover:text-darkPrimary h-2 w-2' />
                      </Button>

                      <div className="mr-3 ml-3 scroll-20 text-lg font-semibold tracking-tight text-darkPrimary">
                        {item.quantity}
                      </div>

                      <Button onClick={() => handleIncrement(item._id)}
                        className='group hover:bg-borderDark bg-darkPrimary text-myWhite w-fit h-fit rounded text-sm duration-300'>
                        <FaPlus className='group-hover:text-darkPrimary h-2 w-2' />
                      </Button>
                    </div>

                    {/* price and delete */}
                    <div className='lg:hidden flex flex-col items-start mt-2 gap-2'>
                      <h3 className='text-darkPrimary text-sm font-semibold leading-none line-clamp-1'>
                        <span>Price:&nbsp;</span>&#36;{item.price}</h3>
                      <FaTrash onClick={() => handleRemove(item._id)} className='text-darkPrimary text-lg font-semibold leading-none  cursor-pointer' />
                    </div>
                  </div>
                </div>
                {/* price add & delete */}
                <div className='hidden lg:flex flex-col items-end gap-5'>
                  <h3 className='text-darkPrimary text-lg font-semibold leading-none line-clamp-1'>
                    <span>Price:&nbsp;</span>&#36;{item.price}</h3>
                  <FaTrash onClick={() => handleRemove(item._id)} className='text-darkPrimary text-base font-semibold leading-none  cursor-pointer' />
                </div>


              </div>

              {/* Divider */}
              <div className="divider my-6"></div>
            </div>



          ))


        ) : (
          <p className="scroll-20 text-3xl font-semibold tracking-tight my-4 text-darkPrimary">Your cart is empty</p>
        )}

      </div>


      <div>
        {cartItems.length > 0 && (
          <div className={`bg-borderGray p-5 lg:mt-0 mt-8 rounded-xl ${cartItems.length > 0 ? "block" : "hidden"}`}>


            {/* Total */}
            < div className='flex items-center justify-between capitalize text-lg font-semibold tracking-tight text-darkPrimary'>
              <h2>total</h2>
              <h2><span>&#36;&nbsp;</span>{calculateTotal().toFixed(2)}</h2>
            </div>


            {/* Divider */}
            <div className="divider mt-0 mb-1"></div>

            {/* process */}
            <div className='flex items-center justify-center w-full'>
              <Button onClick={handleProceed} className='bg-darkPrimary px-6 py-5 scroll-m-20 text-sm font-semibold tracking-wider uppercase
                                 text-myWhite rounded hover:bg-myPrimary focus:bg-black w-full'>
                proceed</Button>
            </div>


          </div>
        )}
      </div>

    </div >
  )
}

export default Cart


