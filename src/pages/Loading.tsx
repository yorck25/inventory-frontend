import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const token = localStorage.getItem('token');
            if (token) return navigate('/inventory');

            navigate('/login');
        }
        catch {
            navigate('/login');
        }
    }, [])
    return (
        <h1>Loading...</h1>
    )
}