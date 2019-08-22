import React from 'react';
import { NavLink } from 'react-router-dom';

const list = [
    { id: 1, name: "Start", path: "/" },
    { id: 2, name: "Narzędzia", path: "/tools" },
    { id: 3, name: "Kontakt", path: "/contact" },
]

const Nav = (props) => {
    const menu = list.map(item => (
        <li key={item.id} className={item.name}>
            <NavLink to={item.path} onClick={props.clickMenu}> {item.name}</NavLink>
        </li>
    ))
    return (
        <div className="nav">
            <ul className="ulNav">
                {menu}
            </ul>
        </div>
    )
}
export default Nav;