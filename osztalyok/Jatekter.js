import Palya from "./Palya.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;
    #ellensegek =[];
    #palya;

    constructor() {
        this.#palya = new Palya(1, 2, [10, 8]);
        this.#jatekosok = this.#palya.getJatekosok();
        this.#ellensegek = this.#palya.getEllensegek();

        setInterval(() => {
            this.#ellensegMozgatas();
        }, 1000);
    }

    #mozgasKezeles() {

    }

    #tamadasKezeles() {

    }

    #targyDobas() {

    }
    
    #ellensegMozgatas() {
        this.#ellensegek.forEach(ellenseg => {
            /* $(`#ellenseg-${ellenseg.getId()}`).remove(); */
            console.log(ellenseg);
            console.log(ellenseg.getPos());
        });
    }

    #szintKezeles() {

    }

    #ellensegTamadasKezeles() {

    }
}

export default Jatekter;