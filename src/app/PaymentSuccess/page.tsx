import BackToShoppingLink from "../components/common/BackToShoppingLink"
import { PiCheckCircleBold } from "react-icons/pi";

interface IParams {
    searchParams: {
        amount: number
    }
}

const PaymentSuccess = ({ searchParams }: IParams) => {
    
    return (
        <div className="w-[92%] mx-auto mb-12 font-montserrat">
            <BackToShoppingLink/>
            <PiCheckCircleBold  className="text-myPrimary size-24 mx-auto"/>
            <h1 className="text-5xl py-4 font-semibold text-darkPrimary text-center uppercase">Thank you</h1>
            <h1 className="text-3xl py-1 text-myPrimary text-center">Your payment has been processed.</h1>
            <h1 className="text-3xl py-1 text-myPrimary text-center">Get ready to enjoy your new purchase.</h1>

        </div>
    )
}

export default PaymentSuccess
