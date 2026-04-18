import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./services/ProtectedRoute";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/apphome" />} />
        <Route element={<AppLayout />}>
          <Route path="apphome" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />

          {/* Protected Routes */}
          <Route
            path="booking/:id"
            element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="mybookings"
            element={
              <ProtectedRoute>
                <MyBookingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          
          />
        </Route>

        {/* Standalone Routes */}
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: "#fff",
              color: "#1a1a1a",
              borderLeft: "4px solid #f97316",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "#fff",
              color: "#1a1a1a",
              borderLeft: "4px solid #ef4444",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
