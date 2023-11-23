formulario.addEventListener('submit',function(event){
const user=document.getElementById('user').value;
const password1=document.getElementById('password1').value;
const password2=document.getElementById('password2').value;
const correo=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(user.trim() === ''||password1.trim() === ''||password2.trim() === '')
{
    alert("Rellene todos los campos");
}else if(password1!=password2){
    alert("Las contraseñas no coinciden");
}else if(!correo.test(user)){
    alert("Correo incorrecto");
}else{
    alert("Datos ingresados correctamente");
   }
});
