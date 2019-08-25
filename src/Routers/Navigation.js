import React, { Component } from 'react';
import Nav from './Nav'
import Profil from './Profil'
import "../styles/Navigation.css"
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
    state = {
        clickMenu: false,
        login: false,
        profil: false,
        tablePath: "/table"
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
    changeClickMenu = () => {
        this.setState(prevState => ({
            clickMenu: !prevState.clickMenu,
            profil: false
        }))
    }
    handleProfil = () => {
        this.setState(prevState => ({
            profil: !prevState.profil,
            clickMenu: false
        }))

    }
    handleButton = () => {
        this.setState({
            clickMenu: false,

            profil: false,
        })
    }


    render() {


        const { clickMenu, login, profil, tablePath } = this.state

        return (
            <>
                <div className="logo"></div>
                {login ? <button onClick={this.handleProfil}>Profil</button> : null}
                {profil ? <Profil clickProfil={this.handleProfil} /> : null}

                <NavLink className="table" to={tablePath} onClick={this.handleButton}>Tablica</NavLink>

                <button className="buttonMenu" onClick={this.changeClickMenu}>Menu</button>
                {clickMenu ? <Nav clickMenu={this.changeClickMenu} /> : null}

                <button className="buttonLogin" onClick={this.handleLogin}>{login ? "Wyloguj" : "Zaloguj"}</button>
            </>
        )
    }
}
export default Navigation;