import { Sidebar } from "../../components/sidebar"
import { GetDefaultHeader, HTTPMethods } from "../../lib/networkAdapter";
import style from "./style.module.scss";

export const Mainpage = () => {

    const handleCreateOrganisation = () => {
        var myHeaders = GetDefaultHeader();
        var raw = JSON.stringify({
            organame: "myOrga",
            password: "123",
            members: [],
        });

        var requestOptions: RequestInit = {
            method: HTTPMethods.POST,
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_API_BASE_URL}/orga`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className={style.main_page_desktop}>
            <Sidebar />
            <div className={style.content}>
                <button onClick={() => handleCreateOrganisation()}>create organisation</button>
            </div>
        </div>
    )
}