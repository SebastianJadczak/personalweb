import React, { Component } from "react";
import EditProfile from "./EditProfile"


class MyAccount extends Component {
    state = {
        profil: false,
        name: "Sebastian",
        surname: "Jadczak",
        birthday: "21-06-1990",
        description: "Kilka słów o mnie. Tak by ktoś mógł opisać siebie i swoje doświadczenie. W dalszej części będzie można rozbudować ten element"
    }

    handleEditProfile = () => {
        this.setState({
            profil: true,
        })
    }
    handleCloseEditProfile = () => {
        this.setState({
            profil: false,
        })
    }

    render() {
        const { name, surname, description, birthday, profil } = this.state

        return (
            <div className="account">
                <h2>MyAccount</h2>
                {profil ? <EditProfile exit={this.handleCloseEditProfile} /> : false}
                <div className="acc">
                    <div className="mySelf"></div>
                    <div className="data">
                        <p className="Name">Imię: <span>{name}</span></p>
                        <p className="Surname">Nazwisko: <span>{surname}</span></p>
                        <p className="Birthday">Data urodzin: <span>{birthday}</span></p>
                        <p className="Description">Opis: <span>{description}</span></p>
                    </div>
                    <button className="mySelf" onClick={this.handleEditProfile}>Edytuj</button>
                </div>
            </div>
        )
    }
}
export default MyAccount;