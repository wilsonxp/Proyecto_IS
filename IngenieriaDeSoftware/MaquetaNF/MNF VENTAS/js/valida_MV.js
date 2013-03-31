function cancelar(){
	
	window.location='Gestión.html'
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
	}*/
	
	alert("La venta ha sido modificada exitosamente")
	document.Rvalida.submit()
	
}
function valida_articulo()
{
	/*
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
	if(document.Rvalida.estados.selectedIndex==0)
		{
			alert("El estado es un campo obligatorio")
			document.Rvalida.estados.focus()
			return 0;
		}
	*/
	alert("El articulo ha sido agregado exitosamente")
	document.Rvalida.submit()
		
		
}
  	 

