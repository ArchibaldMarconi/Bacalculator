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

	let controleCCP = (moyenneHG*3+moyenneES*3+moyenneEMC*3+moyenneLVA*3+moyenneLVB*3+moyenneSPEP*8)/23
	let controleCCP1 = document.getElementById("total_controle_continu_premiere")
	let moyenneCC = controleCCP.toFixed(2)
	controleCCP1.innerHTML = moyenneCC

	




	let valeurHGT = (parseFloat(elmts[20].value) + parseFloat(elmts[21].value) + parseFloat(elmts[22].value))/3;
	let HG1T = document.getElementById('moy_bull_HG_2');
	let moyenneHGT = valeurHGT.toFixed(2);
	HG1T.innerHTML = moyenneHGT;

	let valeurLVAT = (parseFloat(elmts[23].value) + parseFloat(elmts[24].value) + parseFloat(elmts[25].value))/3;
	let LVA1T = document.getElementById('moy_bull_LVA_2');
	let moyenneLVAT = valeurLVAT.toFixed(2);
	LVA1T.innerHTML = moyenneLVAT;
	
	let valeurLVBT = (parseFloat(elmts[26].value) + parseFloat(elmts[27].value) + parseFloat(elmts[28].value))/3;
	let LVB1T = document.getElementById('moy_bull_LVB_2');
	let moyenneLVBT = valeurLVBT.toFixed(2);
	LVB1T.innerHTML = moyenneLVBT;
	
	let valeurEST = (parseFloat(elmts[29].value) + parseFloat(elmts[30].value) + parseFloat(elmts[31].value))/3;
	let ES1T = document.getElementById('moy_bull_ENS_2');
	let moyenneEST = valeurEST.toFixed(2);
	ES1T.innerHTML = moyenneEST;
	
	let valeurEPST = (parseFloat(elmts[32].value) + parseFloat(elmts[33].value) + parseFloat(elmts[34].value))/3;
	let EPS1T = document.getElementById('moy_bull_EPS');
	let moyenneEPST = valeurEPST.toFixed(2);
	EPS1T.innerHTML = moyenneEPST;

	let valeurEMCT = (parseFloat(elmts[35].value) + parseFloat(elmts[36].value) + parseFloat(elmts[37].value))/3;
	let EMC1T = document.getElementById('moy_bull_EMC_2');
	let moyenneEMCT = valeurEMCT.toFixed(2);
	EMC1T.innerHTML = moyenneEMCT;

	let controleCCT = (moyenneHGT*3+moyenneEST*3+moyenneEMCT*3+moyenneLVAT*3+moyenneLVBT*3+moyenneEPST*3)/18;
	let controleCCT1 = document.getElementById("total_controle_continu_terminale");
	let moyenneCCT = controleCCT.toFixed(2);
	controleCCT1.innerHTML = moyenneCCT;

	let moyenneEMC1 = moyenneEMC*3;
	let moyenneEMCT1 = moyenneEMCT*3;
	let moyenneES1 = moyenneES*3;
	let moyenneEPST1 = moyenneEPST*3;
	let moyenneEST1 = moyenneEST*3;
	let moyenneHG1 = moyenneHG*3;
	let moyenneHGT1 = moyenneHGT*3;
	let moyenneLVA1 = moyenneLVA*3;
	let moyenneLVAT1 = moyenneLVAT*3;
	let moyenneLVB1 = moyenneLVB*3;
	let moyenneLVBT1 = moyenneLVBT*3;
	let moyenneSPEP1 = moyenneSPEP*8;
	let francaisEcrit = parseFloat(elmts[18].value)*5;
	let francaisOral = parseFloat(elmts[19].value)*5;
	let Philo = parseFloat(elmts[38].value)*8;
	let Spe1 = parseFloat(elmts[39].value)*16;
	let Spe2 = parseFloat(elmts[40].value)*16;
	let grandoral = parseFloat(elmts[41].value)*10;





	let noteBAC = (moyenneEMC1+moyenneEMCT1+moyenneEPST1+moyenneES1+moyenneEST1+moyenneHG1+moyenneHGT1+moyenneLVA1+moyenneLVAT1+moyenneLVB1+moyenneLVBT1+moyenneSPEP1+francaisEcrit+francaisOral+Philo+Spe1+Spe2+grandoral)/100;
	let notefinale = document.getElementById("note_finale");
	notefinale.innerHTML = noteBAC;

}



calcule.addEventListener('click', calcul);



btn.addEventListener('click', calcul);
