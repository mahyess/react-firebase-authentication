import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import {AuthUserContext} from '../Session';
import SignOutButton from "../SignOut";

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser ? <AuthNavigation/> : <NonAuthNavigation/>}
        </AuthUserContext.Consumer>
    </div>
)

const AuthNavigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
                <li>
                    <SignOutButton/>
                </li>
            </ul>
        </div>
    );
};

const NonAuthNavigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                </li>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;