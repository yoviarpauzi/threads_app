import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/create",
      },
      {
        path: "/leaderboard",
      },
      {
        path: "/thread/:threadId",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
