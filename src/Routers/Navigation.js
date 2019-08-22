import React, { Component } from 'react';
import Nav from './Nav'
import "../styles/Navigation.css"


class Navigation extends Component {
    state = {
        clickMenu: false,
        login: false,
    }


    changeClickMenu = () => {
        this.setState(prevState => ({
            clickMenu: !prevState.clickMenu
        }))
    }

    handleLogin = () => {
        this.setState(prevState => ({
            login: !prevState.login,
        }))
    }

    render() {


        const { clickMenu, login } = this.state

        return (
            <>
                {login ? <button>Profil</button> : null}
                <button className="buttonMenu" onClick={this.changeClickMenu}>Menu</button>
                {clickMenu ? <Nav clickMenu={this.changeClickMenu} /> : null}
                <button className="buttonLogin" onClick={this.handleLogin}>{login ? "Wyloguj" : "Zaloguj"}</button>
            </>
        )
    }
}
export default Navigation;