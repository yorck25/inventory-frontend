import React, { useEffect } from 'react'
import { InventoryHeader } from '../../components/inventory/inventoryHeader'
import { InventoryItemList } from '../../components/inventory/inventoryItemList'
import { ItemContextProvider, useItemContext } from '../../lib/itemContext';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

export const InventoryPage = () => {
  const navigate = useNavigate();
  const { itemList, setItemList, getItemFromServer } = useItemContext();

  useEffect(() => {
    getItemFromServer();
  }, [])

  const handleNavigate = (path: String) => {
    navigate(`/${path}`);
  }

  return (
    <>
      <div className={style.main_page_desktop}>
        <div className={style.sidebar}>
          <div className={style.logo_container}>
            <div className={style.logo}>logo contianer</div>
            {/* <img /> */}
          </div>

          <div className={style.navigation_stacks}>
            <ul className={style.top_navigation_list}>
              <li onClick={() => handleNavigate("/inventory")}>Inventory</li>
              <li>navigation link</li>
              <li>navigation link</li>
            </ul>

            <ul className={style.bottom_navigation_list}>
              <li onClick={() => (
                console.log("logout"),
                handleNavigate("/login"),
                localStorage.removeItem("token")
                )}
              >logout</li>
            </ul>
          </div>
        </div>
        <div className={style.content}>
          <InventoryHeader />
          <InventoryItemList />
        </div>
      </div>
    </>
  )
}