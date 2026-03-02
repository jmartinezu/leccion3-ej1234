const btnEstado = document.getElementById('btnEstado');
const alertaEstado = document.getElementById('alertaEstado');

if (btnEstado) { 
    btnEstado.addEventListener('click', function() {
        alertaEstado.style.display = 'block';
        setTimeout(() => {
            alertaEstado.style.display = 'none';
        }, 4000);
    });
}


const botonArriba = document.getElementById('btn-ir-arriba');


window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
};

if (botonArriba) {
    botonArriba.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}