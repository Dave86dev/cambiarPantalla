
//cambio de sections en el html

const organizer = (arg_O) => {

    let fasewant = "pantalla" + arg_O;

    
    let arrFases = ["pantalla1", "pantalla2","pantalla3"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }

    
}