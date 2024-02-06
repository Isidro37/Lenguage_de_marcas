(:
cojo solo las impresoras cuyo tamaño sea igual a A3 y devuelvo la marca y el modelo con el adorno <impresora>
:)
for $impresora in doc("impresoras.xml")//impresora[tamaño='A3']
return
<impresora>{$impresora/marca}{$impresora/modelo}</impresora>
