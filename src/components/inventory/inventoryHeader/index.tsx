import { useState } from 'react';
import style from './style.module.scss';
import { InventoryCreateItemModal } from '../inventoryCreateItemModal';
import "@fontsource/roboto"; 

export const InventoryHeader = () => {

  <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
      
  const [isHiddenState, setIsHidden] = useState<boolean>(false);
  
  const toggle = () => setIsHidden(!isHiddenState);

  return (
    <div className={style.inventory_header}>
      <button className={style.button_add} onClick={toggle}>Add new item</button>
      {isHiddenState && <InventoryCreateItemModal toggle={() => toggle()} />}
    </div>
  );
};