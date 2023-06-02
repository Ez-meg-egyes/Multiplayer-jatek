import Palya from "./Palya.js";
import PalyaElem from "./PalyaElem.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;
    #ellensegek =[];

    constructor() {
        const INDIT = $("#indit");
        const MAIN = $("main");
        INDIT.on("click", () => {
            $("#zene").play;
            $("#jatekTer").focus();
            INDIT.css("display", "none");
            MAIN.css("background-image", "none");
            this.#aktualisPalya = new Palya(1, 2, [10, 8]);
            this.#scrollblock();
            this.#mozgasKezeles();

            this.#jatekosok = this.#aktualisPalya.getJatekosok();
            this.#ellensegek = this.#aktualisPalya.getEllensegek();

            setInterval(() => {
                this.#ellensegMozgatas();
            }, 1000);
        });
        
    }

    #mozgasKezeles() {
        $("#jatekTer").on("keydown", (event) => {
            let jatekos = this.#aktualisPalya.getJatekosok()[0];
            /* console.log(event.key.toLowerCase()); */
            console.log(event.keyCode);
            switch (event.keyCode) {
                case 87:
                    jatekos.setPos([jatekos.getPos()[0] - 1, jatekos.getPos()[1]]);
                    break;
                case 65:
                    jatekos.setPos([jatekos.getPos()[0], jatekos.getPos()[1] - 1]);
                    break;
                case 83:
                    jatekos.setPos([jatekos.getPos()[0] + 1, jatekos.getPos()[1]]);
                    break;
                case 68:
                    jatekos.setPos([jatekos.getPos()[0] , jatekos.getPos()[1] + 1]);
                    break;
            }
            console.log("P1 => x:"+jatekos.getPos()[0] + ", y:"+jatekos.getPos()[1]);
            $("#jatekos-1").remove();
            let aktualisPalyaElem = this.#aktualisPalya.getPalyaElem(jatekos.getPos()[0], jatekos.getPos()[1]).getDivElem();
            aktualisPalyaElem.append(`<div id="jatekos-1" class="karakter"></div>`)
        });

        $("#jatekTer").on("keydown", (event) => {
            let jatekos = this.#aktualisPalya.getJatekosok()[1];
            switch (event.keyCode) {
                case 38:
                    jatekos.setPos([jatekos.getPos()[0] - 1, jatekos.getPos()[1]]);
                    break;
                case 37:
                    jatekos.setPos([jatekos.getPos()[0], jatekos.getPos()[1] - 1]);
                    break;
                case 40:
                    jatekos.setPos([jatekos.getPos()[0] + 1, jatekos.getPos()[1]]);
                    break;
                case 39:
                    jatekos.setPos([jatekos.getPos()[0] , jatekos.getPos()[1] + 1]);
                    break;
            }
            console.log("P2 => x:"+jatekos.getPos()[0] + ", y:"+jatekos.getPos()[1]);
            $("#jatekos-2").remove();
            let aktualisPalyaElem = this.#aktualisPalya.getPalyaElem(jatekos.getPos()[0], jatekos.getPos()[1]).getDivElem();
            aktualisPalyaElem.append(`<div id="jatekos-2" class="karakter"></div>`)
        });
    }

    #tamadasKezeles() {

    }

    #targyDobas() {

    }

    #ellensegMozgatas() {
        this.#ellensegek.forEach(ellenseg => {
            $(`#ellenseg-${ellenseg.getId()}`).remove();

            let palyaElem, ujPos, irany, mozgas;
            const regiPos = ellenseg.getPos();
            do {
                ujPos = regiPos.slice();
                irany = this.#randomSzam(0, 1);
                mozgas = this.#randomSzam(-1, 1);
                ujPos[irany] += mozgas;
                if (mozgas == 1) {
                    console.log(irany, "=>", mozgas);
                }
                
                palyaElem = this.#aktualisPalya.getPalyaElem(ujPos[0], ujPos[1]);

            } while(!(palyaElem && palyaElem.ralepheto()));

            ellenseg.setPos(ujPos);
            
            ellenseg.htmlBeagyazas(palyaElem.getDivElem());
            
        });
    }
    #randomSzam(min, max) {
        return Math.round(Math.random() * (max + 1) + min);
    }

    #scrollblock() {
        $(window).on(
          "keydown",
          function (e) {
            if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
              e.preventDefault();}
            },false);
    }

    #szintKezeles() {

    }

    #ellensegTamadasKezeles() {

    }
}

export default Jatekter;