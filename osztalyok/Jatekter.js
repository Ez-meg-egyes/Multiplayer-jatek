import Palya from "./Palya.js";

class Jatekter {

    #aktualisPalya;
    #jatekosok;

    constructor() {
        const INDIT = $("#indit");
        const MAIN = $("main");
        INDIT.on("click", function () {
            INDIT.css("display", "none");
            MAIN.css("background-image", "none");
            new Palya(1, 2, [10, 8]);
        });
    }

    #mozgasKezeles() {

    }

    #tamadasKezeles() {

    }

    #targyDobas() {

    }
    
    #ellensegMozgatas() {

    }

    #szintKezeles() {

    }

    #ellensegTamadasKezeles() {

    }
}

export default Jatekter;