import React from 'react';
import { NavLink } from 'react-router-dom';

const list = [
    { id: 1, name: "Moje konto", path: "/myaccount" },
    { id: 2, name: "Zadania", path: "/tasks" },
    { id: 3, name: "Kontakt", path: "/contact" },
]

const Profil = (props) => {
    const menu = list.map(item => (
        <li key={item.id} className={item.name}>
            <NavLink to={item.path} onClick={props.clickMenu}> {item.name}</NavLink>
        </li>
    ))
    return (
        <div className="profile">
            <ul className="prof">
                {menu}
            </ul>
        </div>
    )
}
export default Profil;