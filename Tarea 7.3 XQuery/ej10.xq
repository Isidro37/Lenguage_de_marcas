(:
imprimo el modelo de las impresoras que tengan enred
:)
for $impresora in doc("impresoras.xml")//impresora[enred]
return $impresora/modelo
