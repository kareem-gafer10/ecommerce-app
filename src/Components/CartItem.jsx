// import context
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, image, price, amount } = item;
  const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);




  return (


    <>
      <div className="flex items-center py-5 gap-x-4 border-b">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[90px]" src={image} alt="img" />
        </Link>

        <div className="w-full">
          {/* title and close icon */}
          <div className="flex items-center justify-between">
            <h5 className="text-sm uppercase font-medium text-primary">
              {title.slice(0, 25)}
            </h5>
            <IoMdClose onClick={()=>removeFromCart(id)}
             className="text-gray-500 hover:text-red-500 transition text-xl cursor-pointer" />
          </div>

          <div className="flex justify-between gap-x-3 mt-5 flex-col sm:flex-row">
          
            <div className=" flex items-center ">
              {/* minus icon */}
              <button className="bg-gray-300 text-gray-700 rounded-md  px-2  py-1">
                <IoMdRemove onClick={()=>decreaseAmount(id)}/>
              </button>

              {/* amount */}
              <h5 className="bg-gray-100 text-gray-700 rounded-md mx-2  p-3 py-1  font-medium">
                {amount}
              </h5>

              {/* plus icon */}
              <button className="bg-gray-300 text-gray-700 rounded-md px-2  py-1">
                <IoMdAdd onClick={()=>increaseAmount(id)}/>
              </button>
 
            </div>

            {/* price */}
            
              <span className="text-gray-500 font-light mt-1">${price}</span>
            
              <span className=" text-primary font-medium mt-1">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
              </span>
            



          </div>
        </div>


        
      </div>
    </>
  );
};

export default CartItem;
