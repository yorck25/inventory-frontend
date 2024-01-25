import React, { createContext, useState, FC, ReactNode, useContext } from 'react';
import { GetDefaultHeader, HTTPMethods } from './networkAdapter';
import { IItem } from '../models/itemModel';
import { useHelperContext } from './helperContext';

type ItemContextProps = {
    itemList: IItem[] | undefined;
    setItemList: React.Dispatch<React.SetStateAction<IItem[] | undefined>>;
    getItemFromServer: (orgaId: string) => void;
    updateSingleItem: (item: IItem) => void;
    orgaId: string | undefined;
    setOrgaId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ItemContext = createContext<ItemContextProps | undefined>(undefined);

export const ItemContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [itemList, setItemList] = useState<IItem[] | undefined>(undefined);
    const { getTokenLocalStorage } = useHelperContext();
    const [orgaId, setOrgaId] = useState<string | undefined>(undefined);

    const getItemFromServer = (orgaId: string) => {
        setOrgaId(orgaId);

        const myheaders = new Headers();
        myheaders.append("Content-Type", "application/json");
        myheaders.append("orgaid", orgaId);
        myheaders.append("token", getTokenLocalStorage());

        const requestOptions: RequestInit = {
            method: HTTPMethods.GET,
            headers: myheaders,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_API_BASE_URL}/get-all-items`, requestOptions)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');

                return response.text();
            })
            .then(resValue => {
                const convertetRes = JSON.parse(resValue);

                setItemList(convertetRes);
            })
            .catch(error => console.error('There was an error:', error));

        return itemList?.length;
    }

    const updateSingleItem = (item: IItem) => {
        const myheaders = new Headers();
        myheaders.append("Content-Type", "application/json");
        myheaders.append("token", getTokenLocalStorage());

        const requestOptions: RequestInit = {
            method: HTTPMethods.PUT,
            headers: myheaders,
            redirect: 'follow',
            body: JSON.stringify({
                _id: item._id,
                item: item.item,
                buy: item.buy,
                sell: item.sell,
                buyindate: item.buyindate,
                selldate: item.selldate,
                memo: item.memo,
            }),
        };

        fetch(`${process.env.REACT_APP_API_BASE_URL}/update-single-item`, requestOptions)
            .then(response => {
                if (response.status == 200) return getItemFromServer(orgaId!);
            })

    }

    const itemContextValue: ItemContextProps = {
        itemList,
        setItemList,
        getItemFromServer,
        updateSingleItem,
        orgaId,
        setOrgaId,
    };

    return (
        <ItemContext.Provider value={itemContextValue}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;

export const useItemContext = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error('useItemContext must be used within a ItemContextProvider');
    }
    return context;
};