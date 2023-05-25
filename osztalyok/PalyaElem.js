
class PalyaElem {

    #tipus;
    #kep;
    #targy;
    #divElem;

    constructor(tipus, kep, targy) {
        this.#tipus = tipus;
        this.#kep = kep;
        this.#targy = targy;
        let szuloElem = $("#jatekTer");
        szuloElem.append(`<div class="divElem"></div>`);
        this.#divElem = $(".divElem:last-child");
    }

    getTipus(){
        return this.#tipus;
    }

    ralepheto(){

    }

    getTargy(){
        return this.#targy;
    }

    removeTargy(){

    }
}

export default PalyaElem;