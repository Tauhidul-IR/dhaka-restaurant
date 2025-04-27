import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

  const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();


    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };

    const navOption = (
        <>
          <li className="">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/menu"}>Our Menu</Link>
          </li>
          <li>
            <Link to={"/order/salad"}>Order</Link>
          </li>
          <li>
            <Link to={"/secret"}>secret</Link>
          </li>
          <li>
            <span>{user ?.displayName}</span>
          </li>
          <li>
        <Link to={"/dashboard/cart"}>
          <button className="btn btn-xs">
            <FaShoppingCart className="mr-1"></FaShoppingCart>
            <div className="badge badge-sm badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
          
        </>
      );

    return (
      <>
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Dhaka Restaurent</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
            <>
              <button onClick={handleLogOut}>
                <a className="btn btn-outline btn-warning">Logout</a>
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <a className="btn btn-outline btn-warning">login</a>
              </Link>
            </>
          )}
  </div>
</div>
      </>
    );
  };
  
  export default Navbar;