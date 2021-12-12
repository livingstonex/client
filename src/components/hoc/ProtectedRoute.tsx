import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { State } from "../../redux/index";

interface Props {
    path: string,
    exact: boolean,
    component: any,
}

const ProtectedRoute:React.FC<Props> = ({ component: Component, ...rest }) => {
    const authenticated = useSelector((state: State) => state.auth.authenticated);

    return (
        <Route 
          {...rest}
          render={
              (props) => authenticated ? <Component {...props}/> : <Redirect to="/login"/>
            }
        />
    )
};

export default ProtectedRoute;