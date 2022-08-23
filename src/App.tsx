import "./App.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Cart, ProductListing } from "./components";
import { useCartContext } from "./components/CartContextProvider";

function App() {
  const navigate = useNavigate();
  const { cartState } = useCartContext();
  return (
    <div className="App">
      <header className="bg-red-100 px-4 sm:px-10 py-4 flex justify-between">
        <Link to="/" className="flex items-center relative">
          <h1 className="text-3xl font-semibold">My</h1>
          <img src="hanger.svg" alt="Logo" className=" h-10 " />
          <h1 className=" text-3xl font-semibold">Tee </h1>
        </Link>
        <div
          className="flex sm:pr-8 relative"
          onClick={() => navigate("/cart")}
        >
          <img src="/cart.svg" className="h-8" />
          <span className="flex items-center bg-red-300 h-5 px-1 rounded-[50%]  pb-[0.1rem] absolute left-5 bottom-5">
            {cartState.reduce(
              (totalProductsAcc, product) =>
                (totalProductsAcc += product.quantity),
              0
            )}
          </span>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
