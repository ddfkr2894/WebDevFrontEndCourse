console.log('Aquí probando probandoooooooooooooooo...');

const mostrarReloj=()=>{
    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();
    document.getElementById('hora').innerHTML = `${hora}:${min}:${sec}`;
    
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    
    // Con esta línea creamos el efecto de parpadeo por segundo
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{
if(hora < 10)
    hora = '0' + hora;
return hora;    
}

setInterval(mostrarReloj, 1000);