import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";
import React from "react";
import {PublicRouteProps} from "./PublicRouteProps";

const PublicRoute = ({children}: PublicRouteProps) => {
    const isLoggedIn = Cookies.get("token") === undefined;

    if (isLoggedIn) {
        return <>{children}</>;
    } else {
        return <Navigate to={"/login"} />;
    }

}
export default PublicRoute;
