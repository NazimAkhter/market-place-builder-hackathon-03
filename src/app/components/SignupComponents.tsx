
import React from 'react'
import MyButton from './common/MyButton'

function SignupComponents() {
  return (
    <form >

      <fieldset>

        <label>
          <span className="text-myWhite">Join our mailing list</span>
        </label>

        <div className='flex flex-col sm:flex-row pt-2'>

          {/* input */}
          <input
            type="text"
            placeholder="username@site.com"
            className="rounded py-3 px-12 md:px36 bg-borderGray text-darkPrimary" />


          {/* Button */}
          <div className='text-center md:text-left mt-2 sm:mt-0 '>
            <MyButton title="Sign up" />
          </div>
        </div>

      </fieldset>
    </form>
  )
}

export default SignupComponents