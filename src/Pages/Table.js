import React, { Component } from "react";
import Ad from "./Ad"
import FirstAd from "./FirstAd"
import SecondAd from "./SecondAd";
import ThirdAd from "./ThirdAd";
import FourthAd from "./FourthAd";

const list = [
    { id: 1, title: "Pierwsze ogłoszenie", path: "/firstAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony będzie można, wysłać Cv, zapisać do ulubiony itp itd..." },
    { id: 2, title: "Drugie ogłoszenie", path: "/secondAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony będzie można, wysłać Cv, zapisać do ulubiony itp itd..." },
    { id: 3, title: "Trzecie ogłoszenie", path: "/thirdAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony będzie można, wysłać Cv, zapisać do ulubiony itp itd..." },
    { id: 4, title: "Czwarte ogłoszenie", path: "/fourthAd", text: "Treść ogłoszenia na które możesz odpowiedzieć, poprzez kliknięcie w przycisk poniżej. Docelowo będzie tak, że po kliknięciu w ten button, otworzy się strona dla konkretnego ogłoszenia. Ze strony będzie można, wysłać Cv, zapisać do ulubiony itp itd..." }

]

class Table extends Component {

    state = {
        firstAd: false,
        secondAd: false,
        thirdAd: false,
        fourthAd: false,
        firstAdPath: "/firstAd",

    }
    handleExit = () => {
        this.setState({
            firstAd: false,
            secondAd: false,
            thirdAd: false,
            fourthAd: false,
        })
    }

    viewAdd = (id) => {
        switch (id) {
            case 1:
                this.setState({
                    firstAd: true
                })

                break;
            case 2:
                this.setState({
                    secondAd: true
                })
                break;
            case 3:
                this.setState({
                    thirdAd: true
                })
                break;
            default:
                this.setState({
                    fourthAd: true
                })
        }
    }

    render() {

        const ad = list.map(item => (
            <Ad key={item.id} {...item} viewAdd={this.viewAdd} />
        ))


        const { firstAd, secondAd, thirdAd, fourthAd } = this.state;



        return (
            <div className="Table">
                <h2>Tablica</h2>
                {ad}

                {firstAd ? <FirstAd exit={this.handleExit} /> : null}
                {secondAd ? <SecondAd exit={this.handleExit} /> : null}
                {thirdAd ? <ThirdAd exit={this.handleExit} /> : null}
                {fourthAd ? <FourthAd exit={this.handleExit} /> : null}
            </div>
        )
    }
}
export default Table;