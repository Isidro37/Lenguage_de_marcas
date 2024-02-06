(:
aqui le pongo que imprima solo los que la variable nacimiento es mayor que 1500 e imprimo la variable nombreCompleto pero solo el string
:)
for $x in doc("artistas.xml")//artista
where $x/nacimiento<1500
return $x/nombreCompleto/string()
