import { useSelector, useDispatch } from "react-redux";
import { order, restock } from "./productSlice";

const ProductView = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Products</h3>
      {Object.keys(products).map((product) => (
        <div key={product}>
          <h4>
            {product} - {products[product]}
          </h4>
          <button onClick={() => dispatch(order({ product, quantity: 1 }))}>
            Buy {product}
          </button>
          <button onClick={() => dispatch(restock({ product, quantity: 1 }))}>
            Restock {product}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductView;
