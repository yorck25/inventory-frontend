import { useState } from 'react';
import style from './style.module.scss';
import { InventoryCreateItemModal } from '../inventoryCreateItemModal';

export const InventoryHeader = () => {
  const [isHiddenState, setIsHidden] = useState<boolean>(false);
  
  const toggle = () => setIsHidden(!isHiddenState);

  return (
    <div className={style.inventory_header}>
      <button className={style.button_add} onClick={toggle}>Add new item</button>
      {isHiddenState && <InventoryCreateItemModal toggle={() => toggle()} />}
    </div>
  );
};