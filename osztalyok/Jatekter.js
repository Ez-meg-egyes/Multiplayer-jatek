import Palya from "./Palya.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;
    #ellensegek =[];
    #palya;

    constructor() {
        const INDIT = $("#indit");
        const MAIN = $("main");
        INDIT.on("click", () => {
            INDIT.css("display", "none");
            MAIN.css("background-image", "none");
            this.#aktualisPalya = new Palya(1, 2, [10, 8]);
            this.#mozgasKezeles();

            this.#jatekosok = this.#palya.getJatekosok();
            this.#ellensegek = this.#palya.getEllensegek();

            setInterval(() => {
                this.#ellensegMozgatas();
            }, 1000);
        });
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