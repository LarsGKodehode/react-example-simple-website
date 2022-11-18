// Libraries
import {
    useLocation,
    NavLink,
} from 'react-router-dom';


/**
 * A wrapper around NavLink for location awareness
 */
function QueryNavLink({to, ...props}) {
    const location = useLocation();

    return (
        <NavLink
            to={to + location.search}
            {...props}
        />
    );
};


export default QueryNavLink;