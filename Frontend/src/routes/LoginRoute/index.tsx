import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import React from "react";
import { LoginRouteProps } from "./LoginRouteProps";

const LoginRoute = ({ children }: LoginRouteProps) => {
    const isLoggedIn = Cookies.get("token") !== undefined;

    if (isLoggedIn) {
        return <>{children}</>;
    } else {
        return <Navigate to={"/login"} />;
    }
};

export default LoginRoute;
