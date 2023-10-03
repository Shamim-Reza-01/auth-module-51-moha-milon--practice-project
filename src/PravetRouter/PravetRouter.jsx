import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";

const PravetRouter = ( {children}) => {
    const { user,loder } = useContext(AuthContext);
    if(loder){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PravetRouter;
PravetRouter.propTypes = {
    children : PropTypes.node
}