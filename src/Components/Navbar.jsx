// import context
import { useContext,useState,useEffect } from "react";
import { sidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../img/logo.svg";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(sidebarContext);
  const [isActive, setIsActive] = useState(true);
  const {itemAmount} = useContext(CartContext);


// event listener
useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  });
});



  return (
    <nav className={`${isActive ? 'bg-white shadow-md py-4' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>

    <div className=" flex justify-between items-center container mx-auto relative ">
    <Link to="/">
      <img className="w-[40px]" src={Logo} alt="logo" />
    </Link>
      <div className=" cursor-pointer relative">
        <BsBag onClick={() => setIsOpen(!isOpen)} 
        className=" text-2xl" />
       <div className='bg-red-500 absolute -bottom-2 -right-2 text-[13px] w-[18px] h-[18px]
        text-white rounded-full flex justify-center items-center'>
                 {itemAmount}
          </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
