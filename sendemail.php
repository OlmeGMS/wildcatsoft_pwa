<?php
$destino ="olme_gms@hotmail.com";
$nombre = $_POST['name'];
$correo = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['message'];

$contenido = "Nombre: ". $nombre . "\nCorreo: ". $correo . "\nAsunto: ". $asunto . "\nMensaje: ". $mensaje;
mail($destino,"Contacto", $contenido);
// header("Location:gracias.html"); esta linea es para mostrar una pagina de confirmacionx




?>
