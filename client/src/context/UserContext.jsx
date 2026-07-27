import {createContext,useContext,useState} from "react";

const UserContext=createContext();


export const UserProvider=({children})=>{

const [user,setUser]=useState(
JSON.parse(localStorage.getItem("user")) || null
);



const updateUser=(newUser)=>{

setUser(newUser);

localStorage.setItem(
"user",
JSON.stringify(newUser)
);

};



const logoutUser=()=>{

setUser(null);

localStorage.removeItem("user");

localStorage.removeItem("token");

};



return(

<UserContext.Provider

value={{
user,
updateUser,
logoutUser,
}}

>

{children}

</UserContext.Provider>

);

};



export const useUser=()=>useContext(UserContext);