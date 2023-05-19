import Karakter from "./Karakter.js";

class Ellenseg extends Karakter {
    #dobottTargy;

    constructor(eletero, sebzes, pos, kep, szuloElem) {
        super(eletero, sebzes, pos, kep, szuloElem);
    }

    getDobottTargy() {
        return this.#dobottTargy;
    }
}

export default Ellenseg;