const startButton = document.getElementById("start-game");
const questionTitle = document.querySelector(".question-title");
const answerButtons = document.querySelector(".answer");
// -----
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const sumbitBtn = document.getElementById('svara');


let currentQuiz = 0;
let score = 0;

//Function som startar spelet
const startGame = () =>{
    startButton.classList.add("hide");
    answerButtons.classList.remove("hide");
    nextQuestion();
};


//Function som visar frågan..
const showQuestion = () =>{
    questionTitle.innerText = foxquiz[0].question;

    foxquiz.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        button.textContent = foxquiz.answer1;
        button.addEventListener("click", chooceAnswer);
    });
};


//Function som tar fram nästa fråga
const nextQuestion = () =>{
    showQuestion();
};


//Function för att välja alternativ av svar
const chooceAnswer = () =>{
    
};

//Börjar spelet!!
startButton.addEventListener("click", startGame);




//Frågorna till vårt quiz.
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
        answer3: 'Smaksinnet',
        correctAnswer: 'Hörselsinnet och luksinnet',
    },

    {
        question: '5. Med vilka egenskaper brukar räven benämnas i fabler?',
        answer1: 'Rolig och smart',
        answer2: 'Snabb och smidig',
        answer3: 'Klok och listig',
        correctAnswer: 'Klok och listig',
    },
    
];

