import useShoppingCartStore from '../../../entities/ShoppingCart/ShoppingCart';
import { Product } from '../../../shared/types/Product';

const CartProduct = ({ product }: { product: Product }) => {
  const { Name, Id, Сurrency, Price, Quantity, Images } = product;

  const setQuantityInc = useShoppingCartStore(({ setQuantityInc }) => setQuantityInc);
  const setQuantityDec = useShoppingCartStore(({ setQuantityDec }) => setQuantityDec);
  const deleteProduct = useShoppingCartStore(({ deleteProduct }) => deleteProduct);

  const handleIncrease = () => setQuantityInc(Id);
  const handleDecrease = () => setQuantityDec(Id);
  const handleDelete = () => deleteProduct(Id);

  return (
    <tr key={Id}>
      <td>
        {Quantity}
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleDelete}>Удалить</button>
      </td>
      <td>
        <h3>{Name}</h3>
      </td>
      <td>
        {Price}
        {Сurrency}
      </td>
      <td>
        <img src={`data:image/${Images[0].FileExtension};base64,${Images[0].Image}`} alt={Name} />
      </td>
    </tr>
  );
};

export default CartProduct;
