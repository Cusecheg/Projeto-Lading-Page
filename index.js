
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setadereita = window.document.getElementById("setadereita")
var setaizquerda = window.document.getElementById("setaizquerda")

function RolarParaDereita() {
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    setaizquerda.style = "display: flex"
    setadereita.style = "display: none"
}
function RolarParaIzquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaizquerda.style = "display: none"
    setadereita.style = "display: flex"
}
