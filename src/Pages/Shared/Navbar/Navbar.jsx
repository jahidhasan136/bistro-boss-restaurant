import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [carts] = useCart()

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const navOptons = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li>
            <button className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{carts?.length || 0}</div>
            </button>
        </li>

        {
            user ?
                <><button onClick={handleLogout} className="btn btn-warning">Log out</button></>
                :
                <><li><Link to='/login'>Login</Link></li></>
        }

    </>
    return (
        <div>
            <div className="navbar text-white bg-black/40 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptons}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg uppercase font-bold font-serif">Bistro Boss <br />
                        Restaurant
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptons}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn m-1">Profile</label>
                        {
                            user && <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                <li>{user?.displayName}</li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;