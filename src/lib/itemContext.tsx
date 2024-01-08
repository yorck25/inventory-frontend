import React, { createContext, useState, FC, ReactNode, useContext } from 'react';
import { GetDefaultHeader, HTTPMethods } from './networkAdapter';
import { IItem } from '../models/itemModel';
import { useHelperContext } from './helperContext';

type ItemContextProps = {
    itemList: IItem[] | undefined;
    setItemList: React.Dispatch<React.SetStateAction<IItem[] | undefined>>;
    getItemFromServer: () => void;
};

const ItemContext = createContext<ItemContextProps | undefined>(undefined);

export const ItemContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [itemList, setItemList] = useState<IItem[] | undefined>(undefined);
    const { getTokenLocalStorage } = useHelperContext();

    const getItemFromServer = () => {
        const myheaders = new Headers();
        myheaders.append("Content-Type", "application/json");
        myheaders.append("token", getTokenLocalStorage());

        const requestOptions: RequestInit = {
            method: HTTPMethods.GET,
            headers: myheaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/dev-inventory/getAllItems", requestOptions)
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

    const itemContextValue: ItemContextProps = {
        itemList,
        setItemList,
        getItemFromServer,
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