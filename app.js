//secciones
const home = document.getElementById("sectionHome");
const categorias = document.getElementById("sectionCategory");
const preguntas = document.getElementById("preguntas");
const resultados = document.getElementById("resultados");
categorias.style.display = 'none';
preguntas.style.display = 'none';
resultados.style.display = 'none';

function validarNombre(){
  const nombre = document.getElementById("txt").value;

  if (nombre == ""){
    alert("Olvidaste ingresar tu nombre");
  } else {
    home.style.display = "none";
    categorias.style.display = "block";
    document.getElementById("nombreUsuario").innerHTML = nombre;
  }
}

let respuestaCorrecta = 0;

function visualizaCategoria(categoria){
  respuestaCorrecta = 0; // lo vuelve a 0 para iniciar nuevamente el juego
  preguntas.style.display = "block";
  categorias.style.display = "none";
  const cuadroAnimals = document.getElementById("preguntaAnimals");
  const cuadroFamily = document.getElementById("preguntaFamily");

  if (categoria == 'animals') {
    cuadroAnimals.style.display = "block";
    cuadroFamily.style.display = "none";
  } else {
    cuadroAnimals.style.display = "none";
    cuadroFamily.style.display = "block";
  }
}

function finalResults(categoria){

  // animals
  if (categoria == 'animals'){
    if (document.getElementById('respuestaCorrecta1').checked == true){
      respuestaCorrecta = respuestaCorrecta + 1
    }

    if (document.getElementById('respuestaCorrecta2').checked == true){
      respuestaCorrecta = respuestaCorrecta + 1
    }
  }


  if (categoria == 'family'){
    if (document.getElementById('respuestaCorrecta3').checked == true){
      respuestaCorrecta = respuestaCorrecta + 1
    }

    if (document.getElementById('respuestaCorrecta4').checked == true){
      respuestaCorrecta = respuestaCorrecta + 1
    }
  }


  preguntas.style.display = "none";
  resultados.style.display = "block";
  document.getElementById('respuestaCorrecta').innerHTML = respuestaCorrecta;
  document.getElementById('respuestaIncorrecta').innerHTML = 2 - respuestaCorrecta;

}


function jugarOtraVez(){
 categorias.style.display= "block";
 resultados.style.display= "none";
}
