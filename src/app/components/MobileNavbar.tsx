import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CircleUserRound, Menu } from 'lucide-react';
import ShoppingCardBasket from './common/ShoppingCardBasket';




function MobileNavbar() {
    return (
        <div className="h-[69px] flex items-center justify-between ">
            <h1 className='font-montserrat text-[#22202E] text-2xl leading-[29.52px] pl-6'>De&apos;Cor</h1>
            <div className='flex items-center justify-between gap-4 pr-8'>

                <Sheet>
                    <ShoppingCardBasket />
                    <CircleUserRound className="size-6 text-myPrimary hover:text-darkPrimary cursor-pointer mt-px" />

                    <SheetTrigger>
                        <Menu className='size-6' />
                    </SheetTrigger>
                    <SheetContent >
                        <SheetHeader>
                            <SheetDescription className="flex flex-col text-myWhite items-start mt-8 ml-3 text-base justify-between">

                                <Link href="/" className="my-2 hover:text-borderDark text-right">Home</Link>
                                <Link href="/ProductListing" className="my-2 hover:text-borderDark text-right">Product</Link>
                                <Link href="/About" className="my-2 hover:text-borderDark text-right">About us</Link>
                                <Link href="/Contact" className="my-2 hover:text-borderDark text-right">Contact</Link>


                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default MobileNavbar