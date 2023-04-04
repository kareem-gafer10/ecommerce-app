// import context
  import  { useContext } from 'react';
  import { sidebarContext } from '../Context/SidebarContext';
  import { CartContext } from '../Context/CartContext';
// import link
 import { Link } from 'react-router-dom';
 // import icons
 import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
 // import components
 import CartItem from './CartItem';



const Sidebar = () => {
  const {isOpen,handleClose} = useContext(sidebarContext); 
  const {cart,clearCart,total,itemAmount} = useContext(CartContext);
  return (
    <div className={`${isOpen? "right-0" : '-right-full'}
    w-full h-full bg-white fixed top-0 shadow-2xl transition-all 
    duration-300 z-20 md:w-[55vw] xl:max-w-[30vw] px-[35px]`}>

    <div className=' flex  items-center justify-between py-6 border-b '>
    <span className=' capitalize text-sm font-semibold' >
          Shopping Bag ({itemAmount})
    </span>

      <span onClick={handleClose}
       className=' cursor-pointer '>
        <IoMdArrowForward className='text-2xl'/>
      </span>
    </div>

    <div className='flex flex-col gap-y-2 h-[355px] md:h-[800px] lg:h-[430px] px-1 
    overflow-y-auto overflow-x-hidden border-b'>
      {cart.map((item)=>(
        <CartItem item={item}  key={item.id}/>
      ))}
    </div>

    <div className=' flex justify-between items-center mt-3'>

        <div className='font-semibold capitalize text-lg'>
          <p>
            <span className='mr-2'>Total:</span>
            $ {parseFloat(total).toFixed(2)}
          </p>
        </div>

        <div onClick={clearCart}
         className='cursor-pointer  bg-red-500 text-white p-4 flex justify-center items-center text-xl'>
          <FiTrash2/>
        </div>

        

    </div>

    <Link to='/'
        className='bg-gray-200 p-4 flex  justify-center items-center my-4 text-primary w-full font-medium'>
          View cart
        </Link>

        <Link
          to='/'
          className='bg-primary p-4 flex  justify-center items-center  text-white w-full font-medium'
        >
          Checkout
        </Link>
    </div>
  )
}

export default Sidebar;