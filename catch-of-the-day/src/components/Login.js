import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h1>Inventory Login</h1>
        <p>Sign in to the inventory manager.</p>
        <button 
            className="github" 
            onClick={() => props.authenticate('Github')}>Login with GitHub
        </button>
        <button 
            className="twitter" 
            onClick={() => props.authenticate('Twitter')}>Login with Twitter
        </button>
    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;

