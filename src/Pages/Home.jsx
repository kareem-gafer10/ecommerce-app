import { useContext} from "react";
import Product from "../Components/Product";
import { ProductContext } from "../Context/ProductContext";
import Hero from "../Components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  // get only men's and women's clothing category
  const filteredProducts = products.filter(
    (item) =>
      item.category == "men's clothing" || item.category == "women's clothing"
  );

  

  return (
    <section>
    <Hero/>
      <div className="py-16">
        <div className="container mx-auto mt-20 font-semibold">
        <h1 className=" text-center text-5xl mb-20">All Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
