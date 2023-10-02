import { Outlet } from "react-router-dom";
import Navber from "./Navber";


const Route = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Route;