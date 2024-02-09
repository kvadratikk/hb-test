import { useEffect } from 'react';
import useShoppingCartStore, { ShoppingCartStore } from '../../entities/ShoppingCart/ShoppingCart';
import CartProduct from './Product/Product';

const ShoppingCartPage = () => {
  const products = useShoppingCartStore((state: ShoppingCartStore) => state.products);
  const currency = useShoppingCartStore((state: ShoppingCartStore) => state.currency);
  const basketSummary = useShoppingCartStore((state: ShoppingCartStore) => state.basketSummary);

  const getProducts = useShoppingCartStore((state: ShoppingCartStore) => state.getProducts);
  const getBasketSummary = useShoppingCartStore(
    (state: ShoppingCartStore) => state.getBasketSummary,
  );
  const deleteProducts = useShoppingCartStore((state: ShoppingCartStore) => state.deleteProducts);

  useEffect(() => {
    if (!products) {
      getProducts();
      getBasketSummary();
    }
  }, [products, getProducts, getBasketSummary]);

  return (
    <section>
      <button onClick={deleteProducts}>Очистить корзину</button>

      <table>
        <thead>
          <tr>
            <th>Количество</th>
            <th>Название</th>
            <th>Стоимость</th>
            <th>Фото</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <CartProduct product={product} key={product.Id} />
          ))}
        </tbody>
      </table>

      <div>Количество товаров: {basketSummary?.TotalProducts}</div>
      <div>
        Общая стоимость корзины: {basketSummary?.Total}
        {currency}
      </div>
      <div>Персональная скидка: {basketSummary?.Discount}</div>
      <button type='submit'>Оформить заказ</button>
    </section>
  );
};

export default ShoppingCartPage;
