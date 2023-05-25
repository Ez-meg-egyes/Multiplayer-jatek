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
            for (let j = 0; j < palyaMeret[0]; j++) {
                if ((i == 0 || i == palyaMeret[1]-1) || (j == 0 || j == palyaMeret[0]-1)) {
                    let DIV = new PalyaElem("fal");
                } else {
                    let DIV = new PalyaElem("talaj");
                }
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