import SignupComponents from "./SignupComponents";

export default function SignupSection() {
  return (
    <div className="w-full md:h-[50vh] flex flex-col items-center justify-evenly bg-borderDark">

      <div className="w-[92%] md:h-[65%] h-[45%] flex flex-col justify-center pt-12 md:pt-0">
        <h1 className="text-center lg:text-4xl text-[20px] font-montserrat ">
          Join the club and get the benefits
        </h1>

        <h2 className="md:w-[32%] md:mx-auto mt-5 text-center lg:text-base text-[12px] font-montserrat">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </h2>

      </div>
      <div className="py-12">
        <SignupComponents />
      </div>  
    </div>
  );
}
