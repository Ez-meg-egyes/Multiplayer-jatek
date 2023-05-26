import Palya from "./Palya.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;

    constructor() {
        const INDIT = $("#indit");
        const MAIN = $("main");
        INDIT.on("click", () => {
            INDIT.css("display", "none");
            MAIN.css("background-image", "none");
            this.#aktualisPalya = new Palya(1, 2, [10, 8]);
            this.#mozgasKezeles();
        });
    }

    #mozgasKezeles() {
        document.addEventListener("keydown", (event) => {
            console.log(event.key);
            //majd a pos x-hez kell adni egyet
            let jatekos = this.#aktualisPalya.getJatekosok();
            switch (event.key) {
                case "w" || "W":
                    jatekos.setPos([jatekos.getPos()[0] - 1, jatekos.getPos()[1]]);
                    break;
                case "a" || "A":
                    jatekos.setPos([jatekos.getPos()[0], jatekos.getPos()[1] - 1]);
                    break;
                case "s" || "S":
                    jatekos.setPos([jatekos.getPos()[0] , jatekos.getPos()[1]]);
                    break;
                case "d" || "D":
                    jatekos.setPos([jatekos.getPos()[0] + 1 , jatekos.getPos()[1]]);
                    break;
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