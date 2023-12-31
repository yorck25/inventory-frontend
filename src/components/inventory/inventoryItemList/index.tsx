import style from './style.module.scss'
import dummyImage from './2188303_P.webp'
import { useState } from 'react';



interface IItemModel {
    id: number,
    item: string,
    size: number,
    buy: number,
    sell: number,
    platform: string,
    buyindate: string,
    selldate: string,
    memo: string,
}

const dummyItems: IItemModel[] = [
    
    {
        id: 1,
        item: "Xbox",
        size: 1,
        buy: 550,
        sell: 650,
        platform: "Microsoft Store",
        buyindate: "2021-01-03",
        selldate: "2021-01-04",
        memo: "test",
    },
    {
        id: 2,
        item: "Nintendo",
        size: 1,
        buy: 450,
        sell: 550,
        platform: "Amazon",
        buyindate: "2021-01-05",
        selldate: "2021-01-06",
        memo: "test",
    },
    {
        id: 3,
        item: "PlayStation",
        size: 1,
        buy: 350,
        sell: 450,
        platform: "Best Buy",
        buyindate: "2021-01-07",
        selldate: "2021-01-08",
        memo: "test",
    },
];

const testNumbers: number[] = [1, 2, 3, 4, 5];

export const InventoryItemList = () => {

    const [clickedItemId, setClickedItemId] = useState<number | undefined>(undefined);

    const clickHandler = (id: number) => {
        if (clickedItemId == id) return setClickedItemId(undefined);

        setClickedItemId(id);
    }

    return (
        <div className={style.inventory_item_list}>
            {
                dummyItems.length == 0 ? (
                    <div>No Items</div>
                ) : (
                    dummyItems.map(item =>
                        <div>
                            <div className={style.inventory_list_item} key={item.id}>
                                <div className={style.item_info_container}>
                                    <img className={style.item_image} src={dummyImage} alt="item image" />
                                    <p className={style.item_id}>{item.id}</p>
                                    <p className={style.item_name}>{item.item}</p>
                                </div>
                                <button onClick={() => clickHandler(item.id)} className={style.open_detail_button}>^</button>
                            </div>
                            {
                                clickedItemId == item.id && (
                                    <div className={style.item_detail_container}>
                                        <ul>
                                            {testNumbers.map(number => <li key={number}>{number}</li>)}
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}