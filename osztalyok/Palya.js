import PalyaElem from "./PalyaElem.js";
import Jatekos from "./Jatekos.js";
import Ellenseg from "./Ellenseg.js";
class Palya {

    #palyaSzam;
    #ellensegek = [];
    #palyaElemek = [];

    constructor(palyaSzam, ellensegekSzama, palyaMeret) {
        this.#palyaSzam = palyaSzam;
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
    }

    ellensegInit(ellensegekSzama) {
        for (let i = 0; i < ellensegekSzama; i++) {
            let x, y;

            do {
                x = this.#randomSzam(0, this.#palyaElemek.length);
                y = this.#randomSzam(0, this.#palyaElemek[0].length);
                console.log(this.#palyaElemek[x][y].ralepheto());
            } while (!this.#palyaElemek[x][y].ralepheto());

            this.#ellensegek.push(new Ellenseg(i, 10, 2, [x, y], "kepek/ellenseg.gif", this.#palyaElemek[x][y].getDivElem()));
        }
    }

    #randomSzam(min, max) {
        return Math.floor(Math.random() * max + min)
    }

    jatekosInit(){
        let jatekos = new Jatekos(0, 10, 2, [0, 0], "./kepek/jatekos.gif", "Teszt", $("#jatekTer div:first-child"));
    }
}

export default Palya;