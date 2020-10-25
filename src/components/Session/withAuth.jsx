import React, {useEffect, useState} from 'react';
import AuthUserContext from "./context";
import {withFirebase} from "../Firebase";

const withAuth = Component => {
    const WithAuth = ({firebase}) => {
        const [authUser, setAuthUser] = useState(null)

        useEffect(() => {
                const listener = firebase.auth.onAuthStateChanged(authUser => {
                    authUser
                        ? setAuthUser(authUser)
                        : setAuthUser(null)
                    return () => {
                        listener()
                    }
                })
            }
        )
        return (
            <AuthUserContext.Provider value={authUser}>
                <Component />
            </AuthUserContext.Provider>
        )
    }
    return withFirebase(WithAuth)
};

export default withAuth;