
let showDate = document.getElementById("date");
let showclock = document.getElementById("clock");

let date = new Date();

let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

showDate.innerHTML = `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`

setInterval(() => {
    let hour = new Date();
    showclock.innerHTML = hour.toLocaleTimeString()
}, 1000);