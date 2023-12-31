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


    var myHeaders = new Headers();
        myHeaders.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTkwZTJhMWIwOGZhMjc3MjhhNTA4MTAiLCJpYXQiOjE3MDM5OTkzNDQ3NTEsImV4cCI6MTcwMzk5OTQzMTE1MX0.BfmBIRhb0j9_cMyWqJv828aSaEPmj0NCPO - B2RMT02c");
        myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,

        redirect: 'follow',
        body: JSON.stringify({
            item: itemName,
            buy: Cost,
            sell: Revenue,
            buyindate: Date_bought,
            selldate: Date_sold,
            memo: memo
        })
    };

    interface Item {
        item: string,
        buy: number,
        sell: number,
        buyindate: string,
        selldate: string,
        memo: string
    }

    const toggle2 = () => {
        fetch("http://localhost:8080/safeitem", requestOptions) 
        .then(response => response.status)
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        toggle();

    }

    

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

                <button onClick={() => toggle2()} className={style.button}>click me</button>
            </div>
        </div>
    );
};

