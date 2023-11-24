var visitas = localStorage.getItem('contador');
var reset = localStorage.getItem('btnReestablecer');

if (visitas === null) {
    visitas = 0;
}
visitas++;
localStorage.setItem("contador", visitas);
document.getElementById('contadorVisitas').innerHTML = visitas;

reset.addEventListener('click', () => {
    visitas = 0;
    localStorage.setItem('btnReestablecer', 0);
    visitas.innerHTML = reset;});








//PRUEBAS

/*let visitas = document.getElementById('#contadorVisitas');
let reset = document.getElementById('#btnReestablecer');
let nVisitas = localStorage.getItem('page_view');

if (nVisitas) {
    nVisitas = Number(nVisitas) + 1;
    localStorage.setItem('page_view', nVisitas);
} else{
    nVisitas = 1;
    localStorage.setItem('page_view', 1);

}
visitas.innerHTML = nVisitas;

reset.addEventListener('click', () => {
    nVisitas = 1;
    localStorage.setItem('page_view', 1);
    visitas.innerHTML = nVisitas;
});*/

/*

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});*/