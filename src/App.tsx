import React from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Placeholder/>}></Route>
        )
    )

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;


function Placeholder() {
  return (
    <div>
      Hello world
    </div>
  )
}