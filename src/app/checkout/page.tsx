"use client"
import React, { useEffect, useState } from 'react'
import { getCartItems } from '../action/actions'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { IProducts } from '@/types/productTypes'
import BackToShoppingLink from '../components/common/BackToShoppingLink'
import Swal from 'sweetalert2'
import { client } from '@/sanity/lib/client'
import { useRouter } from 'next/navigation';


const Checkout = () => {

    const [cartItems, setCartItems] = useState<IProducts[]>([]);
    const [delivery, setDelivery] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        contact: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        zipCode: false,
        contact: false,
        email: false,
    });

    const router = useRouter();
    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDelivery = localStorage.getItem("appliedDelivery");
        if (appliedDelivery) {
            setDelivery(Number(appliedDelivery));
        }
    }, []);

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const total = Math.max(subtotal + delivery, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            address: !formValues.address,
            city: !formValues.city,
            zipCode: !formValues.zipCode,
            contact: !formValues.contact,
            email: !formValues.email,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = async () => {
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
                if (validateForm()) {
                    localStorage.removeItem("appliedDelivery");
                    Swal.fire(
                        "Success!",
                        "Your order has been successfully processed!",
                        "success"
                    );
                    router.push(`/Payments?amount=${total}`);

                } else {
                    Swal.fire(
                        "Error!",
                        "Please fill in all the fields before proceeding!",
                        "error"
                    );

                }


            };

        });


        const orderData = {
            _type: "order",
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipcode: formValues.zipCode,
            contact: formValues.contact,
            email: formValues.email,
            cartItems: cartItems.map(item => ({
                _type: "reference",
                _ref: item._id,

            })),
            total: total,
            delivery: delivery,
            orderDate: new Date().toISOString
        };
        try {
            await client.create(orderData)
            localStorage.removeItem("appliedDelivery")
        }
        catch (error) {
            console.error("error creating order", error)
        };



    }



    return (
        <div>
            <div className='w-[90%] mx-auto mt-6 mb-12 font-montserrat'>
                <BackToShoppingLink />
            </div>

            <div className='w-[92%] mx-auto my-12 grid grid-cols-1 lg:grid-cols-2 gap-10'>



                {/*Order Summary */}
                <div>


                    <div className='bg-borderGray p-5 lg:mt-0 mt-8 rounded-xl'>
                        <h2 className='scroll-m-20 text-xl font-semibold tracking-tight uppercase text-darkPrimary'>Order Summary</h2>



                        {/* Divider */}
                        <div className="divider mt-0 mb-1"></div>

                        {/* Product Image */}
                        {cartItems.length > 0 ?

                            (cartItems.map((item) => (

                                <div key={item._id} className='flex justify-between my-2 bg-borderDark rounded-xl p-5'>
                                    <div className='flex gap-6 capitalize'>
                                        <div className='overflow-hidden h-20 w-20'>
                                            <Image src={urlFor(item.image).url()}
                                                alt={item.name}
                                                width={400}
                                                height={400}
                                                className='w-full h-full object-cover' />
                                        </div>

                                        <div>

                                            <div className='scroll-m-20 text-base font-medium tracking-tight uppercase text-darkPrimary'>
                                                <h2>{item.name}</h2>
                                            </div>
                                            {/* Qty */}

                                            <div className='capitalize text-sm font-normal tracking-tight text-darkPrimary'>
                                                <h2>Quantity:&nbsp;<span>{item.quantity}</span></h2>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='capitalize text-base font-semibold tracking-tight text-darkPrimary'>
                                        <h2>&#36;<span>{item.price}</span></h2>
                                    </div>



                                </div>


                            ))
                            ) : (
                                <p className="scroll-20 text-3xl font-semibold tracking-tight my-4 text-darkPrimary">Your cart is empty</p>
                            )}



                        {/* Divider */}
                        <div className="divider mt-0 mb-1"></div>

                        {/* Gross Total */}
                        <div className='flex items-center justify-between capitalize text-base font-semibold tracking-tight text-darkPrimary'>
                            <h2>sub total</h2>
                            <h2><span>&#36;</span>{subtotal}</h2>
                        </div>

                        {/* Delivery Charges */}
                        <div className='flex items-center justify-between capitalize text-base font-semibold tracking-tight text-darkPrimary'>
                            <h2>delivery charges</h2>
                            <h2><span>&#36;</span>{delivery}</h2>
                        </div>

                        {/* Divider */}
                        <div className="divider mt-0 mb-1"></div>

                        {/* Total */}
                        <div className='flex items-center justify-between capitalize text-lg font-semibold tracking-tight text-darkPrimary'>
                            <h2>total</h2>
                            <h2><span>&#36;</span>{total}</h2>
                        </div>
                    </div>
                </div>




                {/* Billing Form */}
                <div className="bg-borderGray p-5 lg:mt-0 mt-8 rounded-xl font-montserrat">
                    <h2 className="scroll-m-20 text-xl font-semibold tracking-tight uppercase text-darkPrimary">
                        Billing Information
                    </h2>

                    {/* Divider */}
                    <div className="divider mt-0 mb-1"></div>

                    <div className="space-y-2 text-darkPrimary font-normal">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                placeholder="  Enter your first name"
                                value={formValues.firstName}
                                onChange={handleInputChange}
                                className="w-full bg-borderDark rounded-md py-1.5"
                            />
                            {formErrors.firstName && (
                                <p className="text-sm text-red-500">
                                    First name is required.
                                </p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="lastName"> Last Name </label>
                            <input
                                id="lastName"
                                placeholder="  Enter your last name"
                                value={formValues.lastName}
                                onChange={handleInputChange}
                                className="w-full bg-borderDark rounded-md py-1.5"
                            />
                            {formErrors.lastName && (
                                <p className="text-sm text-red-500">
                                    Last name is required.
                                </p>
                            )}
                        </div>


                        <div>
                            <label htmlFor="address">Address </label>
                            <input
                                id="address"
                                placeholder="  Enter your address"
                                value={formValues.address}
                                onChange={handleInputChange}
                                className="w-full bg-borderDark rounded-md py-1.5"
                            />
                            {formErrors.address && (
                                <p className="text-sm text-red-500">Address is required.</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                placeholder="  Enter your city"
                                value={formValues.city}
                                onChange={handleInputChange}
                                className="w-full bg-borderDark rounded-md py-1.5"
                            />
                            {formErrors.city && (
                                <p className="text-sm text-red-500">City is required.</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="zipCode">Zip Code</label>
                            <input
                                id="zipCode"
                                placeholder="  Enter your zip code"
                                value={formValues.zipCode}
                                onChange={handleInputChange}
                                className="w-full bg-borderDark rounded-md py-1.5"
                            />
                            {formErrors.zipCode && (
                                <p className="text-sm text-red-500">Zip Code is required.</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="phone">Contact</label>
                            <input
                                id="contact"
                                placeholder="  Enter your phone number"
                                value={formValues.contact}
                                onChange={handleInputChange}
                                className="w-full bg-borderDark rounded-md py-1.5"
                            />
                            {formErrors.contact && (
                                <p className="text-sm text-red-500">Phone is required.</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                placeholder="  Enter your email address"
                                value={formValues.email}
                                onChange={handleInputChange}
                                className="w-full bg-borderDark rounded-md py-1.5"
                            />
                            {formErrors.email && (
                                <p className="text-sm text-red-500">Email is required.</p>
                            )}
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-full mt-4'>
                        <Button onClick={handlePlaceOrder}
                            className='bg-darkPrimary px-6 py-5 scroll-m-20 text-sm font-semibold tracking-wider uppercase
                              text-myWhite rounded hover:bg-myPrimary focus:bg-black w-full'>
                            Place Order</Button>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default Checkout