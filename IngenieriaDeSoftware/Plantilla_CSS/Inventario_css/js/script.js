window.onload = resizeWindow;
window.onresize = resizeWindow;
<!-- Funcion para redimensionar la ventana-->
function resizeWindow() {
    var w=window.innerWidth;
    if (w < 1060) {
        var newSize = w - 260;
        var windowSize = w - 60;
        document.getElementById("all-content").style.width = new String(newSize) + "px";
        document.getElementById("mainDiv").style.width = new String(windowSize) + "px";
        console.log(newSize);
        console.log(document.getElementById("all-content").style.width);
    } else {
        document.getElementById("all-content").style.width = "800px";
        document.getElementById("mainDiv").style.width = "1050px";
    }
}
<!-- Función que muestra el date picker de dos rangos necesita los id from y to-->
$(function () {
    var dates = $("#from, #to").datepicker
	(
		{
		    defaultDate: "+1w",
		    changeMonth: true,
		    changeYear: true,
		    numberOfMonths: 1,

		    onSelect: function (selectedDate) {
		        var option = this.id == "from" ? "minDate" : "maxDate",
					instance = $(this).data("datepicker"),
					date = $.datepicker.parseDate(
						instance.settings.dateFormat ||
						$.datepicker._defaults.dateFormat,
						selectedDate, instance.settings);
		        dates.not(this).datepicker("option", option, date);
		    }
		}
	);
});
