import React, { Component } from 'react';
import Nav from './Nav'
import "../styles/Navigation.css"


class Navigation extends Component {
    state = {
        clickMenu: false,
    }


    changeClickMenu = () => {
        this.setState(prevState => ({
            clickMenu: !prevState.clickMenu
        }))
    }
    render() {


        const { clickMenu } = this.state

        return (
            <>
                <button onClick={this.changeClickMenu}>Click</button>
                {clickMenu ? <Nav clickMenu={this.changeClickMenu} /> : null};
                <button onClick={this.changeClickMenu}>Click</button>
            </>
        )
    }
}
export default Navigation;