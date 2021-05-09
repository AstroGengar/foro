$(document).ready(function() {
    $("#contact-form").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            contrasena: {
                required: true,
                minlength: 5
            }
        }
    });
});


const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado")
})