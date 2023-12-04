async function obtenerLibros() {
    try {
      // Supongamos que esta es tu URL de la API
      const apiUrl = 'http://localhost:3000/buscarLibros';
  
      // Realizar una solicitud GET a la API utilizando fetch
      const response = await fetch(apiUrl);
  
      // Verificar si la solicitud fue exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      // Convertir la respuesta a formato JSON
      const data = await response.json()
      return data
      // Aquí puedes realizar operaciones adicionales con los datos
  
    } catch (error) {
      // Manejar errores en la solicitud
      console.error('Error en la solicitud:', error);
    }
  }
// let botonVerLibros=document.getElementById("btnVerLibros")

async function verLibros(bandera) {
  let genero
  switch (bandera) {
    case 1:genero="anarquismo"
      break;
    case 2:genero="conservadurismo"
      break;
    case 3:genero="liberalismo"
      break;
  }
  await obtenerLibros().then((data)=>{
    let libros=  data.libros.filter((libro)=>{
      return libro.genero==genero;
    })
    document.getElementById('tablaLibros').getElementsByTagName('tbody')[0].innerHTML=""
    libros.forEach(libro => {
        const row = "<tr><td scope='col' class='text-center' style='width: 20%'>"+ libro.nombre+"</td><td scope='col' class='text-center' style='width: 20%' >"+ libro.autor + "</td><td scope='col' class='text-center' style='width: 20%' >" + libro.editorial+"</td><td class='text-center' ><a href='"+libro.url+"'>DESCARGAR</a></td></tr>"
        document.getElementById('tablaLibros').getElementsByTagName('tbody')[0].innerHTML+=row
    });
    document.getElementById('Titulo').innerHTML=genero
  }
  ).catch((error)=>{
    console.log(error)
  })
}

$(document).ready(function() {
  cerrar()
});

function cerrar() {
  document.getElementById('tablaLibros').getElementsByTagName('tbody')[0].innerHTML=""
  document.getElementById('Titulo').innerHTML=''
}

