import { useEffect, useState } from 'react';
import style from './style.module.scss';
import { ModalHeader } from '../../modalHeader';
import { HTTPMethods, GetDefaultHeader } from '../../../lib/networkAdapter';
import { IItem } from '../../../models/itemModel';
import { useItemContext } from '../../../lib/itemContext';
import { ItemSearchInputField } from '../../../pages/settings';

export const InventoryItemModal = ({ toggle, item }: { toggle: () => void, item: IItem | undefined }) => {
    const { updateSingleItem, getItemFromServer, orgaId } = useItemContext();

    const [itemName, setItemName] = useState('');
    const [Cost, setCost] = useState('');
    const [Revenue, setRevenue] = useState('');
    const [Date_bought, setDate_bought] = useState('');
    const [Date_sold, setDate_sold] = useState('');
    const [memo, setmemo] = useState('');
    const [errorMsg, setErrorMsg] = useState<undefined | string>(undefined);

    useEffect(() => {
        if (!item) return;

        setItemName(item.item);
        setCost(item.buy.toString());
        setRevenue(item.sell.toString());
        setDate_bought(item.buyindate);
        setDate_sold(item.selldate);
        setmemo(item.memo);
    }, [item]);

    const requestOptions: RequestInit = {
        method: HTTPMethods.POST,
        headers: GetDefaultHeader(),

        redirect: 'follow',
        body: JSON.stringify({
            item: itemName,
            buy: Cost,
            sell: Revenue == "" ? 0 : Revenue,
            buyindate: Date_bought,
            selldate: Date_sold,
            memo: memo
        })
    };

    const saveNewItem = () => {
        setErrorMsg(undefined);

        if (item == undefined) {
            if (itemName === '' || Cost === '' || Date_bought === '') return setErrorMsg("Please fill out all fields");

            fetch(`${process.env.REACT_APP_API_BASE_URL}/item`, requestOptions)
                .then(response => {
                    if (response.status != 200) return setErrorMsg("Something went wrong");

                    setItemName('');
                    setCost('');
                    setRevenue('');
                    setDate_bought('');
                    setDate_sold('');
                    setmemo('');

                    getItemFromServer(orgaId!);
                    toggle();
                })
                .catch(error => console.log('error', error));
        }
        else {
            if (itemName === '' || Cost === '' || Date_bought === '') return setErrorMsg("Please fill out all fields");

            updateSingleItem({
                _id: item._id,
                item: itemName,
                buy: Number(Cost),
                sell: Revenue == "" ? 0 : Number(Revenue),
                buyindate: Date_bought,
                selldate: Date_sold,
                memo: memo,
                userId: item.userId,
            });

            toggle();
        }
    }

    return (
        <div className={style.inventory_create_modal}>
            <div onClick={() => toggle()} className={style.modal_blocker} />
            <div className={style.content}>
                <ModalHeader title={!item ? "Create new Item" : "Edit Item"} toggleFunc={() => toggle()} />
                {errorMsg && <p>{errorMsg}</p>}
                <div className={style.block}>
                    <label className={style.label} >
                        Item name:
                        <input className={style.input}
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </label>
                    <label className={style.label}>
                        Cost:
                        <input className={style.input}
                            type="number"
                            value={Cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                    </label>
                    <label className={style.label}>
                        Revenue:
                        <input className={style.input}
                            type="number"
                            value={Revenue}
                            onChange={(e) => setRevenue(e.target.value)}
                        />
                    </label>
                    <label className={style.label}>
                        Bought when?
                        <input className={style.input}
                            type="Date"
                            value={Date_bought}
                            onChange={(e) => setDate_bought(e.target.value)}
                        />
                    </label>
                    <label className={style.label}>
                        Sold when?
                        <input className={style.input}
                            type="Date"
                            value={Date_sold}
                            onChange={(e) => setDate_sold(e.target.value)}
                        />
                    </label>
                    <label className={style.label}>
                        Memo:
                        <textarea className={style.input}
                            maxLength={100}
                            value={memo}
                            onChange={(e) => setmemo(e.target.value)}
                        />
                    </label>

                </div>

                <button onClick={() => saveNewItem()} className={style.button}>{!item ? "add new item" : "save changes"}</button>
            </div>
        </div>
    );
};