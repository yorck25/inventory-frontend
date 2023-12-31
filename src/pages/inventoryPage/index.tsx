import React from 'react'
import { InventoryHeader } from '../../components/inventory/inventoryHeader'
import { InventoryItemList } from '../../components/inventory/inventoryItemList'

export const InventoryPage = () => {
  return (
    <div>
      <InventoryHeader/>
      <InventoryItemList/>
    </div>
  )
}
