import React from "react";
import SignUpPg from "../SignUpPg";
import HomePg from "../HomePg";

const LanPg = () => {
    if (localStorage.getItem("token")) return <HomePg />;
    else return <SignUpPg />;
};

export default LanPg;
