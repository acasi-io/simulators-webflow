const resultText = document.getElementById('simulator-result-explanation-container');
const resultStorage = localStorage.getItem('result');  
const nextBtn = document.getElementById('next-button');
const previousBtn = document.getElementById('previous-button'); 
const resultWrapper = document.getElementById('simulator-result-wrapper');
const answers = document.getElementById('simulator-two-answers'); 
const resultHeading = document.getElementById('simulator-big-result'); 
const resultTitle = document.getElementById('simulator-result-title'); 
const rendezvousLink = document.getElementById('simulator-rendezvous-link'); 
const resultContainer = document.getElementById('simulator-result-container'); 


function addHiddenClass(elementProperty) {
	elementProperty.classList.add('simulator-hidden'); 
}

function removeHiddenClass(elementProperty) {
	elementProperty.classList.remove('simulator-hidden'); 
}


function fillAnswer(number) {
	const explanation = document.getElementById(`simulator-${number}-explanation`); 
  	explanation.classList.remove('simulator-hidden'); 
	resultText.append(explanation);
}


if (resultStorage === "Plus de 91 900€" || resultStorage === "Plus de 36 800€" || resultStorage === "Particuliers") {
	resultHeading.innerHTML = '👉 Vous allez dépasser le seuil de la franchise de TVA cette année.';
  	fillAnswer('first');
} else if (resultStorage === "Plus de 34% de votre CA") { 
	resultHeading.innerHTML = '👉 Vos charges sont supérieures à 34%. La micro-entreprise n’est pas adaptée pour vous';
  	fillAnswer('two');
} else if (resultStorage === "Moins de 34% de votre CA") {
	resultTitle.innerHTML = 'La micro-entreprise est adaptée à votre situation pour le moment';
  	resultHeading.innerHTML = '👉 Vos charges représentent moins de 34% de votre CA.'; 
  	fillAnswer('three'); 
} else if (resultStorage === "Professionnels") {
	resultHeading.innerHTML = '👉 Vous allez dépasser le seuil de la franchise de TVA cette année.'; 
  	fillAnswer('four');
} else if (resultStorage === "Plus de 50% de votre CA") {
	resultHeading.innerHTML = '👉 Vos charges sont supérieures à 50%. La micro-entreprise n’est pas adaptée pour vous';
    fillAnswer('six');
} else if (resultStorage === "Moins de 50% de votre CA") {
	resultTitle.innerHTML = 'La micro-entreprise est adaptée à votre situation pour le moment';
  	resultHeading.innerHTML = '👉 Vos charges représentent moins de 50% de votre CA.';
  	fillAnswer('seven');
} else {
	resultHeading.innerHTML = '👉 Attention ! Vous êtes sur le point de dépasser les seuils de CA durant deux années consécutives';
  	fillAnswer('five'); 
}


function showAnswers() {
	addHiddenClass(resultWrapper); 
  	removeHiddenClass(answers);
  	addHiddenClass(nextBtn); 
  	removeHiddenClass(rendezvousLink);
}


nextBtn.addEventListener('click', () => {  
	if (resultStorage === "Moins de 34% de votre CA" || resultStorage === "Moins de 50% de votre CA") {
  	    rendezvous(); 
    } else if (resultStorage === "Professionnels") {
  	    showAnswers(); 
  	    resultTitle.textContent = "Vous souhaitez qu'Acasi vous aide à préparer votre transition vers la TVA ?";
	} else if (resultStorage === "Plus de 188 700€" || resultStorage === "Plus de 77 700€") {
  	    showAnswers(); 
        resultTitle.textContent = "Vous souhaitez avoir de l'aide pour la transition vers un autre statut juridique ?";
    } else {
  	    showAnswers(); 
        resultTitle.textContent = "Vous souhaitez qu'Acasi vous aide à choisir votre nouveau statut ?";
    } 
});


previousBtn.addEventListener('click', () => { 
    removeHiddenClass(nextBtn); 
 	removeHiddenClass(resultContainer); 
    removeHiddenClass(resultWrapper); 
 	addHiddenClass(answers);
    addHiddenClass(rendezvousLink);
});


const yesToHelp = document.getElementById('yes-to-help'); 
const noToHelp = document.getElementById('no-to-help');


yesToHelp.addEventListener('click', () => {
	showCalendly();
});


noToHelp.addEventListener('click', () => { 
	addHiddenClass(answers);
	rendezvous(); 
});


function rendezvous() {
	removeHiddenClass(resultWrapper);
	addHiddenClass(resultContainer);
	removeHiddenClass(document.getElementById('simulator-non-answer-final'));  
	addHiddenClass(resultTitle);
    addHiddenClass(rendezvousLink);
}


function showCalendly() {
	addHiddenClass(resultWrapper); 
 	addHiddenClass(answers);
    addHiddenClass(rendezvousLink); 
 	addHiddenClass(document.getElementById('rocket-img')); 
    removeHiddenClass(document.getElementById('coach-calendly-img')); 
	removeHiddenClass(document.getElementById('title-calendly')); 
    addHiddenClass(document.getElementById('result-title')); 
	removeHiddenClass(document.getElementById('simulator-calendly')); 
}
