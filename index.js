import Jatekter from "./osztalyok/Jatekter.js";

$(() => {
    new Jatekter();
    $("#closeModal").on("click", ()=>{
        location.reload();
    })
});