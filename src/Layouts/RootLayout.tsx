import { Navbar } from "../Components/Navbar";
import {Outlet} from 'react-router-dom'
import { OutputLayout } from "./OutputLayout";
export const RootLayout = () => {
    return(
        <div className="app">
            <Navbar/>
            <OutputLayout/>
        </div>
    )
};
