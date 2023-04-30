let card_design = document.getElementById("card-design")
let card_desenvolvimento_web = document.getElementById("desenvolvimento-web-card")
let excel_card = document.getElementById("excel-card")

let card_servicos_design = document.getElementById("card-design")


let btns_competencias_designer = document.getElementById('designer')
let btns_competencias_desenvolvimento_web = document.getElementById('desenvolvimento-web')
let btns_competencias_excel = document.getElementById('excel')

btns_competencias_designer.addEventListener('click', designer)
btns_competencias_desenvolvimento_web.addEventListener('click', desenvolvimento_web)
btns_competencias_excel.addEventListener('click', excel)


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
