import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SinglePostPage from "./pages/SinglePostPage";
import PostPage from "./pages/PostPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested Routes */}
        <Route index element={<HomePage />} /> {/* Default child route */}
        <Route path="posts" element={<PostPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path=":slug" element={<SinglePostPage />} />
        {/* Fallback Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
