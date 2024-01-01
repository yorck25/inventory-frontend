import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './components/loginSignUp';
import { InventoryPage } from "./pages/inventoryPage";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path='/' element={<Placeholder />} />,
            <Route path='/inventory' element={<InventoryPage />} />,
        ])
    );

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

function Placeholder() {
    return (
        <div>
            <Login></Login>
        </div>
    )
}