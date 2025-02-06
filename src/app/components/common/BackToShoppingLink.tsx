import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

function BackToShoppingLink() {
  return (
    <div>
         <Link href={"/ProductListing"}>
      <div className='flex items-center gap-2 my-12 group'>
        <div><FaArrowLeft className='text-darkPrimary group-hover:text-myPrimary duration-300 rounded hove:scale-105 cursor-pointer'/></div>
      <p className='scroll-20 text-lg font-normal tracking-tight text-darkPrimary group-hover:text-myPrimary duration-300 rounded hove:scale-105 cursor-pointer'>Back to shopping</p>
      </div>
      </Link>
    </div>
  )
}

export default BackToShoppingLink