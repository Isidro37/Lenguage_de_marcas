(:
le pongo que el tipo sea igual a láser e imprimo el modelo
:)
for $x in doc("impresoras.xml")
return $x/impresoras/impresora[@tipo='láser']/modelo
