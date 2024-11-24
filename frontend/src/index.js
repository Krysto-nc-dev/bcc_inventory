import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

import HomeScreen from "./screens/site/HomeScreen.jsx";
import PrivateRoutes from "./components/utils/PrivateRoutes.jsx";
import AdminRoutes from "./components/utils/AdminRoutes.jsx";
import UserRoutes from "./components/utils/UserRoutes.jsx";
import LoginScreen from "./screens/site/LoginScreen.jsx";
import PublicLayout from "./components/layouts/PublicLayout";
import NotFound from "./screens/NotFound.jsx";
import RegisterScreen from "./screens/site/RegisterScreen.jsx";
import PrivateDashboard from "./screens/Private/PrivateDashboard.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/connexion" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
   
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index={true} path="/" element={<HomeScreen />} />
       
      </Route>

      {/* Private Routes */}
      <Route path="/" element={<PrivateRoutes />}>

        {/* Routes spécifiques aux utilisateurs privés */}
        <Route path="/private-dashboard" element={<PrivateDashboard />} />
       
    
      </Route>

      {/* Admin Routes */}
      <Route path="/" element={<AdminRoutes />}>
        {/* Routes spécifiques aux administrateurs */}
      
      </Route>

      {/* User Routes */}
      <Route path="/" element={<UserRoutes />}>
        {/* Routes spécifiques aux utilisateurs réguliers */}
      </Route>

      {/* Route générique pour gérer toutes les autres routes non définies */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
