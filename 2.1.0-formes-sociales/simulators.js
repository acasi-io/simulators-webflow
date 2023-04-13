const questionsData = [
    {   
        id: 0, 
        question: "Quel est votre statut actuel ?", 
        theme: "Votre statut",
        property: "status",
        nextQuestion: 1,
        choices: [
            {
                id: 1, 
                value: "Salarié",
                image: "💼", 
                highlight: true,
                hubspotValue: 'Salarié',
            }, 
            {
                id: 2, 
                value: "Bénéficiaire du chômage",
                image: "🌴", 
                highlight: true,
                hubspotValue: 'Chômage',
            }, 
            {
                id: 3, 
                value: "Micro-entrepreneur", 
                image: "🚗", 
                highlight: true,
                hubspotValue: 'Micro',
            }, 
            {
                id: 4, 
                value: "Entrepreneur (EI, SAS/SASU, SARL/EURL)", 
                image: "🚀", 
                highlight: true,
                hubspotValue: 'Entrepreneur',
            }
        ]
    }, 
    {
        id: 1,
        question: "Vous vous lancez seul ou à plusieurs ?", 
        theme: "Votre statut",
        property: "multiple_shareholders",
        nextQuestion: 2, 
        choices: [
            {
                id: 1, 
                value: "Je souhaite créer une société seul", 
                image: "👩",
                result: true, 
                resultValue: "société seul",
                hubspotValue: false,
            }, 
            {
                id: 2, 
                value: "Je souhaite créer une société à plusieurs", 
                image: "👱‍♀️👩👨",
                result: true, 
                resultValue: "société à plusieurs",
                hubspotValue: true,
            }
        ]
    },
    {
        id: 2,
        question: "Comptez-vous embaucher des salariés ?", 
        theme: "Votre projet",
        property: "with_employees",
        nextQuestion: 3,
        choices: [
            {
                id: 1, 
                value: "Oui", 
                image: "✅",
                hubspotValue: true,
            }, 
            {
                id: 2, 
                value: "Non", 
                image: "❌",
                hubspotValue: false,
            }
        ]
    },
    { 
        id: 3,
        question: "Quelle est la nature de votre projet ?", 
        theme: "Votre projet",
        property: "company_creation_activity",
        nextQuestion: 4,
        choices: [
            {
                id: 1, 
                value: "Profession réglementée (avocats, médecins...)", 
                image: "👩‍⚕️",
                hubspotValue: 'Profession réglementée',
            }, 
            {
                id: 2, 
                value: "Prestation de service / conseil", 
                image: "👩‍💻",
                hubspotValue: 'Services',
            },
            {
                id: 3, 
                value: "Vente de biens et de marchandises", 
                image: "🏠",
                hubspotValue: 'Achat/Vente',
            }, 
            {
                id: 4, 
                value: "Artisanat", 
                image: "🚕",
                hubspotValue: 'Artisanat',
            }, 
            {
                id: 5, 
                value: "Autre",
                hubspotValue: 'Autre',
            }
        ]
    }, 
    {
        id: 4, 
        question: "Quel chiffre d'affaires envisagez-vous ?", 
        theme: "Données financières",
        property: "estimated_revenue",
        nextQuestion: 5,
        choices: [
            {
                id: 1, 
                value: "Moins de 77 700€ par an",
                image: "💰",
                result: true,
                resultValue: "moins de 77k",
                hubspotValue: 'En dessous du seuil maximal pour une ME',
            }, 
            {
                id: 2, 
                value: "Plus de 77 700€ par an", 
                image: "💰💰",
                hubspotValue: 'Au dessus du seuil maximal pour une ME',
            }
        ]
    },
    {
        id: 5,
        question: "Combien de charges prévoyez-vous ?", 
        theme: "Données financières",
        property: "estimated_charges",
        nextQuestion: 6,
        choices: [
            {
                id: 1, 
                value: "10% du chiffre d'affaires",
                hubspotValue: '10%',
            }, 
            {
                id: 2, 
                value: "20% du chiffre d'affaires",
                hubspotValue: '20%',
            }, 
            {
                id: 3, 
                value: "40% du chiffre d'affaires",
                hubspotValue: '40%',
            }, 
            {
                id: 4, 
                value: "Plus de 50% du chiffre d'affaires",
                hubspotValue: 'Plus de 50%',
            }
        ]
    },
    {
        id: 6, 
        question: "Combien souhaitez-vous vous rémunérer ?", 
        theme: "Rémunération du dirigeant",
        property: "revenue_type",
        nextQuestion: 'emailForm',
        choices: [
            {
                id: 1, 
                value: "Je souhaite me verser un salaire tous les mois", 
                result: true, 
                resultValue: "salaire",
                hubspotValue: 'Salaire',
            }, 
            {
                id: 2, 
                value: "Je souhaite me rémunérer en dividendes 1 fois par an", 
                result: true,
                resultValue: "dividendes",
                hubspotValue: 'Dividendes',
            }
        ]
    }
]; 
   

//const nextBtn = document.getElementById('next-button'); 
const previousBtn = document.querySelector('.previous-button'); 
//const questionTitle = document.getElementById('question'); 
//const questionIndex = 0; 
//const simulatorOptions = document.getElementById('simulator-options');
//let resultArray = [];
//const questionTheme = document.querySelector('.simulator-theme');
const totalQuestions = Object.keys(questionsData).length;
const simulatorInformation = document.getElementById('simulator-information');
const hubspotPropertiesBlock = document.getElementById('hubspot-properties');
//const simulatorBlock = document.getElementById('simulator-block');


/*function setItemStorage(key, value) {
    localStorage.setItem(key, value); 
}

function addHiddenClass(elementProperty) {
    elementProperty.classList.add('simulator-hidden'); 
}

function removeHiddenClass(elementProperty) {
    elementProperty.classList.remove('simulator-hidden'); 
}*/

function fillQuestionTitleTheme(currentQuestion) {
    questionTitle.textContent = currentQuestion.question; 
    questionTheme.textContent = currentQuestion.theme; 
}


//const startBtn = document.getElementById('start-button');
/*startBtn.addEventListener('click', () => {
    setItemStorage('indexPreviousQuestion', 0); 
    setItemStorage('indexCurrentChoice', 0); 
    setItemStorage('indexCurrentQuestion', 0); 
    removeHiddenClass(document.getElementById('form-question')); 
    addHiddenClass(document.querySelector('.simulator-start')); 
    addHiddenClass(document.querySelector('.simulator-start-image')); 
    removeHiddenClass(document.querySelector('.simulator-questions-image'));
    firstQuestion();
});*/


function nextQuestion() {
    const indexCurrentQuestion = parseInt(localStorage.getItem('indexCurrentQuestion')); 
    storeResult();

    if (indexCurrentQuestion !== totalQuestions - 1) {
        previousBtn.classList.remove('simulator-hidden');
        getNextQuestion();
    }
    setIndexPreviousQuestion();
   
    if (indexCurrentQuestion === totalQuestions - 1) {
        showForm();
        addHiddenClass(previousBtn)
        setItemStorage('indexPreviousQuestion', totalQuestions - 1); 
        setItemStorage('indexCurrentQuestion', 'emailForm'); 
        addHiddenClass(document.getElementById('simulator-block')); 
        simulatorInformation.textContent = ''; 
    } 
}


previousBtn.addEventListener('click', () => {
    getPreviousQuestion(); 
    setIndexPreviousQuestion();
    deleteOldValue();
    const indexCurrentQuestion = parseInt(localStorage.getItem('indexCurrentQuestion')); 
    const indexNextQuestion = localStorage.getItem('indexNextQuestion'); 
    if (indexCurrentQuestion === 0) {
        previousBtn.classList.add('simulator-hidden'); 
    } else if (indexNextQuestion === 'emailForm') {
        removeHiddenClass(document.getElementById('simulator-block')); 
        addHiddenClass(document.querySelector('.simulator-form-block')); 
        removeHiddenClass(nextBtn);  
    }
}); 
   
   
/*function showQuestion(currentQuestion) {
    const answerBlock = document.getElementById('answer-block').firstChild; 
    simulatorBlock.innerHTML = '';
    appendHubspotProperty(currentQuestion);

    currentQuestion.choices.forEach((choice, index) => {
        const cloneAnswerBlock = answerBlock.cloneNode(true); 
        simulatorBlock.appendChild(cloneAnswerBlock); 
        const answer = simulatorBlock.children[index];
   
        const { id, value, image, hubspotValue } = choice;
        const input = answer.querySelector('.simulator-radio'); 
        input.setAttribute('id', id); 
        input.setAttribute('value', id);
        input.setAttribute('data-hubspot-value', hubspotValue);
   
        const label = answer.querySelector('.simulator-answer'); 
        label.textContent = value; 
        label.setAttribute('for', id); 
     
        const emoji = answer.querySelector('.simulator-emoji');
        if (image) { 
            emoji.textContent = image; 
        } else {
            emoji.remove(); 
        }

        highlightCards(choice, answer); 
   
        answer.addEventListener('click', () => { 
            setItemStorage('indexCurrentChoice', input.id); 
            setItemStorage('indexNextQuestion', currentQuestion.nextQuestion); 
        });

        input.addEventListener('click', (e) => {
            [...document.querySelectorAll('.simulator-answer-btn')].forEach(element => {
                element.classList.remove('simulator-checked'); 
            });
            e.currentTarget.parentNode.classList.add('simulator-checked');
            const hubspotPropertyBlock = hubspotPropertiesBlock.querySelector(`[data-hubspot-property='${currentQuestion.property}']`)
            hubspotPropertyBlock.querySelector('input').setAttribute("value", e.currentTarget.dataset.hubspotValue);
            nextQuestion(); 
        });
    }); 
}

function appendHubspotProperty(currentQuestion) {
    const property = currentQuestion.property;
    if (property) {
        hubspotPropertiesBlock.insertAdjacentHTML('beforeend', `<div data-hubspot-property="${property}" style='visibility: hidden; height: 0'><label>${property}</label><input type='text'/></div>`)
    }
}*/

   
function firstQuestion() {
    const firstQuestionData = questionsData.find(question => question.id === questionIndex);
    setItemStorage('indexCurrentQuestion', firstQuestionData.id); 

    fillQuestionTitleTheme(firstQuestionData); 
       
    showQuestion(firstQuestionData); 
}
   
   
function getNextQuestion() {
    /*const indexCurrentQuestion = parseInt(localStorage.getItem('indexNextQuestion')); 
    const currentQuestionData = questionsData.find(question => question.id === indexCurrentQuestion); 
    setItemStorage('indexCurrentQuestion', currentQuestionData.id);*/
    getCurrentQuestionForNextQuestion(currentQuestionData); 

    fillQuestionTitleTheme(currentQuestionData); 
     
    showQuestion(currentQuestionData); 
}
   
   
function getPreviousQuestion() { 
    let indexPreviousQuestion = parseInt(localStorage.getItem('indexPreviousQuestion')); 
    const previousQuestionData = questionsData.find(question => question.id === indexPreviousQuestion); 

    fillQuestionTitleTheme(previousQuestionData); 
   
    showQuestion(previousQuestionData); 
    setItemStorage('indexCurrentQuestion', previousQuestionData.id); 
}

   
function setIndexPreviousQuestion() {
    const indexCurrentQuestion = parseInt(localStorage.getItem('indexCurrentQuestion')); 
    let indexPreviousQuestion = indexCurrentQuestion - 1; 
    setItemStorage('indexPreviousQuestion', indexPreviousQuestion); 
}

   
/*function updateResultArray(currentChoice, currentQuestion) {
    if (currentChoice.result === true) {
        const newResult = new Object(); 
        newResult.question = `${currentQuestion.question}`;
        newResult.result = `${currentChoice.resultValue}`;
        resultArray.push(newResult); 
        setItemStorage('result', currentChoice.resultValue); 
    }
}*/
   
function storeResult() {
    /*const indexCurrentChoice = parseInt(localStorage.getItem('indexCurrentChoice')); 
    const indexCurrentQuestion = parseInt(localStorage.getItem('indexCurrentQuestion')); 
    const currentQuestionData = questionsData.find(question => question.id === indexCurrentQuestion); 
    const currentChoiceData = currentQuestionData.choices.find(choice => choice.id === indexCurrentChoice); 
    updateResultArray(currentChoiceData, currentQuestionData);*/
    findQuestionForStoreResult(currentQuestionData, currentChoiceData); 
}
    
   
function showForm() {
    /*simulatorOptions.innerHTML = ''; 
    questionTitle.innerHTML = 'Entrez vos coordonnées pour afficher le résultat de la simulation';
    questionTheme.innerHTML = 'Résultat';
    const formTemplate = document.querySelector('.simulator-form-block'); 
    addHiddenClass(nextBtn); 
    removeHiddenClass(formTemplate);  
    addHiddenClass(document.getElementById('simulator-information'));*/
    forShowForm(formTemplate)

    const resultInput = document.getElementById('result');
    const plusieursAnswer = resultArray.find(answer => answer.result === 'société à plusieurs'); 
    const dividendesAnswer = resultArray.find(answer => answer.result === 'dividendes'); 
    const microEntrepriseAnswer = resultArray.find(answer => answer.result === 'moins de 77k'); 
    const seulAnswer = resultArray.find(answer => answer.result === 'société seul'); 
    const salaireAnswer = resultArray.find(answer => answer.result === 'salaire');

    if (microEntrepriseAnswer) {
        resultInput.value = 'micro-entreprise';
    } else if (seulAnswer && dividendesAnswer) {
        resultInput.value = 'SASU';
    } else if (plusieursAnswer && dividendesAnswer) {
        resultInput.value = 'SAS'; 
    } else if (salaireAnswer && plusieursAnswer) {
        resultInput.value = 'SARL ou SAS'; 
    } else if (seulAnswer && salaireAnswer) {
        resultInput.value = 'EURL ou SASU'; 
    } else {
        return;
    }
   
    simulatorOptions.append(formTemplate); 
}


const simulatorSubmitBtn = document.getElementById('simulator-submit-button'); 
simulatorSubmitBtn.addEventListener('click', () => {
    const resultInputValue = document.getElementById('result').value; 
    setItemStorage('result', resultInputValue);  
});


function deleteOldValue() {
    const indexCurrentQuestion = parseInt(localStorage.getItem('indexCurrentQuestion')); 
    const currentQuestionData = questionsData.find(question => question.id === indexCurrentQuestion); 
  
    const answerToFind = resultArray.find(answer => answer.question === currentQuestionData.question);
  
    let indexAnswerToFind = resultArray.indexOf(answerToFind); 
  
    resultArray.splice(indexAnswerToFind, 1); 
}


/*function highlightCards(choice, answer) {
    if (choice.highlight === true) {
        answer.style.boxShadow = "0px 0px 10px #132966"; 
    }
}*/



/* 

CODE WEBFLOW FORME SOCIALE RESULTAT 

<script>

const result = localStorage.getItem('result');  
const firstAnswer = document.getElementById('first-answer'); 
const secondAnswer = document.getElementById('second-answer'); 

if (result === 'SARL ou SAS' || result === 'EURL ou SASU') {
	document.getElementById('one-answer').classList.add('simulator-hidden'); 
    document.getElementById('two-answers').classList.remove('simulator-hidden');
    const firstExplanation = document.getElementById('first-explanation'); 
    const secondExplanation = document.getElementById('second-explanation'); 
    if (result === 'SARL ou SAS') {
  	    firstAnswer.innerHTML = 'SARL'; 
        showExplanation('SARL', firstExplanation); 
        secondAnswer.innerHTML = 'SAS'; 
        showExplanation('SAS', secondExplanation); 
    } else if (result === 'EURL ou SASU') {
  	    firstAnswer.innerHTML = 'EURL'; 
        showExplanation('EURL', firstExplanation); 
        secondAnswer.innerHTML = 'SASU'; 
        showExplanation('SASU', secondExplanation); 
    }
} else {
    const resultText = document.getElementById('simulator-result-text');
    resultText.innerHTML = `${result}`; 
    const explanationContainer = document.querySelector('.simulator-result-explanation-container');
    showExplanation(result, explanationContainer); 
}


function showExplanation(result, explanationContainer) {
	const explanationText = document.getElementById(`simulator-${result}-explanation`);
    explanationContainer.classList.remove('simulator-hidden'); 
	explanationText.classList.remove('simulator-hidden');
	explanationContainer.append(explanationText);
}

</script>

*/