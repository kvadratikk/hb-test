import { MenuItem, MenuList } from '@mui/material';

import classNames from 'classnames';
import { useState } from 'react';
import styles from './Dropdown.module.scss';

type DropdownItem = {
  item?: string | JSX.Element;
  key: string | number;
};

type DropdownProps = {
  button?: string | JSX.Element;
  items: DropdownItem[];
};

const Dropdown = ({ items, button }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleClickBtn = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.btn} onClick={handleClickBtn}>
        {button}
      </button>
      <div
        className={classNames(styles.list, {
          [styles.open]: open,
        })}>
        <MenuList>
          {items.map(({ item, key }) => (
            <MenuItem className={styles.item} key={key}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </div>
    </div>
  );
};

export default Dropdown;
