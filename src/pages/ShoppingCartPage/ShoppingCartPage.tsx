import { useEffect } from 'react';
import useShoppingCartStore from '../../entities/ShoppingCart/ShoppingCart';
import CartProduct from './Product/Product';

const ShoppingCartPage = () => {
  const products = useShoppingCartStore(({ products }) => products);
  const currency = useShoppingCartStore(({ currency }) => currency);
  const { TotalProducts, Total, Discount } =
    useShoppingCartStore(({ basketSummary }) => basketSummary) || {};

  const getProducts = useShoppingCartStore(({ getProducts }) => getProducts);
  const deleteProducts = useShoppingCartStore(({ deleteProducts }) => deleteProducts);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  }, [products, getProducts]);

  return (
    <section>
      <button onClick={deleteProducts}>Очистить корзину</button>

      <table>
        <thead>
          <tr>
            <th>Количество</th>
            <th>Название</th>
            <th>Стоимость единицы товара</th>
            <th>Фото</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <CartProduct product={product} key={product.Id} />
          ))}
        </tbody>
      </table>

      <div>Количество товаров: {TotalProducts}</div>
      <div>
        Общая стоимость корзины: {Total}
        {currency}
      </div>
      <div>Персональная скидка: {Discount}</div>
      <button type='submit'>Оформить заказ</button>
    </section>
  );
};

export default ShoppingCartPage;
