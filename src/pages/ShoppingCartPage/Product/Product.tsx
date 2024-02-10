import { Button } from '@mui/material';
import useShoppingCartStore from '../../../entities/ShoppingCart/ShoppingCart';
import { Product } from '../../../shared/types/Product';
import BaseImage from '../../../shared/ui/BaseImage/BaseImage';

import styles from './Product.module.scss';

const CartProduct = ({ product }: { product: Product }) => {
  const { Name, Id, Сurrency, Price, Quantity, Images } = product;

  const setQuantityInc = useShoppingCartStore(({ setQuantityInc }) => setQuantityInc);
  const setQuantityDec = useShoppingCartStore(({ setQuantityDec }) => setQuantityDec);
  const deleteProduct = useShoppingCartStore(({ deleteProduct }) => deleteProduct);

  const handleIncrease = () => setQuantityInc(Id);
  const handleDecrease = () => setQuantityDec(Id);
  const handleDelete = () => deleteProduct(Id);

  return (
    <div key={Id} className={styles.product}>
      <h3 className={styles.name}>{Name}</h3>
      <BaseImage
        className={styles.image}
        code={Images[0].Image}
        ext={Images[0].FileExtension}
        alt={Name}
      />
      <div className={styles.quantity}>
        {Quantity}
        <Button variant='contained' onClick={handleIncrease}>
          +
        </Button>
        <Button variant='contained' onClick={handleDecrease}>
          -
        </Button>
        <Button variant='contained' onClick={handleDelete}>
          Удалить
        </Button>
      </div>
      <div>
        <div className={styles.price}>
          {Price}
          {Сurrency}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
