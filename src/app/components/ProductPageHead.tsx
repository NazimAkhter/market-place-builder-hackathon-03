
import Image from 'next/image'

function ProductPageHead() {
  return (
    <div className="hero min-h-64 mb-20 font-montserrat">
    {/* Image */}
    <div className='h-64'>
        <Image src="/product image.jpg" alt="Title Image" width={1600} height={250} className="w-full h-full object-cover" />
    </div>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-3xl lg:text-6xl font-semibold tracking-normal text-myWhite">All Products</h1>
      
      
    </div>
  </div>
</div>
  )
}

export default ProductPageHead