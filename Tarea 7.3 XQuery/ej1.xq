(:
Pongo <artista> para que aparezca en el resultado y lo filtro para que imprima solo la variable nombreCompleto y pais
:)
for $x in doc("artistas.xml")//artista
return
<artista>{$x/nombreCompleto}{$x/pais}</artista> 
