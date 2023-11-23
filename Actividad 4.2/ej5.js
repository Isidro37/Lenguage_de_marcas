boton.addEventListener('click', function(){
    const num1 = parseInt(document.getElementById('Numero1').value, 10);
    const num2 = parseInt(document.getElementById('Numero2').value, 10);
    const num3 = parseInt(document.getElementById('Numero3').value, 10);
    const num4 = parseInt(document.getElementById('Numero4').value, 10);
    const num5 = parseInt(document.getElementById('Numero5').value, 10);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert("Ingresa números válidos en todos los campos");
    } else {
        const numerosfinal = (num1 + num2 + num3 + num4 + num5) / 5;
        alert("Numeros:\n | "+num1+" | "+num2+" | "+num3+" | "+num4+" | "+num5+" |\n La media es: \n"+numerosfinal);
    }
});
