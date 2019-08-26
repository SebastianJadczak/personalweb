import React from "react";

const EditProfile = (props) => {
    return (
        <div className="EditProfile">
            <h3>Zmień Dane:</h3>

            <div className="changeName">
                <label>Podaj imię</label>
                <input type="text" />
            </div>

            <div className="changeSurname">
                <label>Podaj Nazwisko</label>
                <input type="text" />
            </div>

            <div className="changeBirthday">
                <label>Podaj datę urodzin</label>
                <input type="text" />
            </div>

            <div className="changeDescription">
                <label>Podaj Opis</label>
                <textarea className="description"></textarea>
            </div>

            <button onClick={props.exit}>Zapisz i Wyjdź</button>
        </div>
    )
}
export default EditProfile;