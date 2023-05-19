

class Karakter {
    #eletero;
    #sebzes;
    #pos;
    #kep;
    #divElem;
    #szuloElem;
    
    constructor(eletero, sebzes, pos, kep, szuloElem) {
        this.setEletero(eletero);
        this.setSebzes(sebzes);
        this.setPos(pos);
        this.#kep = kep;
        this.#szuloElem = szuloElem;
    }

    getEletero() {
        return this.#eletero;
    }

    getSebzes() {
        return this.#sebzes;
    }

    getPos() {
        return this.#pos;
    }

    setEletero(ujEletero) {
        this.#eletero = ujEletero;
    }

    setSebzes(ujSebzes) {
        this.#sebzes = ujSebzes;
    }

    setPos(ujPos) {
        this.pos = ujPos;

    }

    modositEletero(modosito) {
        this.setEletero(this.#eletero + modosito);
    }

    modositSebzes(modosito) {
        this.setSebzes(this.#sebzes + modosito);
    }
}

export default Karakter;