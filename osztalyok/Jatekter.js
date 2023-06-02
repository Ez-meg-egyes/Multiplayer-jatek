import Palya from "./Palya.js";

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
            this.#tamadasKezeles();

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
        $("#jatekTer").on("keydown", (event) => {
            let jatekos = this.#aktualisPalya.getJatekosok()[0];
            if (event.keyCode === 32) {
                $("#jatekos-1").css('background-image', 'url("kepek/harc.gif")');
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === (jatekos.getPos()[1] + 1) && this.#ellensegek[index].getPos()[0] === jatekos.getPos()[0]) {
                        this.#ellensegEletLevonas(index);
                    }
                }
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === (jatekos.getPos()[1] - 1) && this.#ellensegek[index].getPos()[0] === jatekos.getPos()[0]) {
                        this.#ellensegEletLevonas(index);
                    }
                }
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === jatekos.getPos()[1] && this.#ellensegek[index].getPos()[0] === (jatekos.getPos()[0] + 1)) {
                        this.#ellensegEletLevonas(index);
                    }
                }
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === jatekos.getPos()[1] && this.#ellensegek[index].getPos()[0] === (jatekos.getPos()[0] - 1)) {
                        this.#ellensegEletLevonas(index);
                    }
                }
            }
        });
        $("#jatekTer").on("keydown", (event) => {
            let jatekos = this.#aktualisPalya.getJatekosok()[1];
            if (event.keyCode === 17) {
                $("#jatekos-2").css('background-image', 'url("kepek/harc.gif")');
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === (jatekos.getPos()[1] + 1) && this.#ellensegek[index].getPos()[0] === jatekos.getPos()[0]) {
                        this.#ellensegEletLevonas(index);
                    }
                }
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === (jatekos.getPos()[1] - 1) && this.#ellensegek[index].getPos()[0] === jatekos.getPos()[0]) {
                        this.#ellensegEletLevonas(index);
                    }
                }
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === jatekos.getPos()[1] && this.#ellensegek[index].getPos()[0] === (jatekos.getPos()[0] + 1)) {
                        this.#ellensegEletLevonas(index);
                    }
                }
                for (let index = 0; index < this.#ellensegek.length; index++) {
                    if (this.#ellensegek[index].getPos()[1] === jatekos.getPos()[1] && this.#ellensegek[index].getPos()[0] === (jatekos.getPos()[0] - 1)) {
                        this.#ellensegEletLevonas(index);
                    }
                }
            }
        });
    }

    #ellensegEletLevonas(id) {
        let e = this.#ellensegek[id];
        if (this.#ellensegek[id].getEletero() > 0) {
            console.log("eletero " + e.getEletero());
            e.setEletero(e.getEletero() - this.#jatekosok[0].getSebzes());
            console.log("megmaradt eletero: " + e.getEletero());
        } else {
            $(`#ellenseg-${this.#ellensegek[id].getId()}`).remove();
            console.log("meghalt: ellenseg-" + this.#ellensegek[id].getId());
            this.#ellensegek.splice(id);
        }
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