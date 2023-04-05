import { useContext } from 'react';
import { Route } from 'react-router-dom';
import secondBrainContext from '../context/Context';
import { useNavigate } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useContext(secondBrainContext);
    const { isAuthenticated: { isLoading, token } } = auth;
    const redirect = useNavigate();
    return (
        <Route
            {...rest}
            render={(props) =>
                token === null && isLoading ? (
                    redirect('/login')
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;