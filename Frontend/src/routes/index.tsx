import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavbarLandingPage from "../components/navbars/LandingPage";
import LandingPage from "../pages/LandingPage";
import SearchCar from "../pages/SearchCar";
import CarDetailPage from "../pages/CarDetail";
import Login from "../pages/Login";
import LoginRoute from "./LoginRoute";
import DashboardAdmin from "../pages/DashboardAdmin";
import PublicRoute from "./PublicRoute";
import DashboardProvider from "../context/Dashboard/DashboardContext";
import Cars from "../pages/Cars";
import FormCar from "../pages/FormCar";

const RouterApp = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Routes>
                    <Route
                        path="/"
                        element={<NavbarLandingPage>
                            <LandingPage />
                        </NavbarLandingPage>}
                    />
                    <Route
                        path="/search"
                        element={<NavbarLandingPage>
                            <SearchCar />
                        </NavbarLandingPage>}
                    />
                    <Route
                        path="/search/detail/:carId"
                        element={<NavbarLandingPage>
                            <CarDetailPage />
                        </NavbarLandingPage>}
                    />
                    <Route
                        path="/login"
                        element={<PublicRoute>
                            <Login />
                        </PublicRoute>}
                    />
                </Routes>
                <DashboardProvider>
                    <Routes>
                        <Route
                            path="/admin"
                            element={<LoginRoute>
                                <DashboardAdmin />
                            </LoginRoute>}
                        />
                        <Route
                            path="/dashboard"
                            element={<LoginRoute>
                                <DashboardAdmin />
                            </LoginRoute>}
                        />
                        <Route
                            path="/cars"
                            element={<LoginRoute>
                                <Cars />
                            </LoginRoute>}
                        />
                        <Route
                            path="/cars/newcar"
                            element={<LoginRoute>
                                <FormCar />
                            </LoginRoute>}
                        />
                        <Route
                            path="/cars/edit/:carId"
                            element={<LoginRoute>
                                <FormCar />
                            </LoginRoute>}
                        />
                    </Routes>
                </DashboardProvider>
            </React.Fragment>
        </BrowserRouter>
    )
}
export default RouterApp;
