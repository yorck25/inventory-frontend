import React, { useEffect } from 'react'
import { InventoryHeader } from '../../components/inventory/inventoryHeader'
import { InventoryItemList } from '../../components/inventory/inventoryItemList'
import { useItemContext } from '../../lib/itemContext';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faGear, faWarehouseFull } from '@fortawesome/pro-light-svg-icons';
import logo from './logo_example_1.png';

export const InventoryPage = () => {
  const navigate = useNavigate();
  const { getItemFromServer } = useItemContext();

  useEffect(() => {
    getItemFromServer();
  }, [])

  const handleNavigate = (path: String) => {
    navigate(`${path}`);
  }

  return (
    <>
      <div className={style.main_page_desktop}>
        <div className={style.sidebar}>
          <div className={style.logo_container}>
            {/* <div className={style.logo}>logo contianer</div> */}
            <img className={style.logo} src={logo}/>
          </div>

          <div className={style.navigation_stacks}>
            <ul className={style.top_navigation_list}>
              <li className={style.navigation_list_item}
                  onClick={() => handleNavigate("/inventory")}
              ><FontAwesomeIcon icon={faWarehouseFull} className={style.icon}/><span>Inventory</span></li>
            </ul>

            <ul className={style.bottom_navigation_list}>
              <li className={style.navigation_list_item}
                  // onClick={() => handleNavigate("/settings")}
              ><FontAwesomeIcon icon={faGear} className={style.icon}/><span>Settings</span></li>
              
              <li className={style.navigation_list_item}
                  onClick={() => (
                      handleNavigate("/login"),
                      localStorage.removeItem("token")
              )}
              ><FontAwesomeIcon icon={faArrowRightFromBracket} className={style.icon}/><span>Logout</span></li>
            </ul>
          </div>
        </div>
        <div className={style.content}>
          <InventoryHeader/>
          <InventoryItemList/>
        </div>
      </div>
    </>
  )
}