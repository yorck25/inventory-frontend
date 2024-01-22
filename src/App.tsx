import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { InventoryPage } from "./pages/inventoryPage";
import { SettingsPage } from './pages/settings';
import { RegistrationPage } from './pages/registration';
import { Loading } from './pages/Loading';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path='/' element={<Loading />} />,
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