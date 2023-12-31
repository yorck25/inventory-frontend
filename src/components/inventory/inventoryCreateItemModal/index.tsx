import { useState } from 'react';
import style from './style.module.scss';

export const InventoryCreateItemModal = ({ toggle }: { toggle: () => void }) => {
    return (
        <div className={style.inventory_create_modal}>
            <div onClick={() => toggle()} className={style.modal_blocker} />
            <div className={style.content}>
                <p>Content</p>
                <button onClick={() => toggle()}>click me</button>
            </div>
        </div>
    );
};