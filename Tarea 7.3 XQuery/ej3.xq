(:
Aqui le pongo que el que no tenga la variable fallecimiento lo imprima
:)
for $x in doc("artistas.xml")//artista
where not($x/fallecimiento)
return $x/nombreCompleto
