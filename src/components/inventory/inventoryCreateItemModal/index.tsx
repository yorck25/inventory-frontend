import { useState } from 'react';
import style from './style.module.scss';




export const InventoryCreateItemModal = ({ toggle }: { toggle: () => void }) => {

    <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
      
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
                <div className={style.block}>
                    <label className={style.label} > 
                        Item:
                        <input className={style.input}
                            type = "text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            />
                    </label>
                    <label className={style.label}> 
                        Cost:
                        <input className={style.input}
                            type ="Number"
                            value={Cost}
                            onChange={(e) => setCost(e.target.value)}
                            />
                    </label>
                    <label className={style.label}> 
                        Revenue:
                        <input className={style.input}
                            type ="Number"
                            value={Revenue}
                            onChange={(e) => setRevenue(e.target.value)}
                            />
                    </label>
                    <label className={style.label}> 
                        Bought when?
                        <input className={style.input}
                            type ="Date"
                            value={Date_bought}
                            onChange={(e) => setDate_bought(e.target.value)}
                            />
                    </label>
                    <label className={style.label}> 
                        Sold when?
                        <input className={style.input}
                            type ="Date"
                            value={Date_sold}
                            onChange={(e) => setDate_sold(e.target.value)}
                            />
                    </label>
                    <label className={style.label}> 
                        Memo:
                        <input className={style.input}
                            type ="text"
                            value={memo}
                            onChange={(e) => setmemo(e.target.value)}
                            />
                    </label>

                </div>

                <button onClick={() => toggle()} className={style.button}>click me</button>
            </div>
        </div>
    );
};