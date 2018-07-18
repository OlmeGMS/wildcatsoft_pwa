<?php
$destino = "olme.marin@wildcatsoft.com"
$nombre = $_POST["name"];
$correo = $_POST["email"];
$asunto = $_POST["subject"];
$mensaje = $_POST["message"];

$contenido = "Nombre: ".$nombre."\nCorreo: ".$email."\nAsunto: ".$asunto."\nMensaje: ".$mensaje;
mail($destino,"Contacto",$contenido);
header("Location:gracias.html");
die;

 ?>
