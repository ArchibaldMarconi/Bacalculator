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
	let moyenneLVA = valeurLVA.toFixed(2);
	LVA1.innerHTML = moyenneLVA;
	
	let valeurLVB = (parseFloat(elmts[6].value) + parseFloat(elmts[7].value) + parseFloat(elmts[8].value))/3;
	let LVB1 = document.getElementById('moy_bull_LVB_1');
	let moyenneLVB = valeurLVB.toFixed(2);
	LVB1.innerHTML = moyenneLVB;
	
	let valeurES = (parseFloat(elmts[9].value) + parseFloat(elmts[10].value) + parseFloat(elmts[11].value))/3;
	let ES1 = document.getElementById('moy_bull_ENS_1');
	let moyenneES = valeurES.toFixed(2);
	ES1.innerHTML = moyenneES;
	
	let valeurSPEP = (parseFloat(elmts[12].value) + parseFloat(elmts[13].value) + parseFloat(elmts[14].value))/3;
	let SPEP1 = document.getElementById('moy_bull_SPE_1');
	let moyenneSPEP = valeurSPEP.toFixed(2);
	SPEP1.innerHTML = moyenneSPEP;
	
	let valeurEMC = (parseFloat(elmts[15].value) + parseFloat(elmts[16].value) + parseFloat(elmts[17].value))/3;
	let EMC1 = document.getElementById('moy_bull_EMC_1');
	let moyenneEMC = valeurEMC.toFixed(2);
	EMC1.innerHTML = moyenneEMC;

	let controleCCP = (moyenneHG*6+moyenneES*6+moyenneEMC*6+moyenneLVA*6+moyenneLVB*6+moyenneSPEP*8)/38
	let controleCCP1 = document.getElementById("total_controle_continu_premiere")
	let moyenneCC = controleCCP.toFixed(2)
	controleCCP1.innerHTML = moyenneCC

	
}



calcule.addEventListener('click', calcul);



btn.addEventListener('click', calcul);