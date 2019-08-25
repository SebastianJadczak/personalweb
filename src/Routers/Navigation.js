import React, { Component } from 'react';
import Nav from './Nav'
import Profil from './Profil'
import "../styles/Navigation.css"



class Navigation extends Component {
    state = {
        clickMenu: false,
        login: false,
        profil: false,
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
        if (this.state.login) {
            this.setState({
                profil: false
            })
        }

    }
    handleProfil = () => {
        this.setState(prevState => ({
            profil: !prevState.profil
        }))
        console.log(this.state.profil)
    }

    render() {


        const { clickMenu, login, profil } = this.state

        return (
            <>
                <div className="logo"></div>
                {login ? <button onClick={this.handleProfil}>Profil</button> : null}
                {profil ? <Profil /> : null}

                <button className="buttonMenu" onClick={this.changeClickMenu}>Menu</button>
                {clickMenu ? <Nav clickMenu={this.changeClickMenu} /> : null}

                <button className="buttonLogin" onClick={this.handleLogin}>{login ? "Wyloguj" : "Zaloguj"}</button>
            </>
        )
    }
}
export default Navigation;