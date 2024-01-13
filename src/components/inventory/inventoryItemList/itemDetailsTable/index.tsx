import { faCube, faTally, faCartShopping } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IItem } from "../../../../models/itemModel"
import style from './style.module.scss';

export const DetailTable = ({ group }: { group: IItem[] }) => {

    return (
        <table className={style.table}>
            <thead className={style.header_row}>
                <tr className={style.header_row_item}>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faCube} /><span>Item</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faTally} /><span>Amount</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faCartShopping} /><span>Ø buy price</span>
                    </th>
                </tr>
            </thead>

            <tbody className={style.content_row}>
                {
                    group.map((item: IItem, index: number) => (
                        <tr key={index} className={style.content_row_item}>
                            <td className={style.content_row_item}>{item._id}</td>
                            <td className={style.content_row_item}>{item.item}</td>
                            <td className={style.content_row_item}>{item.buy}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}