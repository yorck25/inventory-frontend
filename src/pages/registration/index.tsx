import { ChangeEvent, useState } from "react"
import style from './style.module.scss';

export const RegistrationPage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordReapeat] = useState<string>('');

    const handleRegistration = () => {

    }

    return (
        <section className={style.registration_page}>
            <h2>Registration</h2>
            <form className={style.registration_form} onSubmit={() => handleRegistration()}>
                <label className={style.description}>Username</label>
                <input required className={style.input_field} value={name} onChange={(e: any) => setName(e.target.value)} type="text" />
                <label className={style.description}>Email</label>
                <input required className={style.input_field} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="email" />
                <label className={style.description}>Password</label>
                <input required className={style.input_field} value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" />
                <label className={style.description}>Repeat password</label>
                <input required className={style.input_field} value={passwordRepeat} onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordReapeat(e.target.value)} type="password" />

                <button >Create Account</button>
            </form>
        </section>
    )
}