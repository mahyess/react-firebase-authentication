import React, {useEffect, useState} from 'react';
import AuthUserContext from "./context";
import {withFirebase} from "../Firebase";

const withAuthentication = Component => {
    const WithAuthentication = ({firebase}) => {
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
    return withFirebase(WithAuthentication)
};

export default withAuthentication;