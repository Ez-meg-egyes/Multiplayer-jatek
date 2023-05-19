import Karakter from "./Karakter.js";

class Jatekos extends Karakter {
    #nev;
    #targyak;

    constructor(eletero, sebzes, pos, kep, nev, szuloElem) {
        super(eletero, sebzes, pos, kep, szuloElem);
        this.#nev = nev;

        
    }

    getNev() {
        return this.#nev;
    }

}

export default Jatekos;