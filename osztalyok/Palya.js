
class Palya {

    #palyaSzam;
    #ellensegek = [];
    #palyaElemek = [];

    constructor(palyaSzam, ellensegek, palyaMeret) {
        this.#palyaSzam = palyaSzam;
        this.#ellensegek = ellensegek;
    }

    getEllensegek() {
        return this.#ellensegek;
    }
}

export default Palya;