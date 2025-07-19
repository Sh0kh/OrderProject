import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Components/Footer/Footer";

export default function MainLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}