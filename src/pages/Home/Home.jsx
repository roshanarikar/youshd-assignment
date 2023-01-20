import { Link } from "react-router-dom"
import logo from "../../pictures/logo.png"

export const Home = () => {
    return(
        <div>
            <div>
              <img src={logo} alt="" />              
            </div>
            <div>
                <p>Shop. Post. <span>Earn.</span></p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <button><Link to="/login">Login/Signup</Link></button>
            </div>
            <div>
                <p>By continuing, you agree to our <a href="/">YouShd Privacy Policy</a> and <a href="/">Terms of service.</a></p>
            </div>
        </div>
    )
}