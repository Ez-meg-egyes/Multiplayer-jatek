import Karakter from "./Karakter.js";

class Ellenseg extends Karakter {
    #dobottTargy;
    constructor(id, eletero, sebzes, pos, kep, szuloElem) {
        super(id, eletero, sebzes, pos, kep, szuloElem, "ellenseg");
        this.htmlBeagyazas(szuloElem);
    }

    getDobottTargy() {
        return this.#dobottTargy;
    }

    htmlBeagyazas(szuloElem) {
        szuloElem.append(`<div id="ellenseg-${this.getId()}" class="ellenseg">
                            <div class="hp">${this.getEletero()}</div>
                          </div>`); 
    }
}

export default Ellenseg;