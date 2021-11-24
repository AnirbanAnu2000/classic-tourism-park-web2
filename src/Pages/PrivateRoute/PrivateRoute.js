import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
      return <Spinner style={{width:"60px", height:"60px"}} className="d-block mb-5 m-auto" animation="border" variant="primary" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;