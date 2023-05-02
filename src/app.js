import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';


const HeadingComponent = () => {
    return (
        <>
        <Header/>
        <Body/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        Component: <HeadingComponent/>
    },
    {
        path:"/about",
        component: <About/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
