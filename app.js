  
const foxquiz = [
    {
        question: '1. Vad heter rödräv på latin?',
        answer1: 'Vulpes vulpes',
        answer2: 'Ulves ulves',
        answer3: 'Foxes foxes',
        correctAnswer: 'Vulpes vulpes',
    },

    {
        question: '2. Hur mycket väger en räv?',
        answer1: '5-10 kg',
        answer2: '10-15 kg',
        answer3: '15-20 kg',
        correctAnswer: '5-10 kg',
    },

    {
        question: '3. Hur många ungar får en rävhona per kull?',
        answer1: '1-3',
        answer2: '2-5',
        answer3: '4-7',
        correctAnswer: '4-7',
    },
    
    {
        question: '4. Vilka är rävens viktigaste sinnen?',
        answer1: 'Hörselsinnet och luktsinnet',
        answer2: 'Smaksinnet och hörselsinnet',
        answer3: 'Smaksinnet och hörselsinnet',
        correctAnswer: 'Hörselsinnet och luktsinnet',
    },

    {
        question: '5. Med vilka egenskaper brukar räven benämnas i fabler?',
        answer1: 'Rolig och smart',
        answer2: 'Snabb och smidig',
        answer3: 'Klok och listig',
        correctAnswer: 'Klok och listig',
    },
    
]

//Variabler kopplade till HTML

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const sumbitBtn = document.getElementById('svara');

//Quiz och score index startar på 0

let currentQuiz = 0;
let score = 0;

//Funktion för att starta spelet

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentfoxquiz = foxquiz[currentQuiz]

    questionEl.innerText = currentfoxquiz.question; //Frågan visas i HTML, hämtar frågan från array
    a_text.innerText = currentfoxquiz.answer1; //Svaren visas i HTML
    b_text.innerText = currentfoxquiz.answer2;
    c_text.innerText = currentfoxquiz.answer3;
}

//Funktion för att klicka ur svaren från början

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id;
        }
    })

    return answer;
}

sumbitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    //Funktion för att kontrollera rätt svar och lägg till en poäng om det är rätt
    if(answer === foxquiz[currentQuiz].correctAnswer) {
        score++;
    }

    //Funktion för att komma till nästa fråga

    currentQuiz++;

    //Såvida vi är inte är slutet av quizet

    if(currentQuiz < foxquiz.length) {
        loadQuiz
    } else {  //Funktion för att ladda quizresultat
        quiz.innerHTML = `<h2>Du hade ${score} av ${foxquiz.length} rätt!</h2>`
    }
})




