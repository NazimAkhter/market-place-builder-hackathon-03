import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/common/MyButton'


export default function AboutComponents() {
    return (
        <section className='mx-auto'>
            <div className='flex flex-col-reverse md:flex-row gap-0'>
                <div className='md:w-1/2 w-full bg-darkPrimary flex flex-col items-start md:justify-between '>
                    <h2 className='text-myWhite text-4xl font-montserrat text-left my-12 ml-6 md:ml-16'>
                    It started with a small idea</h2>

                    <h2 className='text-myWhite md:text-xl text-lg w-[80%]  font-light font-montserrat text-left ml-6 md:ml-16'>
                    A global brand with local beginnings, our story begain in a small studio in South London in early 2014</h2>

                    <div className='md:ml-16 ml-6 my-12'>
                    <Link href="/ProductListing"><Button title='View collection'/></Link>
                    </div>

                </div>


                <div className=' overflow-hidden md:w-1/2 w-full'>
                    <Image src="/sofa.jpg" alt='' width={768} height={478} className='hover:scale-110 md:w-full duration-500 object-cover'></Image>
                </div>


            </div>
        </section>
    )
}

