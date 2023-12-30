import React from 'react';
import './App.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path='/' element={<App/>}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Route index element={<App/>}></Route>
          </Route>
      )
  )

  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}