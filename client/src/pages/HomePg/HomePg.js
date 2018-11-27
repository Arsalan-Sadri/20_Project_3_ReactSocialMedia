import React from "react";
import LanPg from "../LanPg";
import Home from "../Home";

const HomePg = () => {
    if (localStorage.getItem("token")) return <Home />;
    else return <LanPg />;
};

export default HomePg;
