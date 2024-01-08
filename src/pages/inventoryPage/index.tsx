import React, { useEffect } from 'react'
import { InventoryHeader } from '../../components/inventory/inventoryHeader'
import { InventoryItemList } from '../../components/inventory/inventoryItemList'
import { ItemContextProvider, useItemContext } from '../../lib/itemContext';


export const InventoryPage = () => {
  const { itemList, setItemList, getItemFromServer } = useItemContext();

  useEffect(() => {
    getItemFromServer();
  },[])
  
  return (
      <div>
        <InventoryHeader />
        <InventoryItemList />
      </div>
  )
}
