import allProducts from "../data";
import { ProductCard } from "./ProductCard";

export const ProductListing = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center m-4">
      {allProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
