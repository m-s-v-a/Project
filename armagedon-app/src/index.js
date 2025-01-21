import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Asteroids} from "./pages/Asteroids";
import {Asteroid} from "./pages/Asteroid";
import {Destroyment} from "./pages/Destroyment"

const router = createBrowserRouter([
    {
        path: "/asteroids",
        element: <Asteroids/>,
    },
    {
        path: "/destroy",
        element: <Destroyment/> ,
    },
    {
        path: "/asteroid/:id",
        element: <Asteroid/>,
    },
    {
        path:"/",
        element: <Asteroids/>,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
