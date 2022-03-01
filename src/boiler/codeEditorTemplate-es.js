function avisoInteligente(pregunta) {
    var output = null
    while(output === null || output.trim().length < 1) {
        output = prompt(pregunta)
    }
    return output.trim()
}

function obtenerAccion(pregunta, listaDeAccion) { 
    // Aquí damos una lista de posibles acciones y reintentamos hasta que el usuario proporcione una respuesta válida
    let respuesta = null
    while (!listaDeAccion.includes(answer)) {
        respuesta = avisoInteligente(pregunta + "\n\nPosibles Acciones: " + listaDeAccion.join(", ")) // Here we convert the list to a string by joining all of its contents with a comma and a space
    }
    return respuesta
}

//////////
// INFO //
//////////
// Si te quedas atascado o quieres aprender a hacer más cosas, considera consultar la sección de recursos https://yourfirstrpg.com/es/resources/
// ¡Además, no tengas miedo de googlearlo!
///////////

var nombre = avisoInteligente("¿Cuál es su nombre?")

alert("Te despiertas en una playa extraña. '" + nombre + " está escrito en el interior de tu camisa.")

while (true) { // Atrapamos al usuario en este bucle hasta que sale de la playa
    const proximaAccion = obtenerAccion("Que te gustaría hacer?", ["espere", "explorar la playa", "salir de la playa"]) // Lists are surrounded by square brackets and separated by commas

    if (proximaAccion === "espere") {
        alert("Espera alrededor. El ladrido de las gaviotas y el chapoteo del océano te arrullan en un sueño profundo.  ")
    } else if (proximaAccion === "explorar la playa") {
        alert("Encuentras una gran concha de ostra. Años de bombardeo por las olas lo han dejado quebradizo y astillado, pero sus curvas siguen siendo hermosas y perladas.")
    } else if (proximaAccion === "salir de la playa") {
        break // La palabra clave break nos saca del bucle actual
    }
}


const direccion = obtenerAccion("Al salir de la playa, llega al borde de una división entre un bosque oscuro y una cueva gigante en la ladera de la montaña. ¿En qué dirección te gustaría ir?", ["entrar en el bosque", "entrar en la cueva", "volver a la playa"])

// QUE HACER: Continuar la aventura :)