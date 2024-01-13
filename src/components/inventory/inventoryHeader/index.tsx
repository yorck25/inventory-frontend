import { useState } from 'react';
import style from './style.module.scss';
import { InventoryItemModal } from '../inventoryCreateItemModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/pro-light-svg-icons';


export const InventoryHeader = () => {
  const [isHiddenState, setIsHidden] = useState<boolean>(false);

  const toggle = () => setIsHidden(!isHiddenState);

  return (
    <div className={style.inventory_header}>
      <div className={style.button_add_container}>
        <button className={style.button_add} onClick={toggle}>Add new item</button>
        {isHiddenState && <InventoryItemModal toggle={() => toggle()} item={undefined} />}
      </div>

      <div className={style.controll_buttons_container}>
        <div className={style.button_container}>
          <FontAwesomeIcon icon={faBell} className={style.button_icon} />
        </div><div className={style.button_container}>
          <FontAwesomeIcon icon={faUser} className={style.button_icon} />
        </div>
      </div>
    </div>
  );
};