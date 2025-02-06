import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"
import NavigationAbout from "./NavigationAbout"



function Header() {
  return (
    <div>
      <div className="hidden lg:block">
        <NavigationAbout/>
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar/>
      </div>

    </div>
  )
}

export default Header