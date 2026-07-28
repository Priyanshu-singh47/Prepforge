import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";


function MainLayout(){

return(

<div className="min-h-screen bg-gray-50 dark:bg-gray-900">


<Sidebar />


<div className="ml-64 flex min-h-screen flex-1 flex-col">


<Navbar />


<main className="flex-1 overflow-y-auto bg-gray-50 px-5 py-4 dark:bg-gray-900">

<Outlet />

</main>


<Footer />


</div>


</div>

);

}


export default MainLayout;