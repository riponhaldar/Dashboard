import React from "react";
import logo from "./logo.svg";
import "./styles/index.scss";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./views/pages/login";
import Dashboard from "./views/pages/dashboards/home/index";
import ErrorPage from "./views/pages/error/error-page";
import Contact from "./views/pages/dashboards/contact/Contact";
import SideBar from "./components/layout/sidebar";
import { persistor, store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>1</div>} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <SideBar>
                  <Dashboard />
                </SideBar>
              }
            />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
