import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


function MainLayout(){

  return (

    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">


      <Sidebar />


      <div className="flex flex-1 flex-col overflow-hidden">


        <Navbar />


        <main className="min-h-0 flex-1 overflow-y-auto bg-gray-50 px-5 py-4 dark:bg-gray-900">

          <Outlet />

        </main>


      </div>


    </div>

  );

}


export default MainLayout;