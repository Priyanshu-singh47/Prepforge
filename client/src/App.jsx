import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";

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
} from "./pages";

function App() {
  return (
    <Routes>
      {/* Redirect Root */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Study Flow */}
        <Route path="/subjects" element={<Subjects />} />

        <Route
          path="/subjects/:subjectId"
          element={<Topics />}
        />

        {/* Resource Hub */}
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

        {/* Other Modules */}
        <Route path="/planner" element={<Planner />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-700">
              404 | Page Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;