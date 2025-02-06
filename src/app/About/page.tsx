import Link from "next/link";
import AboutComponents from "../components/AboutComponents";
import AboutService from "../components/AboutService";
import Button from "../components/common/MyButton";
import TrustedBrand from "../components/TrustedBrand";
import Signup from "../components/SignupSection";



export default function About() {
    return (
        <div className="mx-auto">

            <div className="w-[90%] mx-auto md-mx-0 md:h-[277px] flex flex-col md:flex-row justify-between md:items-center items-start pt-8 md:pt-16">
                <div className=" md:w-2/3 md:h-[178px]">
                    <h2 className="font-montserrat lg:text-[28px] text-[32px] lg:ml-[110px] lg:mx-auto">A brand built on the love of craftmanship,<br />
                        quality and outstanding customer service</h2>
                </div>
                <div className="md:mr-[128px] md:mb-[78px] md:my-0 my-12">
                    <Link href="/ProductListing"><Button title='View collection' /></Link>

                </div>
            </div>
            <AboutComponents />
            <AboutService />
            <TrustedBrand />
            <Signup />

        </div>
    )
}
