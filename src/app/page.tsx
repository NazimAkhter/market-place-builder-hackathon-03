
import Bio from "./components/Bio";
import CategoryComponent from "./components/CategoryComponent";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import SignupSection from "./components/SignupSection";
import TrustedBrand from "./components/TrustedBrand";





export default function Home() {
  return (
    <div>
     <Hero />
     <TrustedBrand/>
     <CategoryComponent />
     <Popular/>
     <SignupSection /> 
     <Bio />
    
    </div>
  );
}
