function valida()
{/*
	var letras="abcdefghyjklmnñopqrstuvwxyz";
	var numeros="0123456789";
	var email="@."
	var num=0;
	if(document.Rvalida.RFC.value==="Codigo RFC del Cliente")
	{
		alert("RFC es un campo obligatorio")
		document.Rvalida.RFC.focus()
		return 0;
	}
	if(document.Rvalida.RFC.value.length<12)
	{
		alert("El RFC es de 12 o 13 caracteres")
		document.Rvalida.RFC.focus()
		return 0;
			
	}
	var cadena= document.Rvalida.RFC.value;
	cadena = cadena.toLowerCase();
    for(i=0; i<3; i++){
		 if (letras.indexOf(cadena.charAt(i),0)!=-1){}
		 else{
		      	alert("El  RFC debe comenzar con 3 o 4 letras")
		   		document.Rvalida.RFC.focus()
				return 0;		      
		      }
    }
	if(letras.indexOf(cadena.charAt(4),0)!=-1)
		      {
		      	num=5;
		      }
		      else
		      {
		      	num=4;
		      }
    for(i=num; i<num+5; i++){
		  if (numeros.indexOf(cadena.charAt(i),0)!=-1){}
		  else{
			     alert("Debe contener 6 numeros")
			   	 document.Rvalida.RFC.focus()
				return 0;}
				}
	if(document.Rvalida.nom.value==="Nombre del Cliente")
	{
		alert("Debe registrar el nombre del cliente")
		document.Rvalida.nom.focus()
		return 0;
	}//telefono
	if(document.Rvalida.tel.value==="Teléfono del Cliente")
	{
		alert("Teléfono es un campo obligatorio")
		document.Rvalida.tel.focus()
		return 0;
	}
	if(document.Rvalida.tel.value.length<10)
	{
		alert("Ingrese un telefono Valido")
		document.Rvalida.tel.focus()
		return 0;
	}
	cadena= document.Rvalida.tel.value;
    for(i=0; i<cadena.length; i++)
    {
		 if (letras.indexOf(cadena.charAt(i),0)!=-1){
		 	alert("El  teléfono solo debe contener numeros y guión")
		   		document.Rvalida.tel.focus()
				return 0;
		 }
    }
	//email
	if(document.Rvalida.ema.value==="E-mail del Cliente")
	{
		alert("E-mail es un campo obligatorio")
		document.Rvalida.ema.focus()
		return 0;
	}
	if(document.Rvalida.ema.value.length<10)
	{
		alert("Ingrese un E-mail valido")
		document.Rvalida.ema.focus()
		return 0;
	}
	cadena= document.Rvalida.ema.value;
	var c=0;
    for(i=0; i<cadena.length; i++)
    {
		 if (email.indexOf(cadena.charAt(i),0)!=-1){c++;}		 
    }
    if(c<2)
    {alert("El email debe contener una direccion valida ejemplo '@hotmail.com'")
		   		document.Rvalida.ema.focus()
				return 0;
    }
	if(document.Rvalida.dir.value=="Dirección del Cliente")
	{
		alert("Dirección es un campo obligatorio")
		   		document.Rvalida.dir.focus()
				return 0;
	}
	if(document.Rvalida.dir.value.length<10)
	{
		alert("Ingrese una dirección valida")
		   		document.Rvalida.dir.focus()
				return 0;
	}
	*/
	var aqui=location.pathname.match(/[^\/]+$/);
	if(aqui=="MC.html")
	{alert("El cliente ha sido registrado exitosamente")}
	if(aqui=="RC.html"){alert("El cliente ha sido registrado exitosamente")}
	window.location='GestiónC.html'
	return 0;
	
}
function cancelar(){
	
	window.location='RC.html'
}
function cancelarmv(){
	
	window.location='GestiónC.html'
}
function cancelarvt(){
	
	var answer = confirm("¿Desea Cancelar la Venta?")
	if (answer){
		alert("La venta ha sido cancelada exitosamente")
	
	}

}
function cancelarcl(){
	
	var answer = confirm("¿Desea eliminar al cliente?")
	if (answer){
		alert("El cliente ha sido eliminado exitosamente")
	
	}

}

