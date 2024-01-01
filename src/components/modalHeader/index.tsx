import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/pro-light-svg-icons';

export const ModalHeader = ({ title, toggleFunc }: { title: string, toggleFunc: () => void }) => {
    return (
        <div className={style.modal_header}>
            <p className={style.header_title}>{title}</p>
            <button className={style.close_button} onClick={toggleFunc}>
            <FontAwesomeIcon icon={faX} />
            </button>
        </div>
    );
};