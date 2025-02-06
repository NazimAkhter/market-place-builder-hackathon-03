import {
  TiSocialTwitter,
  TiSocialSkype,
  TiSocialPinterestCircular,
} from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import SignupComponents from "./SignupComponents";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-darkPrimary md:mx-auto">
      <div className="w-[90%] sm:py-10 mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 w-[92%] flex flex-wrap-reverse md:flex-row justify-between md:mt-0 mt-10 gap-12 sm:gap-32">

          <div className="text-myWhite font-montserrat leading-7">
            <h2 className="text-[18px] font-semibold font-montserrat">
              Menu
            </h2>
            <nav className="list-none mb-10 font-montserrat font-light">
              <li className="text-myWhite hover:text-borderDark text-[14px] ">
                <Link href="/" >Home</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px] ">
                <Link href="/About" >About</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="/Contact" >Contact</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="/ProductListing" >Product</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="/" >Return Policy</Link>
              </li>

            </nav>
          </div>

          <div className="text-myWhite font-montserrat leading-7">
            <h2 className="text-[18px] font-semibold font-montserrat">
              Categories
            </h2>
            <nav className="list-none mb-10 font-montserrat font-light">
              <li className="text-myWhite hover:text-borderDark text-[14px] ">
                <Link href="/Tableware" >Tableware</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px] ">
                <Link href="/Ceramics" >Ceramics</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="/Tables" >Tables</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="/Chairs" >Chairs</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="/Crockory" >Crockery</Link>
              </li>

            </nav>
          </div>

          <div className="text-myWhite font-montserrat leading-7">
            <h2 className="text-[18px] font-semibold font-montserrat">
              Our company
            </h2>
            <nav className="list-none mb-10 font-montserrat font-light">
              <li className="text-myWhite hover:text-borderDark text-[14px] ">
                <Link href="/" >Privacy</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px] ">
                <Link href="/About" >Returns policy</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="/Contact" >Vacancies</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="#popular" >Popular this week</Link>
              </li>
              <li className="text-myWhite hover:text-borderDark text-[14px]">
                <Link href="#category" >New arrivals</Link>
              </li>

            </nav>
          </div>
        </div>
        <div className="mx-auto md:mx-0 my-8 md-mt-0">
          <SignupComponents />
        </div>

      </div>
      <div >
        <hr className="bg-darkPrimary mx-auto border border-myPrimary" />
      </div>



      <div className="w-[97%] mx-auto flex items-center justify-center md:justify-between md:py-4 py-5">
        <h2 className="text-myWhite text-[14px] md:ml-12 font-normal font-montserrat ">
          Copyright 2025 De&apos;Cor LTD
        </h2>

        <div className="md:flex md:items-center md:mr-12 text-myWhite gap-3 hidden">
          <IoLogoLinkedin className="text-[17px] cursor-pointer" />
          <IoLogoFacebook className="text-[20px] cursor-pointer" />
          <SlSocialInstagram className="text-[16px] cursor-pointer" />
          <TiSocialSkype className="text-[20px] cursor-pointer" />
          <TiSocialTwitter className="text-[21px] cursor-pointer" />
          <TiSocialPinterestCircular className="text-[22px] cursor-pointer" />
        </div>
      </div>
    </div>

  );
}

export default Footer;
