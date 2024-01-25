import { useEffect, useState } from "react";
import { useItemContext } from "../../lib/itemContext";
import { IItem } from "../../models/itemModel";
import style from './style.module.scss';
import { render } from "@testing-library/react";

export const SettingsPage = () => {
    const { orgaId } = useItemContext();
    interface ICurrenyModel {
        id: number;
        displayName: string;
        shortName: string;
        symbol: string;
        rate: number;
    }

    const currency: ICurrenyModel[] = [{
        id: 1,
        displayName: 'Euro',
        shortName: 'EUR',
        symbol: '€',
        rate: 1,
    },
    {
        id: 2,
        displayName: 'US Dollar',
        shortName: 'USD',
        symbol: '$',
        rate: 1.2,
    },
    {
        id: 3,
        displayName: 'British Pound',
        shortName: 'GBP',
        symbol: '£',
        rate: 0.9,
    }];

    const { getItemFromServer } = useItemContext();

    useEffect(() => {
        getItemFromServer(orgaId!);
    }, [])

    return (
        <div>
            <h1>Settings Page</h1>
            <select>
                {
                    currency.map(item => (
                        <option key={item.id}>{item.shortName} {item.symbol}</option>
                    ))
                }
            </select>

            <div>
                <ItemSearchInputField />
            </div>
        </div>
    )
}


export const ItemSearchInputField = () => {
    const { itemList } = useItemContext();
    const [renderList, setRenderList] = useState<any[]>(itemList!);
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        const filterList = itemList?.filter((item) => item.item.toLowerCase().includes(value.toLowerCase()));

        if (!filterList) return;

        setRenderList(filterList);
    }, [value]);

    return (
        <div className={style.input_search_container}>
            <input
                className={style.search_input_field}
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                type="text" placeholder="Enter your name"
            />
            {
                renderList?.length > 0 && (
                    <div className={style.matching_item_container}>
                        {
                            renderList.map(item => (
                                <div key={item._id}>
                                    <p>{item.item}</p>
                                </div>
                            ))
                        }
                    </div >
                )
            }
        </div>
    )
}