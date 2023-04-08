import { Navbar } from "../Components/Navbar";
import { OutputLayout } from "./OutputLayout";


export const RootLayout = ():JSX.Element => {
    return(
        <div className="app">
            <Navbar/>
            <OutputLayout/>
        </div>
    )
};
