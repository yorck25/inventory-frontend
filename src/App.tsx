import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { InventoryPage } from "./pages/inventoryPage";
import { SettingsPage } from './pages/settings';
import { useEffect } from 'react';
import { RegistrationPage } from './pages/registration';

function App() {

    useEffect(() => {
        console.log(process.env.NODE_ENV);
        console.log(process.env.REACT_APP_API_BASE_URL);
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path='/' element={<LoginPage />} />,
            <Route path='/inventory' element={<InventoryPage />} />,
            <Route path='/login' element={<LoginPage />} />,
            <Route path='/registration' element={<RegistrationPage />} />,
            <Route path='/settings' element={<SettingsPage />} />,
        ])
    );

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;