(:
le pongo que la variable pais sea igual a España y le pongo <ul> al principio para que solo aparezca una vez y <li> en el return para que lo muestre por cada resultado 
:)
<ul>
{
for $x in doc("artistas.xml")//artista
where $x/pais='España'
return <li>{$x/nombreCompleto/text()}</li>
}
</ul>
