import PropTypes from "prop-types";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate()
    const user = true;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async()=>{
      
        navigate('/login')
    }
    // console.log(user);
    return (
       <div>
         
         <div className="flex items-center justify-between py-3 dark:bg-yellow-400">
         <div> <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-gray-500 focus:outline-none lg:hidden mr-5"
                >
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                 <h1 className="font-nothing text-4xl font-semibold leading-[50px]">brickd social</h1></div>

                <div className="relative mx-4 lg:mx-0">
                    <input
                        className="w-32 pl-4 pr-4 py-3 border-dashed border-gray-400 border bg-slate-200 focus:outline-none rounded-md form-input sm:w-64 "
                        type="text"
                        placeholder="Find you set..."
                    />
                </div>
            
            <div className="flex items-center">
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="relative block  py-3 px-3 border-dashed border-gray-400 border bg-slate-200 overflow-hidden rounded-3xl shadow"
                    >
                       <div>Hey, user! | Logout</div>
                    </button>

                    <div
                        onClick={() => setDropdownOpen(false)}
                        className={`fixed inset-0 z-10 w-full h-full ${
                            dropdownOpen ? "" : "hidden"
                        }`}
                    ></div>

                    <div
                        className={`absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl ${
                            dropdownOpen ? "" : "hidden"
                        }`}
                    >
                        <Link
                            to="/dashboard/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                        >
                            Profile
                        </Link>
                        <Link
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};
Navbar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};
export default Navbar;