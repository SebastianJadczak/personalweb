import React from "react";

const EditProfile = (props) => {

    return (
        <div className="EditProfile">
            <span className="x" onClick={props.exit}>X</span>
            <h3>Zmień Dane:</h3>

            <div className="changeName">
                <label>Podaj imię</label>
                <input type="text" onChange={props.handleChangeName} />
            </div>

            <div className="changeSurname">
                <label>Podaj Nazwisko</label>
                <input type="text" onChange={props.handleChangeSurname} />
            </div>

            <div className="changeBirthday">
                <label>Podaj datę urodzin</label>
                <input type="text" onChange={props.handleChangeBirthday} />
            </div>

            <div className="changeDescription">
                <label>Podaj Opis</label>
                <textarea className="description" onChange={props.handleChangeDescription}></textarea>
            </div>

            <button onClick={props.exit}>Zapisz i Wyjdź</button>
        </div>
    )
}

export default EditProfile;