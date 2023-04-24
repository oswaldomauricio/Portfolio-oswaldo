let card_design = document.getElementById("card-design")
let card_desenvolvimento_web = document.getElementById("desenvolvimento-web-card")
let excel_card = document.getElementById("excel-card")

let card_servicos_design = document.getElementById("card-design")


function desenvolvimento_web(){
    card_desenvolvimento_web.style.display = "grid";
    card_servicos_design.style.display = "none";
    excel_card.style.display = "none";


}
function designer(){
    card_desenvolvimento_web.style.display = "none";
    card_servicos_design.style.display = "grid";
    excel_card.style.display = "none";

}
function excel(){
    card_desenvolvimento_web.style.display = "none";
    card_servicos_design.style.display = "none";
    excel_card.style.display = "grid";
}
