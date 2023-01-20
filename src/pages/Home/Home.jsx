import { Link } from "react-router-dom"
import logo from "../../pictures/logo.png"
import puppy from "../../pictures/puppy.png"
import "./Home.css"

export const Home = () => {
    return(
        <div id="HomeCont">
            <div>
              <img id="logo" src={logo} alt="" />              
            </div>
            <div>
                <p className="paraSlogan">Shop. Post. <span id="earn">Earn.</span></p>
            </div>
            <div>
                <img id="puppy" src={puppy} alt="" />
            </div>
            <div>
                <button id="loginBtn"><Link id="btn" to="/login">Login/Signup</Link></button>
            </div>
            <div id="agree">
                <p>By continuing, you agree to our <a href="/">YouShd Privacy Policy</a> and <a href="/">Terms of service.</a></p>
            </div>
        </div>
    )
}