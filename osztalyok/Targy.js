
class Targy {
    #nev
    #kep
    #tulajdonsag
    #divElem
    constructor(nev, kep, tulajdonsag) {
        this.#nev = nev;
        this.#kep = kep;
        this.#tulajdonsag = tulajdonsag;
    }

    getNev(){
        return this.#nev;
    }

    getKep(){
        return this.#kep;
    }

    getTulajdonsag(){
        return this.#tulajdonsag;
    }
}

export default Targy;