import style from './style.module.scss';
import dummyImage from './2188303_P.webp';
import { useEffect, useState } from 'react';
import { useItemContext } from '../../../lib/itemContext';
import { IItem } from '../../../models/itemModel';

export const InventoryItemList = () => {
  const { itemList } = useItemContext();
  const [groupedList, setGroupedList] = useState<any>([]);

  const [openItems, setOpenItems] = useState<String[]>([]);

  const toggleItem = (id: String) => {
    if (openItems.includes(id)) return setOpenItems(openItems.filter((itemId) => itemId !== id));

    setOpenItems([...openItems, id]);
  };

  useEffect(() => {
    if (!itemList) return;

    const groupedItems = itemList.reduce((acc: any, currentItem: IItem) => {
      const existingItem = acc.find((item: any) => item[0].item === currentItem.item);
      if (existingItem) {
        existingItem.push(currentItem);
      } else {
        acc.push([currentItem]);
      }
      return acc;
    }, []);

    setGroupedList(groupedItems);
  }, [itemList]);

  return (
    <div className={style.inventory_item_list}>
      {
        itemList?.length === 0 ? (
          <div>No Items</div>
        ) : (
          <div>
            {groupedList.map((group: any, index: number) => (
              <div key={index}>
                <div className={style.inventory_list_item}>
                  <div className={style.item_info_container}>
                    <img className={style.item_image} src={dummyImage} alt="item image" />
                    <p className={style.item_name}>{group[0].item}</p>
                  </div>
                  <button onClick={() => toggleItem(group[0]._id)} className={style.open_detail_button}>
                    {openItems.includes(group[0]._id) ? 'v' : '^'}
                  </button>
                </div>
                {openItems.includes(group[0]._id) && (
                  <div className={style.item_detail_container}>
                    <ul>
                      {group.map((item: IItem, index: number) => (
                        <li key={index}>{item._id} || {item.item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};