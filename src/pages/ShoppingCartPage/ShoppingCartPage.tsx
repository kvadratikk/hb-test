import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import { useEffect } from 'react';
import useShoppingCartStore from '../../entities/ShoppingCart/ShoppingCart';
import CartProduct from './Product/Product';

import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import styles from './ShoppingCartPage.module.scss';

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
    <section className={styles.page}>
      <Button variant='outlined' onClick={deleteProducts}>
        Очистить корзину
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Количество</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Цена одного товара</TableCell>
            <TableCell>Фото</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product) => (
            <CartProduct product={product} key={product.Id} />
          ))}
        </TableBody>
      </Table>

      <div>
        <div>Количество товаров: {TotalProducts}</div>
        <div>
          Общая стоимость корзины: {Total}
          {currency}
        </div>
        <div>Персональная скидка: {Discount}</div>
        <Button variant='outlined' type='submit'>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
