import Karakter from "./Karakter.js";

class Ellenseg extends Karakter {
    #dobottTargy;
    constructor(id, eletero, sebzes, pos, kep, szuloElem) {
        super(id, eletero, sebzes, pos, kep, szuloElem);
        this.htmlBeagyazas(szuloElem);
    }

    getDobottTargy() {
        return this.#dobottTargy;
    }

    htmlBeagyazas(szuloElem) {
        szuloElem.append(`<div id="ellenseg-${this.getId()}" class="ellenseg"></div>`); 
    }
}

export default Ellenseg;