import Karakter from "./Karakter.js";

class Jatekos extends Karakter {
    #nev;
    #targyak;

    constructor(id, eletero, sebzes, pos, kep, nev, szuloElem) {
        super(id, eletero, sebzes, pos, kep, szuloElem, "jatekos");
        this.#nev = nev;
        this.htmlBeagyazas(szuloElem);
    }

    getNev() {
        return this.#nev;
    }

    htmlBeagyazas(szuloElem) {
        szuloElem.append(`<div id="jatekos-${this.getId()}" class="karakter"><div class="nev">${this.#nev}</div>`)
    }

}

export default Jatekos;