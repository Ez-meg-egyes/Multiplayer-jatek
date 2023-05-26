import PalyaElem from "./PalyaElem.js";
import Jatekos from "./Jatekos.js";
class Palya {

    #palyaSzam;
    #ellensegek = [];
    #palyaElemek = [];

    constructor(palyaSzam, ellensegek, palyaMeret) {
        this.#palyaSzam = palyaSzam;
        this.#ellensegek = ellensegek;
        this.init(palyaMeret);
    }

    getEllensegek() {
        return this.#ellensegek;
    }

    init(palyaMeret){
        this.palyaInit(palyaMeret);
        this.jatekosInit();
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
            let x = Math.floor(Math.random() * 6 + 1);
            let y = Math.floor(Math.random() * 8 + 1);
            if (this.#palyaElemek[x][y].getTipus() == "talaj") {
                this.#palyaElemek[x][y].setTipus("blokad");
                blokadDB++;
            }
        }
    }

    ellensegInit(){

    }

    jatekosInit(){
        let jatekos = new Jatekos(0, 10, 2, [0, 0], "./kepek/jatekos.gif", "Teszt", $("#jatekTer div:first-child"));
    }
}

export default Palya;