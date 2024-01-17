import style from './style.module.scss';

export const FilterHeader = ({
    toggleUnSelled,
    unSelled,
    unSelectUnSelled
}: {
    toggleUnSelled: () => void,
    unSelled: undefined | boolean,
    unSelectUnSelled: () => void
}) => {

    return (
        <div className={style.filter_header}>
            <div className={style.filter_button_container}>
                <p></p>
                <button className={style.filter_button} onClick={() => toggleUnSelled()}>
                    {
                        unSelled === undefined ? ("filter only selled")
                            : unSelled === true ? ("fliter only unselled")
                                : ("none")
                    }
                </button>
            </div>
            <div className={style.filter_overview_contianer}>
                {
                    unSelled !== undefined && (
                        <div className={style.overview_item}>
                            <button onClick={() => unSelectUnSelled()}>X</button>
                            <p>selled status</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}