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
            let jatekos = this.#jatekosok[0];
            if (this.#aktualisPalya.ralepheto(jatekos.getX() + P1offsetx, jatekos.getY() + P1offsety)) {
                
                jatekos.setPos([jatekos.getX() + P1offsetx, jatekos.getY() + P1offsety]);
                $("#jatekos-1").remove();
                let aktualisPalyaElem1 = this.#aktualisPalya.getPalyaElem(jatekos.getPos()[0], jatekos.getPos()[1]).getDivElem();
                jatekos.htmlBeagyazas(aktualisPalyaElem1);
                
            } 
            let jatekos2 = jatekosok[1];
            if (this.#aktualisPalya.ralepheto(jatekos2.getX() + P2offsetx, jatekos2.getY() + P2offsety)) {
                
                jatekos2.setPos([jatekos2.getX() + P2offsetx, jatekos2.getY() + P2offsety]);
                $("#jatekos-2").remove();
                let aktualisPalyaElem2 = this.#aktualisPalya.getPalyaElem(jatekos2.getPos()[0], jatekos2.getPos()[1]).getDivElem();
                jatekos2.htmlBeagyazas(aktualisPalyaElem2);
            }
            
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
            if (event.code === "ControlRight") {
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
        if (e && e.getEletero() > 0) {
            console.log("eletero " + e.getEletero());
            e.setEletero(e.getEletero() - this.#jatekosok[0].getSebzes());
            console.log("megmaradt eletero: " + e.getEletero());
        } else {
            $(`#ellenseg-${e.getId()}`).remove();
            console.log("meghalt: ellenseg-" + e.getId());
            this.#ellensegek.splice(id,1);
        }
    }

    #targyDobas() {

    }

    #ellensegMozgatas() {
        this.#ellensegek.forEach(ellenseg => {
            
            let palyaElem, ujPos, irany, mozgas, lepheto;
            const REGI_POS = ellenseg.getPos();
            let rosszIranyok = [];
            do {
                ujPos = REGI_POS.slice();
                irany = this.#randomSzam(0, 1);
                mozgas = this.#randomSzam(-1, 1);
                ujPos[irany] += mozgas;
                
                palyaElem = this.#aktualisPalya.getPalyaElem(ujPos[0], ujPos[1]);
                lepheto = palyaElem ? this.#aktualisPalya.ralepheto(ujPos[0], ujPos[1]) : false;
                
                let mozog = `${irany}#${mozgas}`;
                if (!lepheto && !rosszIranyok.includes(mozog)) {
                    rosszIranyok.push(mozog);
                }
                
            } while(rosszIranyok.length < 4 && !lepheto); 
            
            if (rosszIranyok.length < 4) {
                $(`#ellenseg-${ellenseg.getId()}`).remove();
                ellenseg.setPos(ujPos);
                ellenseg.htmlBeagyazas(palyaElem.getDivElem());
            }
        });
    }
    #randomSzam(min, max) {
        return Math.round((Math.random() * (max - min)) + min);
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