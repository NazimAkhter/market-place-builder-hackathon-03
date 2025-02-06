import { Button } from '@/components/ui/button'
import React from 'react'


function MyButton( { title,  }:{ title?:string ,  } ) {
  return (
   
    <div>
      <Button className='px-8 py-6 text-base md:text-lg font-normal bg-myPrimary/90 text-myWhite hover:bg-myPrimary duration-300 rounded text-center hove:scale-105 cursor-pointer'> {title} </Button>
    </div>
  )
}

export default MyButton
