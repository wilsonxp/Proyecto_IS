function valida()
{
	/*
	//Validar Fechas
	if(document.Rvalida.from.value.length==0)
	{
		alert("El inicio de perido es un campo obligatorio")
		document.Rvalida.from.focus()
		return 0;
	}
	if(document.Rvalida.to.value.length==0)
	{
		alert("El fin de periodo es un campo obligatorio")
		document.Rvalida.to.focus()
		return 0;
	}
	 
	
	//Validar Cliente
	if(document.Rvalida.cliente.selectedIndex==0)
	{
		alert("El cliente es un campo obligatorio")
		document.Rvalida.cliente.focus()
		return 0;
	}
	//Validar Prodcuto
	if(document.Rvalida.producto.selectedIndex==0)
	{
		alert("El producto es un campo obligatorio")
		document.Rvalida.producto.focus()
		return 0;
	}
	
	
	
	//Validar radio botones
	if (document.Rvalida.filtro[0].checked){ 
	    
	}
	else{
	if(document.Rvalida.filtro[1].checked ){
       
		 }
	else{
	  alert("El criterio de busqueda es un campo obligatorio")
	  return 0 ;
	  }	 
	} 
	
	//Validar pedidos y ventas
	
	if(document.Rvalida.pedidos.selectedIndex==0){
			alert("El estado es un campo obligatorio")
			document.Rvalida.pedidos.focus()
			return 0;}
	
	if(document.Rvalida.ventas.selectedIndex==0)
	{
		alert("El estado es un campo obligatorio")
		document.Rvalida.ventas.focus()
		return 0;
	}
	*/
	alert("La operacion ha sido ejecutada exitosamente")
	document.Rvalida.submit()
	
}
function cancelar(){
	
	window.location='bienvenido.html'
}

function aparece(){
	if (document.Rvalida.filtro[0].checked){ 
	  document.Rvalida.pedidos.disabled=false;
	  document.Rvalida.ventas.disabled=true;
	  document.Rvalida.ventas.value=0
	  document.Rvalida.pedidos.selectedIndex=0
	  	 
	}
	else{
	if(document.Rvalida.filtro[1].checked ){
	document.Rvalida.ventas.disabled=false;
	document.Rvalida.pedidos.disabled=true;
	document.Rvalida.pedidos.value=0
	document.Rvalida.ventas.selectedIndex=0
	
	
		 }
	}
	
	
	
}



