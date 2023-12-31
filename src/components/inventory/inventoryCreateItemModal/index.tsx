import { useState } from 'react';
import style from './style.module.scss';

export const InventoryCreateItemModal = ({ toggle }: { toggle: () => void }) => {

    const [itemName, setItemName] = useState('');
    const [BuyQuantity, setBuyQuantity] = useState('');
    const [Cost, setCost] = useState('');
    const [Revenue, setRevenue] = useState('');
    const [Platform, setPlatform] = useState('');
    const [Date_bought, setDate_bought] = useState('');
    const [Date_sold, setDate_sold] = useState('');
    const [memo, setmemo] = useState('');

    return (
        <div className={style.inventory_create_modal}>
            <div onClick={() => toggle()} className={style.modal_blocker} />
            <div className={style.content}>
                <h1>new products?</h1>
                <div>
                    <label> 
                        Item:
                        <input 
                            type = "text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            />
                    </label>
                    <label> 
                        Cost:
                        <input 
                            type ="Number"
                            value={Cost}
                            onChange={(e) => setCost(e.target.value)}
                            />
                    </label>
                    <label> 
                        Revenue:
                        <input 
                            type ="Number"
                            value={Revenue}
                            onChange={(e) => setRevenue(e.target.value)}
                            />
                    </label>
                    <label> 
                        Bought when?
                        <input 
                            type ="Date"
                            value={Date_bought}
                            onChange={(e) => setDate_bought(e.target.value)}
                            />
                    </label>
                    <label> 
                        Sold when?
                        <input 
                            type ="Date"
                            value={Date_sold}
                            onChange={(e) => setDate_sold(e.target.value)}
                            />
                    </label>
                    <label> 
                        Memo:
                        <input 
                            type ="text"
                            value={memo}
                            onChange={(e) => setmemo(e.target.value)}
                            />
                    </label>

                </div>

                <button onClick={() => toggle()}>click me</button>
            </div>
        </div>
    );
};