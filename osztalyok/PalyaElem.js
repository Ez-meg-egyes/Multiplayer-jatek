/*
    típusok:
    fal, talaj, blokad
*/

const PALYA_TIPUSOK = {
    fal : "kepek/fal.png",
    talaj : "kepek/talaj.png",
    blokad : "kepek/blokad.png"
}

class PalyaElem {

    #tipus;
    #kep;
    #targy;
    #divElem;

    constructor(tipus, targy) {
        this.#tipus = `"${tipus}"`;
        this.#kep = PALYA_TIPUSOK.tipus;
        this.#targy = targy;
        let szuloElem = $("#jatekTer");
        szuloElem.append(`<div class="kocka ${tipus}"></div>`);
        this.#divElem = $(".kocka:last-child");
    }

    getTipus() {
        return this.#tipus;
    }

    ralepheto() {
        return this.#tipus === "talaj";
    }

    getTargy() {
        return this.#targy;
    }

    removeTargy() {

    }
}

export default PalyaElem;