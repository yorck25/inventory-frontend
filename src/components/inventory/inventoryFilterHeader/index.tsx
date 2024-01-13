import style from './style.module.scss';

export const FilterHeader = ({ toggleUnSelled, unSelled }: { toggleUnSelled: () => void, unSelled: undefined | boolean }) => {
    return (
        <div className={style.filter_container}>
            <p></p>
            <button className={style.filter_button} onClick={() => toggleUnSelled()}>
                {
                    unSelled === undefined ? ("filter only selled")
                        : unSelled === true ? ("fliter only unselled")
                            : ("filter selled and unselled")
                }
            </button>
        </div>
    )
}