import Palya from "./Palya.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;

    constructor() {
        this.#aktualisPalya = new Palya(1, 0, [10, 8]);
        this.#mozgasKezeles();
    }

    #mozgasKezeles() {
        document.addEventListener("keydown", (event) => {
            console.log(event.key);
            //majd a pos x-hez kell adni egyet
            if (event.key === "w") {
                let jatekos = this.#aktualisPalya.getJatekosok();
                console.log(jatekos.getPos());
                
            }
        })
    }

    #tamadasKezeles() {

    }

    #targyDobas() {

    }

    #ellensegMozgatas() {

    }

    #szintKezeles() {

    }

    #ellensegTamadasKezeles() {

    }
}

export default Jatekter;