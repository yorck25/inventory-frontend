import { faCube, faTally, faCartShopping, faCalendarPlus, faCalendarMinus, faTags, faPen, faPenToSquare } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IItem } from "../../../../models/itemModel"
import style from './style.module.scss';

export const DetailTable = ({ group, openEditModalHandler }: { group: IItem[], openEditModalHandler: (item: IItem) => void }) => {

    return (
        <table className={style.table}>
            <thead className={style.header_row}>
                <tr className={style.header_row_item}>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faCube} /><span>Item Id</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faTally} /><span>Name</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faCartShopping} /><span>Buy price</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faCalendarPlus} /><span>Buy date</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faCalendarPlus} /><span>Memo</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faTags} /><span>Sell price</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon className={style.header_icon} icon={faCalendarMinus} /><span>Sell date</span>
                    </th>
                    <th className={style.header_row_item}>
                        <FontAwesomeIcon icon={faPenToSquare} />
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
                            <td className={style.content_row_item}>{item.buyindate}</td>
                            <td className={style.content_row_item}>{item.memo == "" ? "---" : (item.memo)}</td>
                            <td className={style.content_row_item}>{item.sell == 0 ? "---" : (item.sell)}</td>
                            <td className={style.content_row_item}>{item.selldate == "" ? "---" : (item.selldate)}</td>
                            <td className={style.content_row_item}>
                                <button onClick={() => openEditModalHandler(item)} className={style.edit_button}>
                                    <FontAwesomeIcon icon={faPen} className={style.icon} />
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}