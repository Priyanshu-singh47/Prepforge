import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";


createRoot(document.getElementById("root")).render(

<StrictMode>

<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

<ThemeProvider>

<UserProvider>

<BrowserRouter>

<App />

</BrowserRouter>

</UserProvider>

</ThemeProvider>


<Toaster
position="top-right"
toastOptions={{
duration:3000,
style:{
background:"#16a34a",
color:"#ffffff",
borderRadius:"12px",
padding:"14px 18px",
fontSize:"14px",
fontWeight:"500",
},
}}
/>


</GoogleOAuthProvider>

</StrictMode>

);