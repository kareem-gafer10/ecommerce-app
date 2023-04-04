
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { ProductContext } from '../Context/ProductContext';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {

  const {addToCart}  = useContext(CartContext);
  const {products}  = useContext(ProductContext);
// get the product id from the url
const { id } = useParams();

 // get the single product based on the id
 const product = products.find((item) => {
  return item.id === parseInt(id);
});

// if product is not found
if (!product) {
  return (
    <div className='h-screen flex justify-center items-center'>
      <h1 className=' text-3xl'>Loading...</h1>
    </div>
  );
}


  // destructure product
  const {title, price, description, image } = product;
  

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row items-center'>


           <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
              <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
           </div>

         <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>
                    {title}
            </h1>

            <p className='text-xl text-red-500 font-medium mb-6'>
              $ {price}
            </p>
            <p className='mb-8 lg:text-xl'>{description}</p>

            <div className=' mb-10'>
            <button onClick={()=> addToCart(product,product.id)}
              className='bg-primary py-4 px-8 text-white'>
              Add to cart
            </button>
            </div>
      </div>


        </div>

      
      </div>
    </section>
  )
}

export default ProductDetails;