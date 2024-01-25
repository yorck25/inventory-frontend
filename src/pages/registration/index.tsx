import { ChangeEvent, useState } from "react"
import style from './style.module.scss';
import { HTTPMethods } from "../../lib/networkAdapter";
import { useNavigate } from "react-router-dom";
import { useHelperContext } from "../../lib/helperContext";

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const { setToken, setTokenLocalStorage } = useHelperContext();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordReapeat] = useState<string>('');

    const handleRegistration = () => {
        const myheaders = new Headers();
        myheaders.append("Content-Type", "application/json");

        const requestOptions: RequestInit = {
            method: HTTPMethods.POST,
            headers: myheaders,
            redirect: 'follow',
            body: JSON.stringify({
                username: name,
                email: email,
                password: password,
            }),
        };

        fetch(`${process.env.REACT_APP_API_BASE_URL}/registration`, requestOptions)
            .then(rawres => {
                if (!rawres.ok) return;

                return rawres.json();
            }).then(res => {
                if (!res.token) return;

                setTokenLocalStorage(res.token);
                setToken(res.token);
                navigate('/inventory');
            })
    }

    return (
        <section className={style.registration_page}>
            <h2>Registration</h2>
            <div className={style.registration_form}>
                <label className={style.description}>Username</label>
                <input required className={style.input_field} value={name} onChange={(e: any) => setName(e.target.value)} type="text" />
                <label className={style.description}>Email</label>
                <input required className={style.input_field} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="text" /> {/* todo: change to type email in production*/}
                <label className={style.description}>Password</label>
                <input required className={style.input_field} value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" />
                <label className={style.description}>Repeat password</label>
                <input required className={style.input_field} value={passwordRepeat} onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordReapeat(e.target.value)} type="password" />

                <button onClick={() => handleRegistration()}>Create Account</button>
            </div>
        </section>
    )
}