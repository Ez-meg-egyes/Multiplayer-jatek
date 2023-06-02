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

            this.#jatekosok = this.#aktualisPalya.getJatekosok();
            this.#ellensegek = this.#aktualisPalya.getEllensegek();

            setInterval(() => {
                this.#ellensegMozgatas();
            }, 1000);
        });
        
    }

    #mozgasKezeles() {
        $("#jatekTer").on("keydown", (event) => {
            let jatekosok = this.#aktualisPalya.getJatekosok();
            let key = event.keyCode;
            let P1offsetx = 0;
            let P1offsety = 0;
            let P2offsetx = 0;
            let P2offsety = 0;
            if(key == 87){
                P1offsetx -= 1;
            } else if(key == 65){
                P1offsety -= 1;
            }else if(key == 83){
                P1offsetx += 1;
            }else if(key == 68){
                P1offsety += 1;
            }

            if(key == 38){
                P2offsetx -= 1;
            } else if(key == 37){
                P2offsety -= 1;
            }else if(key == 40){
                P2offsetx += 1;
            }else if(key == 39){
                P2offsety += 1;
            }
            let jatekos = jatekosok[0];
            jatekos.setPos([jatekos.getX() + P1offsetx, jatekos.getY() + P1offsety]);
            $("#jatekos-1").remove();
            let aktualisPalyaElem = this.#aktualisPalya.getPalyaElem(jatekos.getPos()[0], jatekos.getPos()[1]).getDivElem();
            jatekos.htmlBeagyazas(aktualisPalyaElem);
            
            
            jatekos = jatekosok[1];
            jatekos.setPos([jatekos.getX() + P2offsetx, jatekos.getY() + P2offsety]);
            $("#jatekos-2").remove();
            aktualisPalyaElem = this.#aktualisPalya.getPalyaElem(jatekos.getPos()[0], jatekos.getPos()[1]).getDivElem();
            jatekos.htmlBeagyazas(aktualisPalyaElem);
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