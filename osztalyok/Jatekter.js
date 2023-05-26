import Palya from "./Palya.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;
    #ellensegek =[];

    constructor() {
        const INDIT = $("#indit");
        const MAIN = $("main");
        INDIT.on("click", () => {
            INDIT.css("display", "none");
            MAIN.css("background-image", "none");
            this.#aktualisPalya = new Palya(1, 2, [10, 8]);
            this.#mozgasKezeles();

            this.#jatekosok = this.#aktualisPalya.getJatekosok();
            this.#ellensegek = this.#aktualisPalya.getEllensegek();

            setInterval(() => {
                this.#ellensegMozgatas();
            }, 1000);
        });
    }

    #mozgasKezeles() {
        document.addEventListener("keydown", (event) => {
            console.log(event.key);
            //majd a pos x-hez kell adni egyet
            let jatekos = this.#aktualisPalya.getJatekosok();
            switch (event.key) {
                case "w" || "W":
                    jatekos.setPos([jatekos.getPos()[0], jatekos.getPos()[1] - 1]);
                    break;
                case "a" || "A":
                    jatekos.setPos([jatekos.getPos()[0] - 1, jatekos.getPos()[1]]);
                    break;
                case "s" || "S":
                    jatekos.setPos([jatekos.getPos()[0], jatekos.getPos()[1] + 1]);
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
        this.#ellensegek.forEach(ellenseg => {
            $(`#ellenseg-${ellenseg.getId()}`).remove();

            let palyaElem, ujPos, irany, mozgas;
            let palyaMeret = this.#aktualisPalya;
            do {
                ujPos = ellenseg.getPos();
                irany = this.#randomSzam(0, 1);
                mozgas = this.#randomSzam(-1, 1);
                ujPos[irany] += mozgas;

                palyaElem = this.#aktualisPalya.getPalyaElem(ujPos[0], ujPos[1]);

            } while((ujPos[0] > palyaMeret[0] || ujPos[1] > palyaMeret[1] || ujPos[0] < 0 || ujPos[1] < 0) || !palyaElem.ralepheto());

            
            ellenseg.htmlBeagyazas(palyaElem.getDivElem());
            
        });
    }
    #randomSzam(min, max) {
        return Math.floor(Math.random() * (max+1) + min);
    }

    #szintKezeles() {

    }

    #ellensegTamadasKezeles() {

    }
}

export default Jatekter;