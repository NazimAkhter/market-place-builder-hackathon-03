import Link from 'next/link';
import ShoppingCardBasket from './common/ShoppingCardBasket';
import { CircleUserRound } from 'lucide-react';

export default function NavigationAbout() {
    return (
        <div >

            <header className=" text-myPrimary font-normal mx-auto font-montserrat h-[70px]">


                <div className='w-[98%] mx-auto flex items-center py-3 justify-between'>
                    <h1 className='font-montserrat text-darkPrimary text-4xl leading-[29.52px] ml-10'>De&apos;Cor</h1>

                    <nav className="flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-darkPrimary">Home</Link>
                        <Link href="/ProductListing" className="mr-5 hover:text-darkPrimary">Product</Link>
                        <Link href="/About" className="mr-5 hover:text-darkPrimary">About us</Link>
                        <Link href="/Contact" className="mr-5 hover:text-darkPrimary">Contact</Link>

                        <div className="mr-10 flex flex-wrap items-center text-base justify-center gap-5 ">

                            {/* Cart Link */}

                            
                            <ShoppingCardBasket />

                            {/* User Link */}

                            <CircleUserRound className="size-6 text-myPrimary hover:text-darkPrimary cursor-pointer mt-px" />


                        </div>

                    </nav>

                </div>
                <hr className='border-borderDark border' />
            </header>

        </div>
    )
}
