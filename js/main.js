let nombreUsuario = prompt("Ingresa tu nombre de usuario para jugar");
console.log("Usuario " + nombreUsuario + " Registrado con éxito!");

alert("Hola " + nombreUsuario + " Bievenido.")

function jugar() {  
    const anoDeNacimiento = 2003;  
    let intentos = 0;
    let adivinado = false;  

    while (adivinado === false) {  
        const intento = parseInt(prompt("¿En que año crees que nací?"));  
        if (isNaN(intento)) {  
            alert("Por favor, ingresa un número válido.");  
            continue;  
        }  
        intentos++;  

        if (intento === anoDeNacimiento) {  
            alert("Felicidades! Lo adivinaste en " + intentos + " intentos.");  
            adivinado = true;  
        } else if (intento < anoDeNacimiento) {  
            alert("Un año más");  
        } else {  
            alert("Un año menos");  
        }
        console.log("Intentos " + intentos);  
    }  
}  



 