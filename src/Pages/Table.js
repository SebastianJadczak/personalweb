import React, { Component } from "react";
import Ad from "./Ad"

const list = [
    { id: 1, title: "Pierwsze ogłoszenie", path: "/firstAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony ogłoszenia będzie można odpowiedzieć na ogłoszenie, wysłać Cv, zapisać do ulubiony itp itd..." },
    { id: 2, title: "Drugie ogłoszenie", path: "/secondAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony ogłoszenia będzie można odpowiedzieć na ogłoszenie, wysłać Cv, zapisać do ulubiony itp itd..." },
    { id: 3, title: "Trzecie ogłoszenie", path: "/thirdAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony ogłoszenia będzie można odpowiedzieć na ogłoszenie, wysłać Cv, zapisać do ulubiony itp itd..." },
    { id: 4, title: "Czwarte ogłoszenie", path: "/fourthAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony ogłoszenia będzie można odpowiedzieć na ogłoszenie, wysłać Cv, zapisać do ulubiony itp itd..." }

]

class Table extends Component {


    render() {

        const ad = list.map(item => (
            <Ad key={item.id} {...item} />
        ))


        return (
            <div className="Table">
                <h2>Tablica</h2>
                {ad}
            </div>
        )
    }
}
export default Table;