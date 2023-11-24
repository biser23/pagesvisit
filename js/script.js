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

