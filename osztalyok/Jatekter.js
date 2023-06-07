import Palya from "./Palya.js";
import PalyaElem from "./PalyaElem.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;
    #ellensegek =[];

    constructor() {
        const MAIN = $("main");
        $("#indit").on("click", () => {
            $("#zene")[0].play();
            $("#jatekTer").focus();
            $("#menu").css("display", "none");
            MAIN.css("background-image", "none");
            this.#aktualisPalya = new Palya(1, 2, [10, 8]);
            this.#scrollblock();
            this.#mozgasKezeles();
            this.#tamadasKezeles();

            this.#jatekosok = this.#aktualisPalya.getJatekosok();
            this.#ellensegek = this.#aktualisPalya.getEllensegek();

            setInterval(() => {
                this.#ellensegMozgatas();
                this.#ellensegTamadasKezeles();
            }, 1500);
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
            if (jatekos.getEletero() > 0) {
                if (this.#aktualisPalya.ralepheto(jatekos.getX() + P1offsetx, jatekos.getY() + P1offsety)) {
                    
                    jatekos.setPos([jatekos.getX() + P1offsetx, jatekos.getY() + P1offsety]);
                    $("#jatekos-1").remove();
                    let aktualisPalyaElem1 = this.#aktualisPalya.getPalyaElem(jatekos.getPos()[0], jatekos.getPos()[1]).getDivElem();
                    jatekos.htmlBeagyazas(aktualisPalyaElem1);
                    
                } 

            }
            let jatekos2 = jatekosok[1];
            if (jatekos2.getEletero() > 0) {
                if (this.#aktualisPalya.ralepheto(jatekos2.getX() + P2offsetx, jatekos2.getY() + P2offsety)) {
                    
                    jatekos2.setPos([jatekos2.getX() + P2offsetx, jatekos2.getY() + P2offsety]);
                    $("#jatekos-2").remove();
                    let aktualisPalyaElem2 = this.#aktualisPalya.getPalyaElem(jatekos2.getPos()[0], jatekos2.getPos()[1]).getDivElem();
                    jatekos2.htmlBeagyazas(aktualisPalyaElem2);
                }
                
            }
            
        });
    }

    #tamadasKezeles() {
        let tamadhat1;
        let tamadhat2;
        $("#jatekTer").on("keydown", (event) => {
            let jatekos = this.#aktualisPalya.getJatekosok()[0];
            if (jatekos.getEletero() <= 0) {return;}

            if (typeof tamadhat1 === 'undefined') {
                tamadhat1 = true;
            }
            if (tamadhat1) {
                if (event.keyCode === 32) {

                    $("#jatekos-1").css('background-image', 'url("kepek/harc.gif")');
                    setTimeout(() => {
                        $("#jatekos-1").css('background-image', 'url("kepek/jatekos.gif")');
                    }, 600);
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
                    tamadhat1 = false;
                    setTimeout(() => {
                        tamadhat1 = true;
                    }, 1000);
                } 
            }
        });
        $("#jatekTer").on("keydown", (event) => {
            
            let jatekos = this.#aktualisPalya.getJatekosok()[1];
            if (jatekos.getEletero() <= 0) {return;}

            if (typeof tamadhat2 === 'undefined') {
                tamadhat2 = true;
            }
            if (tamadhat2) {
                if (event.code === "ControlRight") {
                    $("#jatekos-2").css('background-image', 'url("kepek/harc.gif")');
                    setTimeout(() => {
                        $("#jatekos-2").css('background-image', 'url("kepek/jatekos.gif")');
                    }, 600);
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
                    tamadhat2 = false;
                    setTimeout(() => {
                        tamadhat2 = true;
                    }, 1000);
                }
            }
        });
    }

    #ellensegekAKozelben(karakter) {
        const ELTOLASOK = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let karakterek = this.#jatekosok.slice().concat(this.#ellensegek);
        const karakterPos = karakter.getPos();
        let kozelbenLevok = [];

        karakterek.forEach(masikKarakter => {
            ELTOLASOK.forEach(eltolas => {
            const masikPos = masikKarakter.getPos();
                if ((karakter.getTipus() != masikKarakter.getTipus()) && (masikPos[1] === (karakterPos[1] + eltolas[0]) && masikPos[0] === (karakterPos[0] + eltolas[1]))) {
                    kozelbenLevok.push(masikKarakter);
                }
            });
        });

        return kozelbenLevok;
    }

    #ellensegEletLevonas(id) {
        let e = this.#ellensegek[id];
        if (e) {
            e.setEletero(e.getEletero() - this.#jatekosok[0].getSebzes());
            $(`#ellenseg-${e.getId()} .hp`).html(`${e.getEletero()}`);
            if (e.getEletero() > 0) {
                console.log("eletero " + e.getEletero());
                console.log("megmaradt eletero: " + e.getEletero());
            } else {
                $(`#ellenseg-${e.getId()}`).remove();
                console.log("meghalt: ellenseg-" + e.getId());
                this.#ellensegek.splice(id,1);
            }
        }
        this.#modal();
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
    #ellensegTamadasKezeles() {
        this.#ellensegek.forEach(ellenseg => {
            if (ellenseg.getEletero() > 0) {
                $(`#ellenseg-${ellenseg.getId()}`).css('background-image', 'url("kepek/ellenseg_tamadas.gif")');
                const jatekosok = this.#ellensegekAKozelben(ellenseg);
                for (let i = 0; i < jatekosok.length; i++) {
                    const jatekos = jatekosok[i];
                    
                    jatekos.modositEletero(-ellenseg.getSebzes());
                    $(`#jatekos-${jatekos.getId()} .hp`).html(`${jatekos.getEletero()}`);
                    if(jatekos.getEletero() <= 0) {
                        $(`#jatekos-${jatekos.getId()}`).remove();
                    }
                    
                }
                this.#modal();
                setTimeout(() => {
                    $(`#ellenseg-${ellenseg.getId()}`).css('background-image', 'url("kepek/ellenseg.gif")');
                }, 1450);
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

    #modal(){
        if(this.#ellensegek.length == 0 || (this.#jatekosok[0].getEletero() <= 0 && this.#jatekosok[1].getEletero() <= 0)){
            let palindromok = [];
            $("#myModal").css("display","block");
            if (this.#ellensegek.length == 0) {
                $("#myModal #nyert").html("A játékosok nyertek");
            } else{
                $("#myModal #nyert").html("Az ellenségek nyertek");
            }
            fetch('./palindromok.json')
                .then((response) => response.json())
                .then((json) => {
                    palindromok = json
                    let id = this.#randomSzam(0, palindromok.length);
                    $("#myModal #pali").html(palindromok[id]);

                })
                .catch((err) => {
                    $("#myModal #pali").html("Nincs palindrom ☹");
                    
                })

        }
    }
}

export default Jatekter;