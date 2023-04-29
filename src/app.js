import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';



const HeadingComponent = () => {
    return (
        <>
        <Header/>
        <Body/>
        </>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
