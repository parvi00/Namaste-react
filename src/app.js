import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import RestaruntMenu from './components/RestaruntMenu';



const HeadingComponent = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <HeadingComponent />,
        children:[
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path: "/restraunts/:resid",
                element: <RestaruntMenu/>
            }
        ]
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
