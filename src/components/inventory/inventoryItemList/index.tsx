import style from './style.module.scss';
import dummyImage from './2188303_P.webp';
import { useEffect, useState } from 'react';
import { useItemContext } from '../../../lib/itemContext';
import { IItem } from '../../../models/itemModel';
import { DetailTable } from './itemDetailsTable';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render } from '@testing-library/react';
import { FilterHeader } from '../inventoryFilterHeader';
import { InventoryItemModal } from '../inventoryItemModal';

export const InventoryItemList = () => {
  const { itemList } = useItemContext();
  const [openItems, setOpenItems] = useState<string[]>(["65a29ca9e1425accdeff745e"]);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem | null>(null);

  //list with the items
  const [groupedList, setGroupedList] = useState<IItem[]>([]);
  const [renderlist, setRenderList] = useState<IItem[]>([]);

  //filter atributes
  const [unSelled, setUnSelled] = useState<boolean | undefined>(undefined);

  const toggleItem = (id: string) => {
    if (openItems.includes(id)) return setOpenItems(openItems.filter((itemId) => itemId !== id));

    setOpenItems([...openItems, id]);
  };

  useEffect(() => {
    if (!itemList) return;

    const groupedItems = itemList.reduce((item: any, currentItem: IItem) => {

      const existingItem = item.find((item: any) => item[0].item === currentItem.item);
      if (existingItem) {
        existingItem.push(currentItem);
      } else {
        item.push([currentItem]);
      }
      return item;
    }, []);

    setGroupedList(groupedItems);
    setRenderList(groupedItems);
  }, [itemList, unSelled]);

  useEffect(() => {
    if (unSelled === undefined) setRenderList(groupedList);

    if (unSelled != undefined) {
      const newGroups: any = [];

      groupedList.forEach((group: any) => {

        const filterList: IItem[] = [];

        group.forEach((item: IItem) => {
          if (unSelled === true && item.sell !== 0) return filterList.push(item);

          if (unSelled === false && item.sell === 0) return filterList.push(item);

          return;
        })

        group = filterList;
        newGroups.push(group);
      });

      setRenderList(newGroups);
    }
  }, [groupedList])

  const getAvarageBuyPrice = (group: IItem[]) => {
    let total: number = 0;

    group.forEach((item: IItem) => {
      total += item.buy;
    });

    return (total / group.length).toFixed(2);
  };

  const openEditModalHandler = (item: IItem) => {
    setSelectedItem(item);
    setOpenEditModal(true);
  }

  const toggleUnSelled = () => {
    setOpenItems([]);
    if (unSelled === undefined) return setUnSelled(true);
    if (unSelled === true) return setUnSelled(false);
    if (unSelled === false) return setUnSelled(undefined);
  }

  const toggle = () => setOpenEditModal(!openEditModal);

  return (
    <>
      <FilterHeader toggleUnSelled={() => toggleUnSelled()} unSelled={unSelled} unSelectUnSelled={() => setUnSelled(undefined)} />
      <div className={style.inventory_item_list}>
        {
          render?.length === 0 ? (
            <div>No Items</div>
          ) : (
            <div>
              {renderlist.map((group: any, index: number) => (
                <div key={index}>
                  {
                    group.length > 0 && (
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
                            <DetailTable key={index} group={group} openEditModalHandler={openEditModalHandler} />
                          </div>
                        )}
                      </div>
                    )
                  }
                </div>
              ))}
            </div>
          )
        }
      </div>

      {
        openEditModal && (
          <InventoryItemModal toggle={() => toggle()} item={selectedItem!} />
        )
      }
    </>
  );
};