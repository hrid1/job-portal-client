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
    { id: 2, name: "Jobs", path: "/jobs" },
    { id: 4, name: "Applications", path: "/my-application" },
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

  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     toast.warning("Sign out Successful!", {
  //       position: "top-center",
  //     });
  //   } catch (error) {
  //     toast.error("Failed to sign out!", {
  //       position: "top-center",
  //     });
  //   }
  // };

  return (
    <nav className="bg-white border-gray-200 py-3 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Landwind
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="space-x-2">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-800 dark:text-gray-200">
                  Hi, {user?.displayName}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="Login"
                  className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  Login
                </Link>
                <Link
                  to="Register"
                  className="text-white bg-purple-800 hover:bg-purple-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span
              className={`transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
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
            className={`flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0 font-medium ${
              isOpen ? "absolute right-0 top-full bg-gray-800 w-full px-2" : ""
            }`}
          >
            {navLinks.map((link) => (
              <li
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700"
                key={link.id}
              >
                <NavLink
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 ${
                      isActive
                        ? "text-purple-700 font-bold dark:text-white"
                        : "text-gray-700 dark:text-gray-400"
                    }`
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
