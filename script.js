let btn = document.getElementById('time')

function calcul(){
	var today = new Date();
	var date = 'Nous sommes le: '+today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
	alert(date);
}

let calcule = document.getElementById("calcul");


function calcul() {
	let formulaire = document.getElementById('notes');
	let elmts = formulaire.elements;

	let valeurHG = (parseFloat(elmts[0].value) + parseFloat(elmts[1].value) + parseFloat(elmts[2].value))/3;
	let HG1 = document.getElementById('moy_bull_HG_1');
	let moyenneHG = valeurHG.toFixed(2);
	HG1.innerHTML = moyenneHG;

	let valeurLVA = (parseFloat(elmts[3].value) + parseFloat(elmts[4].value) + parseFloat(elmts[5].value))/3;
	let LVA1 = document.getElementById('moy_bull_LVA_1');
	LVA1.innerHTML = valeurLVA;
	
	let valeurLVB = (parseFloat(elmts[6].value) + parseFloat(elmts[7].value) + parseFloat(elmts[8].value))/3;
	let LVB1 = document.getElementById('moy_bull_LVB_1');
	LVB1.innerHTML = valeurLVB;
	
	let valeurES = (parseFloat(elmts[9].value) + parseFloat(elmts[10].value) + parseFloat(elmts[11].value))/3;
	let ES1 = document.getElementById('moy_bull_ENS_1');
	ES1.innerHTML = valeurES;
	
	let valeurSPEP = (parseFloat(elmts[12].value) + parseFloat(elmts[13].value) + parseFloat(elmts[14].value))/3;
	let SPEP1 = document.getElementById('moy_bull_SPE_1');
	SPEP1.innerHTML = valeurSPEP;
	
	let valeurEMC = (parseFloat(elmts[15].value) + parseFloat(elmts[16].value) + parseFloat(elmts[17].value))/3;
	let EMC1 = document.getElementById('moy_bull_EMC_1');
	EMC1.innerHTML = valeurEMC;

	

}



calcule.addEventListener('click', calcul);



btn.addEventListener('click', calcul);