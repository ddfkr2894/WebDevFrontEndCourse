// Debido a que a este archivo está en la misma carpeta de 'js' no necesita escribirse algun tipo de referencia
// su conexión ya se está llevando a cabo dentro del archivo 'index.html' en las líneas;
//      <script src="js/app.js"></script>
//      <script src="js/persona.js"></script>

console.log("Aquí probando 123");

// Creamos un arreglo con objetos de tipo Persona
const personas = [
    new Persona('Carlos', 'Cruz'), 
    new Persona('Abraham', 'Mancilla')
];

function mostrarPersonas(){
    console.log('Que hubolas mi prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrote')
    console.log("Ejecutando 'Mostrar Personas'...");
    let texto = '';
    for (let persona of personas){
        console.log(persona);
        texto += `<li>${persona.Nombre} ${persona.Apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersonas(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay información que agregar');
    }
}