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
            let x, y;

            do {
                x = this.#randomSzam(0, this.#palyaElemek.length);
                y = this.#randomSzam(0, this.#palyaElemek[0].length);
            } while (!this.#palyaElemek[x][y].ralepheto() || this.#vanEKarakter(x, y));

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
        this.#jatekosok.push(new Jatekos(1, 10, 2, [1, 1], "./kepek/jatekos.gif", "Teszt", this.#palyaElemek[1][1].getDivElem()));
        this.#jatekosok.push(new Jatekos(2, 10, 2, [1, 2], "./kepek/jatekos.gif", "Teszt", this.#palyaElemek[1][2].getDivElem()));
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
    
}

export default Palya;