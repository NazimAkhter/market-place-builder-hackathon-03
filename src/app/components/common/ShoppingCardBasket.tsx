"use client"
import { getCartItems } from '@/app/action/actions';
import { IProducts } from '@/types/productTypes';
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function ShoppingCardBasket() {
    const [cartItems, setCartItems] = useState<IProducts[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    return (
        <div>
            <Link href={`/cart`}>

                <div tabIndex={0} className="cursor-pointer group mt-2 mr-1">
                    <div className="indicator">
                        <ShoppingCart className="size-6 group-hover:text-darkPrimary duration-300" />
                        {cartItems.length > 0 &&
                            <span className="badge badge-sm font-normal indicator-item bg-darkPrimary text-myWhite group-hover:text-myWhite group-hover:bg-darkPrimary/75">{cartItems.length}</span>
                        }
                    </div>
                </div>


            </Link>
        </div>
    )
}

export default ShoppingCardBasket