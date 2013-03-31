var CampoAutoexplicativo = new Class({
	//implemento options para utilizar la clase Options que permite...
	//parametrizar las clases con valores opcionales  
	Implements: Options,
	
	//objeto con los valores por defecto que tomar�n los options
	options: {
		texto: 'Buscar',
		colorExplicacion: '#99f',
		colorNormal: '#000'
	},
	
	//constructor, que recibe el id de un campo y un objeto con los valores opcionales
	initialize: function(campo, opciones){
		//cargo el elemento en la propiedad campo
		this.campo = $(campo);
		//doy de alta las opciones y las junto con los valores por defecto cuando no se indicaron
		this.setOptions(opciones);
		//llamo a un m�todo para mostrar la explicacion
		this.explicate();
		
		//creo un evento cuando se quita el foco de la aplicaci�n de este campo
		this.campo.addEvent("blur", function(){
			this.explicate();
		}.bind(this));
		
		//creo un eventoi sobre el campo para cuando el usuario se situa en �l
		this.campo.addEvent("focus", function(){
			//compruebo si en el campo hab�a escrito la explicaci�n
			if (this.campo.value==this.options.texto){
				//borro la explicaci�n
				this.campo.value="";
				//coloco el color del texto para cuando no est� la explicacion
				this.campo.setStyle("color", this.options.colorNormal);
			}
		}.bind(this));
		
	},
	
	//m�todo para mostrar la explicaci�n
	explicate: function(){
		//compruebo si en el campo no hay escrito nada, para no borrar el dato que pueda haber
		if (this.campo.value==""){
			//cargo la explicaci�n en el value del campo
			this.campo.value = this.options.texto;
			//coloco el color del texto para la explicacion
			this.campo.setStyle("color", this.options.colorExplicacion);
		}
	}
});

window.addEvent("domready", function(){
	var campoExp1 = new CampoAutoexplicativo("buscar");
	var campoExp2 = new CampoAutoexplicativo("RFC");
});