<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario procesado</title>
</head>
<body>
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $nombre = $_POST['Nombre'];
            $apellidos = $_POST['Apellidos'];
            $dni = $_POST['DNI'];
            $fechaNacimiento = $_POST['Fecha_de_Nacimiento'];
            $email = $_POST['Email'];
            $tipoDomicilio = $_POST['Tipo_de_domicilio'];
            $domicilio = $_POST['Domicilio'];
            $telefono = $_POST['telefono'];
            $estudiosPrevios = $_POST['Estudios_Previos'];
            $tipoDocumento = $_POST['Tipo_de_documento'];
            $grado1 = $_POST['grado_1'];
            $grado2 = $_POST['grado_2'];

            // Puedes realizar operaciones adicionales con estos datos, como guardarlos en una base de datos o procesarlos de alguna otra manera.
            // Aquí solo se muestran los datos enviados.
            echo "<h2>Datos recibidos:</h2>";
            echo "<p>Nombre: $nombre</p>";
            echo "<p>Apellidos: $apellidos</p>";
            echo "<p>DNI: $dni</p>";
            echo "<p>Fecha de Nacimiento: $fechaNacimiento</p>";
            echo "<p>Email: $email</p>";
            echo "<p>Tipo de domicilio: $tipoDomicilio</p>";
            echo "<p>Domicilio: $domicilio</p>";
            echo "<p>Teléfono: $telefono</p>";
            echo "<p>Estudios Previos: $estudiosPrevios</p>";
            echo "<p>Tipo de documento: $tipoDocumento</p>";
            echo "<p>Grado 1: $grado1</p>";
            echo "<p>Grado 2: $grado2</p>";
        }
    ?>
</body>
</html>
