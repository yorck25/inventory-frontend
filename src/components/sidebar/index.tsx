import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faGear } from '@fortawesome/pro-light-svg-icons';
import logo from '../../pages/inventoryPage/logo_example_1.png';
import { useEffect, useState } from 'react';
import { GetDefaultHeader, HTTPMethods } from '../../lib/networkAdapter';
import { useItemContext } from '../../lib/itemContext';
import { IOrga } from '../../models/orgaModel';
import { SidbarOrgaItem } from './orgaSidebarItem';

export const Sidebar = () => {
    const navigate = useNavigate();
    const { setOrgaId } = useItemContext();
    const [userOrags, setUserOrgs] = useState<IOrga[] | undefined>(undefined);

    const handleNavigate = (path: string) => {
        navigate(`${path}`);
        setOrgaId(userOrags?.[0]?.id ? "1" : "0");
    }

    useEffect(() => getUserOrgs(), []);

    const getUserOrgs = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/user-orgas`, {
            method: HTTPMethods.GET,
            headers: GetDefaultHeader(),
            redirect: 'follow',
        })
            .then(rawResponse => {
                if (rawResponse.status !== 200) return;

                return rawResponse.json();
            }).then((res) => setUserOrgs(res))
    }

    return (
        <div className={style.sidebar}>
            <div className={style.logo_container}>
                <img className={style.logo} src={logo} />
            </div>

            <div className={style.navigation_stacks}>
                <ul className={style.top_navigation_list}>
                    <li className={style.navigation_list_item_main}
                        onClick={() => handleNavigate(`/main`)}
                    ><span>Mainpage</span></li>

                    <li className={style.divider} />

                    {userOrags?.map((org, index) => <SidbarOrgaItem org={org} index={index} handleNavigate={handleNavigate} />)}
                </ul>

                <ul className={style.bottom_navigation_list}>
                    <li className={style.navigation_list_item}
                        onClick={() => handleNavigate("/settings")}
                    >
                        <FontAwesomeIcon icon={faGear} className={style.icon} />
                        <span>Settings</span>
                    </li>

                    <li className={style.navigation_list_item}
                        onClick={() => (
                            handleNavigate("/login"),
                            localStorage.removeItem("token")
                        )}
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className={style.icon} />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}