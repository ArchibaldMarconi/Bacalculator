let btn = document.getElementById('time')

function calcul(){
	var today = new Date();
	var date = 'Nous sommes le: '+today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
	alert(date);
}

btn.addEventListener('click', calcul);