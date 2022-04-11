import {Link} from "react-router-dom"
export const Navbar = ()=>{
    return <>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/mycart">My Cart</Link>
        </div>
    </>
}