import { useEffect, useState } from 'react'
import { InventoryHeader } from '../../components/inventory/inventoryHeader'
import { InventoryItemList } from '../../components/inventory/inventoryItemList'
import { useItemContext } from '../../lib/itemContext';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { GetDefaultHeader, HTTPMethods } from '../../lib/networkAdapter';
import { Sidebar } from '../../components/sidebar';

export const InventoryPage = () => {
  const { getItemFromServer } = useItemContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orgaId: string | null = urlParams.get('id');

    console.log(orgaId);
    getItemFromServer(orgaId!);
  }, [])

  return (
    <>
      <div className={style.main_page_desktop}>
        <Sidebar />
        <div className={style.content}>
          <InventoryHeader />
          <InventoryItemList />
        </div>
      </div>
    </>
  )
}

function getTokenLocalStorage(): string {
  throw new Error('Function not implemented.');
}
