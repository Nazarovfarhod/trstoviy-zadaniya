//import from rrd
import { Link } from "react-router-dom";
//global cotext
import { useGlobalContext } from "../hooks/useGlobalContext";
//firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
//Toaster
import toast from "react-hot-toast";

function Navbar() {
  const { user, totalProducts, totalPrice } = useGlobalContext();

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you Soon!");
  };

  return (
    <div className="navbar bg-base-100 pb-0 px-0 rounded-2xl border flex justify-between w-full">
      <div className="navbar-start w-60 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            <li>
              <Link to="/todoList">Creat new Todo</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-4xl font-bold font-serif italic text-info"
        >
          FN
        </Link>
      </div>
      <div className="navbar-center hidden rounded-2xl lg:flex">
        <ul className="menu menu-horizontal px-1  flex gap-5">
          <li className="text-xl font-medium font-serif">
            <Link to="/">Home</Link>
          </li>

          {/* <li className="text-xl font-medium font-serif">
            <Link to="/about">About</Link>
          </li>
          <li className="text-xl font-medium font-serif">
            <Link to="/contact">Contact</Link>
          </li> */}
          <li className="text-xl font-medium font-serif">
            <Link to="/todoList">Create new Todo</Link>
          </li>
        </ul>
      </div>

      <div className="p-0">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="dark" />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <div className="flex-none mr-4  ">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalProducts}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {" "}
                  {totalProducts} All Products
                </span>
                <span className="text-info">
                  Total Price:$ {totalPrice.toFixed(2)}{" "}
                </span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pr-5 w-20 lg:flex-col items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-20 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow"
            >
              <li>
                <small className="text-[10px] pb-0">email:</small>
                <p className="justify-between font-medium pt-0">{user.email}</p>
              </li>
              <li>
                <small className="text-[10px] pb-0">full name :</small>
                <p className="capitalize font-semibold font-serif mb-3">
                  {user.displayName}{" "}
                </p>
              </li>
              <li>
                <button
                  onClick={signOutProfile}
                  className=" font-serif text-lg bg-red-300 font-semibold"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
