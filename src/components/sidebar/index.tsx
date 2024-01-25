import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faGear, faWarehouseFull } from '@fortawesome/pro-light-svg-icons';
import logo from '../../pages/inventoryPage/logo_example_1.png';
import { useEffect, useState } from 'react';
import { GetDefaultHeader, HTTPMethods } from '../../lib/networkAdapter';

export const Sidebar = () => {
    const navigate = useNavigate();
    const [userOrags, setUserOrgs] = useState<IOrga[] | undefined>(undefined);

    const handleNavigate = (path: string) => {
        navigate(`${path}`);
    }

    useEffect(() => {
        getUserOrgs();
    });

    interface IOrga {
        id: string;
        name: string;
    }

    const getUserOrgs = () => {
        const requestOptions: RequestInit = {
            method: HTTPMethods.GET,
            headers: GetDefaultHeader(),
            redirect: 'follow',
        };

        fetch(`${process.env.REACT_APP_API_BASE_URL}/user-orgas`, requestOptions)
            .then(rawResponse => {
                if (rawResponse.status !== 200) return console.log("fail");

                return rawResponse.json();
            }).then((res) => setUserOrgs(res))
    }

    return (
        <div className={style.sidebar}>
            <div className={style.logo_container}>
                <img className={style.logo} src={logo} />
            </div>

            <div className={style.navigation_stacks}>
                <div className={style.navigation_list_item}
                    onClick={() => handleNavigate(`/settings`)}
                >
                    <FontAwesomeIcon icon={faGear} className={style.icon} />
                    <span>Mainpage</span>
                </div>

                <ul className={style.top_navigation_list}>
                    {userOrags?.map((org) =>
                        <li key={org.id} className={style.navigation_list_item}
                            onClick={() => handleNavigate(`/inventory/:${org.id}`)}
                        >
                            <h3 className={style.navigation_orga_name}>{org.name}</h3>
                            <ul className={style.navigation_orga_options}>
                                <li className={style.navigation_orga_options_inventory}>
                                    <FontAwesomeIcon icon={faWarehouseFull} className={style.icon} />
                                    <span>Inventory</span>
                                </li>
                                <li className={style.navigation_orga_options_inventory}>
                                    <FontAwesomeIcon icon={faGear} className={style.icon} />
                                    <span>Settings</span>
                                </li>
                            </ul>
                        </li>
                    )}
                </ul>

                <ul className={style.bottom_navigation_list}>
                    <li className={style.navigation_list_item}
                        onClick={() => handleNavigate("/settings")}
                    ><FontAwesomeIcon icon={faGear} className={style.icon} /><span>Settings</span></li>

                    <li className={style.navigation_list_item}
                        onClick={() => (
                            handleNavigate("/login"),
                            localStorage.removeItem("token")
                        )}
                    ><FontAwesomeIcon icon={faArrowRightFromBracket} className={style.icon} /><span>Logout</span></li>
                </ul>
            </div>
        </div>
    )
}