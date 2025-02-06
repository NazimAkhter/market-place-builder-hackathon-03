import Link from 'next/link';
import Image from 'next/image';
import Button from '@/app/components/common/MyButton'


export default function AboutService() {
    return (
        <section className='w-full'>
            <div className='md:h-10/12 flex flex-col md:flex-row gap-0'>

                <div className='overflow-hidden md:w-1/2 w-full'>
                    <Image src="/about services.jpg" alt='Sofa Image' width={720} height={540} className='w-full hover:scale-125 duration-500 object-cover object-center'></Image>
                </div>


                <div className='md:w-1/2 bg-borderGray flex flex-col md:items-start items-center md:text-left text-center justify-between'>
                    <h2 className='text-darkPrimary text-2xl font-montserrat md:w-[70%] w-[80%] md:ml-[84px] my-12'>
                        Our service isn&apos;t just personal, it&apos;s actually
                        hyper personally exquisite</h2>

                    <h2 className='text-darkPrimary text-base font-light font-montserrat md:w-[80%] w-[92%] md:text-left text-center md:ml-[84px]'>
                        When we started De&apos;Cor, the idea was simple. Make high quality furniture
                        affordable and available for the mass market. <br /> <br />
                        Handmade, and lovingly crafted furniture and homeware is what we live,
                        breathe and design so our Chelsea boutique become the hotbed for the
                        London interior design community.</h2>

                    <div className='md:ml-[84px] my-8 bg-myWhite'>
                        <Link href="/ProductListing"><Button title='Get in touch' /></Link>
                    </div>

                </div>





            </div>
        </section>
    )
}
