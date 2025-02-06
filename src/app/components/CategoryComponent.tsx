import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import MyButton from './common/MyButton';

function CategoryComponent() {



    return (
        <div id='category' className='w-[90%] mx-auto mt-32 md:mt-20 mb-20'>
            {/*  Heading  */}
            <h1 className="hidden md:block md:text-[32px] text-xl font-montserrat font-medium md:text-left pl-0 md:pl-1 text-center mb-4 text-darkPrimary">
                Category
            </h1>

            <div className="font-montserrat grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 sm:px-2 text-myPrimary ">


                {/* Category -1 */}
                <div className='py-5'>
                    <Link href={"/PlantPots"}>
                        {/* image */}
                        <div className="overflow-hidden rounded-xl h-96">
                            <Image
                                src="/silky-vase.jpg"
                                alt="Plant Pots"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                            />

                        </div>


                        {/* Category name */}
                        <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                            Plant Pots
                        </h2>
                    </Link>
                </div>

                {/* Category -2 */}
                <div className='py-5'>
                    <Link href={"/Ceramics"}>
                        {/* image */}
                        <div className="overflow-hidden rounded-xl h-96">
                            <Image
                                src="/rustic-vase.jpg"
                                alt="Ceramics"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                            />

                        </div>


                        {/* Category name */}
                        <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                            Ceramics
                        </h2>
                    </Link>
                </div>


                {/* Category -3 */}
                <div className='py-5'>
                    <Link href={"/Tables"}>
                        {/* image */}
                        <div className="overflow-hidden rounded-xl h-96">
                            <Image
                                src="/table.avif"
                                alt="Tables"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                            />

                        </div>


                        {/* Category name */}
                        <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                            Tables
                        </h2>
                    </Link>
                </div>

                {/* Category -4 */}
                <div className='py-5'>
                    <Link href={"/Chairs"}>
                        {/* image */}
                        <div className="overflow-hidden rounded-xl h-96">
                            <Image
                                src="/dandy-chair.jpg"
                                alt="Chairs"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                            />

                        </div>


                        {/* Category name */}
                        <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                            Chairs
                        </h2>
                    </Link>
                </div>

                {/* Category -5 */}
                <div className='py-5'>
                    <Link href={"/Crockery"}>
                        {/* image */}
                        <div className="overflow-hidden rounded-xl h-96">
                            <Image
                                src="/crockery.avif"
                                alt="Crockery"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                            />

                        </div>


                        {/* Category name */}
                        <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                            Crockery
                        </h2>
                    </Link>
                </div>


                {/* Category -6 */}
                <div className='py-5'>
                    <Link href={"/Tableware"}>
                        {/* image */}
                        <div className="overflow-hidden rounded-xl h-96">
                            <Image
                                src="/table-ware.avif"
                                alt="Tableware"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                            />

                        </div>


                        {/* Category name */}
                        <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                            Tableware
                        </h2>
                    </Link>
                </div>

                {/* Category -7 */}
                <div className='py-5'>
                    <Link href={"/Cutlery"}>
                        {/* image */}
                        <div className="overflow-hidden rounded-xl h-96">
                            <Image
                                src="/cutlery.avif"
                                alt="Cutlery"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover duration-500 transform hover:scale-125 rounded-xl"
                            />

                        </div>


                        {/* Category name */}
                        <h2 className="scroll-m-20 text-lg lg:text-xl font-medium tracking-tight text-darkPrimary mt-2">
                            Cutlery
                        </h2>
                    </Link>
                </div>


            </div>
            <div className='flex justify-center mt-14'>
                <Link href="/ProductListing">
                    <MyButton title="All Products" />
                </Link>
            </div>


        </div>
    )
}

export default CategoryComponent