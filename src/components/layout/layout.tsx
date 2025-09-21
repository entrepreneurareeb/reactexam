import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router"


const Layout=()=>{

    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
           
        </>

    )
}
export default Layout