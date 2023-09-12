function verificar(){
	  var n1 = document.getElementById("txtPratPrin").value;
	  if(n1==""){
	     window.alert("digite o número de pessoas para a reserva");
		 document.getElementById("txtPratPrin").focus();
		 document.getElementById("txtPratPrin").style.backgroundColor="#FF0000";
		 return false;
	}
	else if(isNaN(n1)){
	     window.alert("digite APENAS números para a reserva");
		 document.getElementById("txtPratPrin").value="";
		 document.getElementById("txtPratPrin").focus();
		 document.getElementById("txtPratPrin").style.backgroundColor="#FF0000";
		 return false;
	}
	else{
	     window.alert("preenchimento OK");
		 document.getElementById("txtPratPrin").style.backgroundColor="#0000FF";
		 }
		 
	var n2 = document.getElementById("txtResp").value;
	if(n2==""){
	    window.alert("digite o nome do responsável pela reserva");
		document.getElementById("txtResp").focus();
		document.getElementById("txtResp").style.backgroundColor="#ff0000";
		return false;
		}
		else{
		   window.alert("responsável OK");
		   document.getElementById("txtResp").style.backgroundColor="#0000ff";
		   }
		   return true;
		   }