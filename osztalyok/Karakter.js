

class Karakter {
    #eletero;
    #sebzes;
    #pos = [];
    #kep;
    #divElem;
    #szuloElem;
    #id;
    #tipus;

    constructor(id, eletero, sebzes, pos, kep, szuloElem, tipus) {
        this.setEletero(eletero);
        this.setSebzes(sebzes);
        this.setPos(pos);
        this.#id = id;
        this.#kep = kep;
        this.#szuloElem = szuloElem;
        this.#tipus = tipus;
    }

    getEletero() {
        return this.#eletero;
    }

    getSebzes() {
        return this.#sebzes;
    }

    getPos() {
        return this.#pos.slice();
    }

    getX() {
        return this.#pos[0];
    }

    getY() {
        return this.#pos[1];
    }
    
    getId() {
        return this.#id;
    }

    setEletero(ujEletero) {
        this.#eletero = ujEletero;
    }

    setSebzes(ujSebzes) {
        this.#sebzes = ujSebzes;
    }

    setPos(ujPos) {
        this.#pos = ujPos;

    }

    getTipus() {
        return this.#tipus;
    }

    modositEletero(modosito) {
        this.setEletero(this.#eletero + modosito);
    }

    modositSebzes(modosito) {
        this.setSebzes(this.#sebzes + modosito);
    }
}

export default Karakter;