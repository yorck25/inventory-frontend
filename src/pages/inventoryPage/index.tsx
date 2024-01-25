import { useEffect } from 'react'
import { InventoryHeader } from '../../components/inventory/inventoryHeader'
import { InventoryItemList } from '../../components/inventory/inventoryItemList'
import { useItemContext } from '../../lib/itemContext';
import style from './style.module.scss';
import { Sidebar } from '../../components/sidebar';

export const InventoryPage = () => {
  const { getItemFromServer, orgaId } = useItemContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orgaId: string | null = urlParams.get('id');

    getItemFromServer(orgaId!);
  }, [orgaId])

  return (
    <div className={style.main_page_desktop}>
      <Sidebar />
      <div className={style.content}>
        <InventoryHeader />
        <InventoryItemList />
      </div>
    </div>
  )
}
