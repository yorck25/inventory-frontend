import { useState } from 'react';
import style from './style.module.scss';
import { InventoryCreateItemModal } from '../inventoryCreateItemModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/pro-light-svg-icons';


export const InventoryHeader = () => {
  const [isHiddenState, setIsHidden] = useState<boolean>(true);

  const toggle = () => setIsHidden(!isHiddenState);

  return (
    <div className={style.inventory_header}>
      <div className={style.button_add_container}>
        <button className={style.button_add} onClick={toggle}>Add new item</button>
        {isHiddenState && <InventoryCreateItemModal toggle={() => toggle()} />}
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