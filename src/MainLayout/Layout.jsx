import { useState } from "react";
import Sidebar from "../components/Shared/Nav/Sidebar";
import Navbar from "../components/Shared/Nav/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
 const [sidebarOpen, setSidebarOpen] = useState();
    return (
        <div className=" lg:px-16 rounded-[70px] bg-yellow-100 pb-5 px-6">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
           <div className="flex h-screen gap-4">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                <main className="flex-1 overflow-x-hidden overflow-y-hidden rounded-[100px] lg:min-h-[500px] bg-slate-200">
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                      <Outlet/>
                    </div>
                </main>
           
        </div>
        </div>
  )
}

export default Layout