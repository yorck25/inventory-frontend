import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './components/loginSignUp';
import { InventoryPage } from "./pages/inventoryPage";
import { SettingsPage } from './pages/settings';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        console.log(process.env.NODE_ENV);
        console.log(process.env.REACT_APP_API_BASE_URL);
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path='/' element={<Login />} />,
            <Route path='/inventory' element={<InventoryPage />} />,
            <Route path='/login' element={<Login />} />,
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