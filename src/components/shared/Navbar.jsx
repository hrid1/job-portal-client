import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    logOut().then(() => {
      toast.warning("Sign out Successful!", {
        position: "top-center",
      });
    });
    console.log(logOut);
  };

  return (
    <nav className="bg-white border-gray-200 py-3 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          {/* <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo"> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Landwind
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className=" space-x-2">
            {user ? (
              <div className="flex items-center justify-center gap-2">
                Hi, {user?.displayName}
                <button
                  onClick={handleLogout}
                  className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700  "
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="Login"
                  className="text-white bg-purple-700 hover:bg-purple-800  focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >
                  Login
                </Link>
                <Link
                  to="Register"
                  className="text-white bg-purple-800 hover:bg-purple-800  focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <span className=" transition-transform duration-300 ease-in-out">
              {isOpen ? (
                <IoClose className="text-2xl transform scale-110" />
              ) : (
                <GiHamburgerMenu className="text-2xl transform " />
              )}
            </span>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul
            className={`flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ${
              isOpen ? "bg-gray-900 absolute w-full right-0 mt-3 px-2" : ""
            }`}
          >
            {navLinks.map((link) => (
              <li
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                key={link.id}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " underline-offset-2 text-white" : ""
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
