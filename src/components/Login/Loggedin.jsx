import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Loggedin = () => {
    const { user } = useContext(UserContext); // Move useContext inside the component

    if (!user) return <div></div>;

    return <div>Welcome {user.name}</div>;
};

export default Loggedin;
