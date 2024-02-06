(:
cojo solo las que tienen el tamaño A3 y el count de todos los tamaños es 1 y luego imprimo la marca y el modelo con la decoración <impresora>
:)
for $impresora in doc("impresoras.xml")//impresora[tamaño='A3' and count(tamaño) = 1]
return
<impresora>{$impresora/marca}{$impresora/modelo}</impresora>
