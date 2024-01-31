import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGear, faWarehouseFull } from '@fortawesome/pro-light-svg-icons';
import { useState } from 'react';
import { IOrga } from '../../../models/orgaModel';

export const SidbarOrgaItem = (
    { org,
        index,
        handleNavigate
    }: {
        org: IOrga,
        index: number,
        handleNavigate: (path: string) => void
    }) => {

    const [openOrgas, setOpenOrgas] = useState<number[]>([]);
    const urlParams = new URLSearchParams(window.location.search);

    return (
        <li key={org.id} className={style.navigation_list_item}>
            <div className={urlParams.get('id') === org.id ? `${style.header} ${style.active}` : style.header}>
                <h3 className={style.navigation_orga_name}>{org.name}</h3>
                <button className={style.toggle_button} onClick={() => {
                    openOrgas.includes(index)
                        ? setOpenOrgas(openOrgas.filter((item) => item !== index))
                        : setOpenOrgas([...openOrgas, index])
                }}>
                    <FontAwesomeIcon icon={faChevronDown} className={style.icon} style={{ rotate: openOrgas.includes(index) ? "0deg" : "270deg" }} />
                </button>
            </div>
            {
                openOrgas.includes(index) && (
                    <ul className={style.navigation_orga_options}>
                        <li
                            className={style.navigation_orga_options_inventory}
                            onClick={() => handleNavigate(`/inventory?id=${org.id}`)}
                        >
                            <FontAwesomeIcon icon={faWarehouseFull} className={style.icon} />
                            <span>Inventory</span>
                        </li>
                        <li className={style.navigation_orga_options_inventory}>
                            <FontAwesomeIcon icon={faGear} className={style.icon} />
                            <span>Settings</span>
                        </li>
                    </ul>
                )
            }
        </li>
    )
}