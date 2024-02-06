(:
Calculo que haya mas de un tamaño calculando si tamaño es mayor que uno con un count y luego devuelvo la marca y el modelo con el adorno <impresora>
:)
for $impresora in doc("impresoras.xml")//impresora[count(tamaño) > 1]
return <impresora>{$impresora/marca}{$impresora/modelo}</impresora>
