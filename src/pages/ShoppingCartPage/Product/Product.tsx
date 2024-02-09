import useShoppingCartStore, {
  Product,
  ShoppingCartStore,
} from '../../../entities/ShoppingCart/ShoppingCart';

const CartProduct = ({ product }: { product: Product }) => {
  const { Name, Id, Сurrency, Price, Quantity, Images } = product;

  const setQuantityInc = useShoppingCartStore((state: ShoppingCartStore) => state.setQuantityInc);
  const setQuantityDec = useShoppingCartStore((state: ShoppingCartStore) => state.setQuantityDec);
  const deleteProduct = useShoppingCartStore((state: ShoppingCartStore) => state.deleteProduct);

  return (
    <tr key={Id}>
      <td>
        {Quantity}
        <button onClick={() => setQuantityInc(Id)}>+</button>
        <button onClick={() => setQuantityDec(Id)}>-</button>
        <button onClick={() => deleteProduct(Id)}>Удалить</button>
      </td>
      <td>
        <h3>{Name}</h3>
      </td>
      <td>
        {Price}
        {Сurrency}
      </td>
      <td>
        <img src={`${Images[0].Image}.${Images[0].FileExtension}`} alt={Name} />
      </td>
    </tr>
  );
};

export default CartProduct;
