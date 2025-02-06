import SelectButton from "../components/common/SelectButton";
import ProductComponents from "../components/ProductComponents";
import ProductPageHead from "../components/ProductPageHead";

export default function ProductListing() {
  return (
   
    <div className="w-full mx-auto">
     

      <ProductPageHead />

      {/* select button categories for mobile  */}
      <div className="block lg:hidden mt-72">
        <SelectButton />
      </div>

      {/* product component card */}

    
    <ProductComponents />
   

    </div>
  );
}
