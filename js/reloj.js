const monstrarfecha = () =>{
  const fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seco = formatoHora(fecha.getSeconds());
  document.getElementById('hora').innerHTML = `${hr}:${min}:${seco}`;

  const meses = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
  document.getElementById('fecha').innerHTML = fechaTexto;
}

const formatoHora = (hora)=>{
  if(hora < 10)
      hora = '0' + hora;
  return hora;    
}

setInterval(monstrarfecha,100)