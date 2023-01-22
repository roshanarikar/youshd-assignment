import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { OtpPage } from "../OtpPage/OtpPage"


export const AllRoutes = () =>{
    return(
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/otp" element={<OtpPage/>}/>
            </Routes>
    )
}