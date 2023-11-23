function dni(numeros, letra){
if(numeros<=9999999||numeros>100000000){
    alert("los numeros proporcionados no son validos");
}else{
const numero=(numeros%23);
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
'X', 'B',
 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',
'T'];
letraobtenida=letras[numero];
if(letraobtenida!=letra){
    alert("La letra introducida no es correcta");
}else     alert("Su dni es correcto");


}
}
const boton=document.getElementById('boton');
boton.addEventListener('click', function(){
const num=document.getElementById('Numeros').value;
const letra=document.getElementById('Letra').value;
dni(num,letra);
});