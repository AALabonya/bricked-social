import PropTypes from "prop-types"
import SideBarMenuItem from "./SideBarMenuItem";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <> 
         <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
                    sidebarOpen ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-44 flex rounded-xl flex-col bg-gray-300 border border-dashed border-gray-400  min-h-screen transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                 
                <div className="overflow-y-auto custom-scroll text-black">
                    <nav className="mt-5 pl-3 flex">
                        <ul>
                            <h4 className="text-black font-semibold text-base mb-1 text-center">
                            Most Popular Sets
                            </h4>
                           
                                <>
                                    <SideBarMenuItem
                                        menu={{
                                            name: "01. Hogwart’s Castle",
                                            path: "/",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Rating:",
                                            subName:"Review:",
                                            path: "/",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "02. Hogwart’s Castle",
                                            path: "/",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Rating:",
                                            subName:"Review:",
                                            path: "/",
                                        }}
                                    />
                                </>
                                <SideBarMenuItem
                                        menu={{
                                            name: "03. Hogwart’s Castle",
                                            path: "/",
                                        }}
                                    />
                                    <SideBarMenuItem
                                        menu={{
                                            name: "Rating:",
                                            subName:"Review:",
                                            path: "/",
                                        }}
                                    />
                                    
                           

                           
                                  
                                   
                             
                            {/* <SideBarMenuItem
                                menu={{
                                    name: "Back to Home",
                                    icon: "LuHome",
                                    path: "/",
                                }}
                            /> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};
Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};
export default Sidebar;