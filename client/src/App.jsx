import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/Auth/ProtectedRoute";


import {
  Dashboard,
  Subjects,
  Topics,
  Questions,
  QuestionDetails,
  Resources,
  Planner,
  Progress,
  Notes,
  Bookmarks,
  Settings,
  Login,
  Signup,
  VerifyEmail,
  PrivacyPolicy,
  Terms,
  Contact,
} from "./pages";



function App(){


return(


<ThemeProvider>


<Routes>



<Route 
path="/" 
element={<Navigate to="/login" replace />}
/>




<Route
path="/login"
element={<Login />}
/>



<Route
path="/signup"
element={<Signup />}
/>



<Route
path="/verify-email"
element={<VerifyEmail />}
/>





<Route
path="/privacy-policy"
element={<PrivacyPolicy />}
/>



<Route
path="/terms"
element={<Terms />}
/>



<Route
path="/contact"
element={<Contact />}
/>







{/* Protected Routes */}

<Route element={<ProtectedRoute />}>


<Route element={<MainLayout />}>


<Route
path="/dashboard"
element={<Dashboard />}
/>



<Route
path="/subjects"
element={<Subjects />}
/>



<Route
path="/subjects/:subjectId"
element={<Topics />}
/>



<Route
path="/subjects/:subjectId/resources"
element={<Resources />}
/>



<Route
path="/subjects/:subjectId/topics/:topicId"
element={<Questions />}
/>



<Route
path="/subjects/:subjectId/topics/:topicId/questions/:questionId"
element={<QuestionDetails />}
/>



<Route
path="/planner"
element={<Planner />}
/>



<Route
path="/progress"
element={<Progress />}
/>



<Route
path="/notes"
element={<Notes />}
/>



<Route
path="/bookmarks"
element={<Bookmarks />}
/>



<Route
path="/settings"
element={<Settings />}
/>



</Route>


</Route>








<Route

path="*"

element={

<div className="
flex 
h-screen 
items-center 
justify-center
">


<h1 className="
text-3xl 
font-bold 
text-gray-700
">

404 | Page Not Found

</h1>


</div>

}

/>



</Routes>


</ThemeProvider>


);

}


export default App;