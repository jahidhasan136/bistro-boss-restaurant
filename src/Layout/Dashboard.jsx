import { FaCalendar, FaHome, FaShoppingCart, FaWallet, FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [carts] = useCart()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center ">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> USER HOME</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> RESERVATION</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> PAYMENT HISTORY</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> MY CART <button className="badge badge-secondary">+{carts?.length || 0}</button></NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> USER HOME</NavLink></li>
                    <li><NavLink to="/menu"><FaBars></FaBars> Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingCart></FaShoppingCart> Shop</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;