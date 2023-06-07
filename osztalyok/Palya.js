import PalyaElem from "./PalyaElem.js";
import Jatekos from "./Jatekos.js";
import Ellenseg from "./Ellenseg.js";
class Palya {

    #palyaSzam;
    #ellensegek = [];
    #palyaElemek = [];
    #jatekosok = [];
    #jatekos;
    #palyaMeret;

    constructor(palyaSzam, ellensegekSzama, palyaMeret) {
        this.#palyaSzam = palyaSzam;
        this.#palyaMeret = palyaMeret;
        this.init(palyaMeret, ellensegekSzama);
    }

    getEllensegek() {
        return this.#ellensegek;
    }

    ralepheto(x, y) {
        if (this.#palyaElemek[x][y].getTipus() === "talaj" && !this.#vanEKarakter(x, y)) {
            return true;
        }else{
            return false;
        }      
    }

    init(palyaMeret, ellensegekSzama){
        this.palyaInit(palyaMeret);
        this.jatekosInit();
        this.ellensegInit(ellensegekSzama);
    }

    palyaInit(palyaMeret){        
        for (let i = 0; i < palyaMeret[1]; i++) {
            this.#palyaElemek[i] = [];

            for (let j = 0; j < palyaMeret[0]; j++) {
                if ((i == 0 || i == palyaMeret[1]-1) || (j == 0 || j == palyaMeret[0]-1)) {
                    this.#palyaElemek[i].push(new PalyaElem("fal"));
                } else {
                    this.#palyaElemek[i].push(new PalyaElem("talaj"));
                }
            }
        }
        let blokadDB = 0;
        while (blokadDB < 5) {
            let x = this.#randomSzam(1, 6);
            let y = this.#randomSzam(1, 8);
            if (this.#palyaElemek[x][y].getTipus() == "talaj") {
                this.#palyaElemek[x][y].setTipus("blokad");
                blokadDB++;
            }
        }
    }

    ellensegInit(ellensegekSzama) {
        for (let i = 0; i < ellensegekSzama; i++) {
            let hely = this.getRandomHely();
            let x = hely[0];
            let y = hely[1];

            this.#ellensegek.push(new Ellenseg(i, 10, 2, [x, y], "kepek/ellenseg.gif", this.#palyaElemek[x][y].getDivElem()));
        }
    }

    #randomSzam(min, max) {
        return Math.floor(Math.random() * (max + 1) + min);
    }
    #vanEKarakter(x, y) {
        let karakterek = this.#jatekosok.concat(this.#ellensegek);
        if(karakterek.length === 0) {
            return false;
        }
        let i = 0;
        while (i < karakterek.length && !(karakterek[i].getX() == x && karakterek[i].getY() == y)) {
            i++;
        }

        return i < karakterek.length;
    }

    jatekosInit(){
        let j1Input = $("#jatekos-1-input");
        let j2Input = $("#jatekos-2-input");
        let jatekos1Nev = j1Input.val().length > 0 ? j1Input.val() : j1Input.attr("placeholder"); 
        let jatekos2Nev = j2Input.val().length > 0 ? j2Input.val() : j2Input.attr("placeholder"); 

        let hely = this.getRandomHely();
        let x = hely[0];
        let y = hely[1];
        this.#jatekosok.push(new Jatekos(1, 10, 2, [x, y], "./kepek/jatekos.gif", jatekos1Nev, this.#palyaElemek[x][y].getDivElem()));
        hely = this.getRandomHely();
        x = hely[0];
        y = hely[1];
        this.#jatekosok.push(new Jatekos(2, 10, 2, [x, y], "./kepek/jatekos.gif", jatekos2Nev, this.#palyaElemek[x][y].getDivElem()));
    }

    getJatekosok() {
        return this.#jatekosok;
    }

    getPalyaElem(x, y) {
        if (x > this.#palyaMeret[0] || y > this.#palyaMeret[1] || x < 0 || y < 0) {return false;}
        return this.#palyaElemek[x][y];
    }

    getPalyaMeret() {

    }
    
    getRandomHely(){
        let x, y;
        do {
            x = this.#randomSzam(0, this.#palyaElemek.length - 1);
            y = this.#randomSzam(0, this.#palyaElemek[0].length - 1);
        } while (!(this.getPalyaElem(x, y) && this.ralepheto(x, y)));
        return [x, y];
    }
}

export default Palya;