function valida()
{
	/*
	//Validar Folio
	if(document.Rvalida.folio.value.length==0)
	{
		alert("El folio es un campo obligatorio")
		document.Rvalida.folio.focus()
		document.Rvalida.folio.value="";
		return 0;
	}
	if(document.Rvalida.folio.value.length!=7)
	{
		alert("La longitud del folio debe ser de 7 digitos")
		document.Rvalida.folio.focus()
		document.Rvalida.folio.value="";
		return 0;
	}
	if(document.Rvalida.folio.value.length==7){}
		var cadena= document.Rvalida.folio.value;
		for(i=0; i<cadena.length;i++)
				{
				if( cadena.charAt(i)>="0"&& cadena.charAt(i)<="9")
				{	
				}
				else{
				alert("El folio solo acepta numeros");
				document.Rvalida.folio.focus()
				document.Rvalida.folio.value="";
				return 0;
				}
	}
    
	//Validar Cliente
	if(document.Rvalida.cliente.selectedIndex==0)
	{
		alert("El cliente es un campo obligatorio")
		document.Rvalida.cliente.focus()
		return 0;
	}
	*/
	//habilitar botones
	if(document.Rvalida.folio.value.length==7 && document.Rvalida.cliente.selectedIndex!=0)
	{
		document.Rvalida.producto.disabled=false;
	    document.Rvalida.cantidad.disabled=false;
	    document.Rvalida.to.disabled=false;
	    document.Rvalida.agregar.disabled=false;
	    document.Rvalida.cerrar.disabled=false;
	  }	
	
}
function valida_venta()
{
	/*
	//Validar Fecha de entrega
	if(document.Rvalida.to.value.length==0)
	{
		alert("La fecha de entrega es un campo obligatorio")
		document.Rvalida.to.focus()
		return 0;
	}
	*/
	alert("La venta ha sido registrada exitosamente")
	document.Rvalida.submit()	
	
}
/*
function valida_articulo()
{
	
	//Validar Prodcuto	
	if(document.Rvalida.producto.selectedIndex==0)
		{
			alert("El producto es un campo obligatorio")
			document.Rvalida.producto.focus()
			return 0;
		}
	//Validar Cantidad
	if(document.Rvalida.cantidad.value.length==0)
	{
		alert("La cantidad es un campo obligatorio")
		document.Rvalida.cantidad.focus()
		return 0;
	}
	else{
		var cadena1= document.Rvalida.cantidad.value;
		for(j=0; j<cadena1.length;j++)
				{
				if( cadena1.charAt(j)>="0"&& cadena1.charAt(j)<="9")
				{	
				}
				else{
				alert("La cantidad solo acepta numeros");
				document.Rvalida.cantidad.focus()
				document.Rvalida.cantidad.value="";
				return 0;
				}
				}
	}
	
	
}*/
  	 
function cancelar(){
	
	window.location='Gestión.html'
}
