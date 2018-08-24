import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import UpdateFishForm from './UpdateFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends React.Component {

    static propTypes = {
        fishes: PropTypes.object, // only object eh?
        removeFish: PropTypes.func,
        updateFish: PropTypes.func,
        addFish: PropTypes.func,
        seedFishes: PropTypes.func,
        storeId: PropTypes.string,
    };

    state = {
        uid: null,
        owner: null,
    }

    componentDidMount = () => firebase.auth().onAuthStateChanged(user => {
        if (user) {
            this.authHandler({ user });
        }
    });

    authHandler = async (authData) => {
        const store = base.fetch(this.props.storeId, { context: this });

        if (!store.owner) {
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            });
        }

        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid,
        });
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);

        console.log('authenticating');
    }

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({ uid: null });
    }

    render() {
        const logout = <button onClick={this.logout}>Logout</button>;

        if (!this.state.uid) {
            return (
                <div>
                    {logout}
                    <Login authenticate={this.authenticate} />
                </div>
            );
        }

        if (this.state.uid !== this.state.owner) {
            return <p>You do not have permission to manage inventory.</p>
        }

        const fishKeys = Object.keys(this.props.fishes);
        return (
            <div>
                {logout}
                {fishKeys.map(key => <UpdateFishForm
                    key={key}
                    id={key}
                    removeFish={this.props.removeFish}
                    updateFish={this.props.updateFish}
                    fish={this.props.fishes[key]} />)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.seedFishes}>Seed Fishes</button>
            </div>
        );
    }
}

export default Inventory;