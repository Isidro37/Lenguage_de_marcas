(:
le pongo que la fecha de nacimiento sea menos que 1600 y lo hago como let para guardar la variable y luego imprimirla
:)
let $artistas := count(doc("artistas.xml")//artista[nacimiento < 1600])
return $artistas
