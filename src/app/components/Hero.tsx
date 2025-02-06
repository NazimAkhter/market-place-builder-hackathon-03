import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/common/MyButton";
import SelectButton from "./common/SelectButton";

function Hero() {
  return (
    <section>
      <div className="md:w-[92%] w-full my-5 bg-darkPrimary md:my-[60px] mx-auto flex flex-col md:flex-row justify-between">
        
        <div className="md:h-auto h-full md:w-1/2 ">

          <div className="flex flex-col md:justify-between justify-around items-start md:my-20 h-[96%] 
          my-auto md:h-4/5 w-[92%] md:w-4/5 mx-auto">
            <h2 className="text-myWhite text-[38px] md:py-0 py-9 md:text-4xl md:leading-none leading-tight font-montserrat md:tracking-wide">
              The furniture brand for the future, with timeless designs
            </h2>
            <div>
              <Link href="/ProductListing">
                <Button title="View collection" />
              </Link>
            </div> 
            <h2 className="text-lg md:py-0 py-9 font-normal md:tracking-normal tracking-wide font-montserrat text-myWhite">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </h2>
          </div>
        </div>

        <div className="md:w-1/2 md:block hidden overflow-hidden">
          <Image
            src="/chair.jpg"
            alt=""
            width={520}
            height={584}
            className="md:w-full md:h-full "
          ></Image>
        </div>
      </div>

      {/* select button categories for mobile  */}
      <div className="block lg:hidden mt-72">
             <SelectButton />
           </div>
    </section>
  );
}

export default Hero;
