// Version clasica DOM

// document.addEventListener("DOMContentLoaded",function(){
//     document.getElementById("formulario").addEventListener("submit", validarDatos);
// });

// function validarDatos(e){
//     e.preventDefault();

//     let nombre = document.getElementById("nombre").value;
//     let email = document.getElementById('email').value;
//     let mensaje = document.getElementById('mensaje').value; 
    
//     if(nombre.length == 0){
//         alert("ERROR, NOMBRE SIN INFORMACION");
//         return;
//     }else if( email.length == 0){
//         alert("ERROR, EMAIL SIN INFORMACION");
//         return;
//     }else if( mensaje.length == 0){
//         alert("ERROR, MENSAJE VACIO")
//         return;
//     }else{
//         alert("DATOS VALIDADOS CORRECTAMENTE")
//     }

// }

// jQuery

$(document).ready(function() {
    $('#tablaDatatable').DataTable({
        responsive: true
    });
});

// VERSION jQuery 

$(document).ready(function(){
    $("#formulario").submit(function(e){
        e.preventDefault();

        let nombre = $("#nombre").val();
        let email = $("#email").val();
        let mensaje = $("#mensaje").val();

        if(nombre.length === 0){
            alert("ERROR, NOMBRE SIN INFORMACION");
            return;
        } else if(email.length === 0){
            alert("ERROR, EMAIL SIN INFORMACION");
            return;
        } else if(mensaje.length === 0){
            alert("ERROR, MENSAJE VACIO");
            return;
        } else {
            alert("DATOS VALIDADOS CORRECTAMENTE");
        }
    });
});

