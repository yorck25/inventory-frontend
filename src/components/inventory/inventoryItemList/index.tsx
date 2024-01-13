import style from './style.module.scss';
import dummyImage from './2188303_P.webp';
import { useEffect, useState } from 'react';
import { useItemContext } from '../../../lib/itemContext';
import { IItem } from '../../../models/itemModel';
import { DetailTable } from './itemDetailsTable';
import { faArrowDown, faChevronDoubleUp, faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InventoryItemList = () => {
  const { itemList } = useItemContext();
  const [groupedList, setGroupedList] = useState<IItem[]>([]);

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
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

  const getAvarageBuyPrice = (group: IItem[]) => {
    let total: number = 0;

    group.forEach((item: IItem) => {
      total += item.buy;
    });

    return (total / group.length).toFixed(2);
  };

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
                    <p className={style.item_id}>{group[0].item}</p>
                    <p className={style.item_name}>{group.length}</p>
                    <p className={style.item_name}>Ø buy price: {getAvarageBuyPrice(group)}</p>
                  </div>
                  <button onClick={() => toggleItem(group[0]._id)} className={style.open_detail_button}>
                    <FontAwesomeIcon icon={faChevronDown} className={openItems.includes(group[0]._id) ? style.toggle_icon_down : style.toggle_icon_up} />
                  </button>
                </div>
                {openItems.includes(group[0]._id) && (
                  <div className={style.item_detail_container} >
                    <DetailTable key={index} group={group} />
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