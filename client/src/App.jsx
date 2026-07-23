import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Subjects from "./pages/Subjects/Subjects";
import Planner from "./pages/Planner/Planner";
import Progress from "./pages/Progress/Progress";
import Notes from "./pages/Notes/Notes";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;