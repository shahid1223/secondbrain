import {useContext} from 'react';
import { Route, redirect } from 'react-router-dom';
import secondBrainContext from '../context/Context';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useContext(secondBrainContext);
    const {isAuthenticated:{isLoading , token}} = auth;
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