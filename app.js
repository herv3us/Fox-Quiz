const startButton = document.getElementById("start-game");
const questionTitle = document.querySelector(".question-title");
const answerButtons = document.querySelector(".answer");
const endGame = document.querySelector(".endGame");
const points = document.querySelector(".result");
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
   
    if (currentQuiz < foxquiz.length){
        questionTitle.innerText = foxquiz[currentQuiz].question;

        foxquiz[currentQuiz].answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            console.log(answer)
            button.classList.add("btn");
            button.addEventListener("click", chooceAnswer);
            answerButtons.appendChild(button);
        });
    } else {
        endGame.classList.remove("hide");
        questionTitle.innerText = "";
    }

    // if(foxquiz[currentQuiz].answers.correct === true){
    //     score+=50;
    // }
};

//Function som tar bort "överflödiga knappar" & tar bort hide från next.
const resetAll = () => {
    sumbitBtn.classList.add("hide");
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
};


//Function som tar fram nästa fråga
const nextQuestion = () =>{
    resetAll();
    showQuestion();
};


//Function för att välja alternativ av svar
const chooceAnswer = (choice) =>{
    const choosenAnswer = choice.target;
    sumbitBtn.classList.remove("hide");
    
};

//Börjar spelet respektive går till nästa fråga, samt avsluta..!!
startButton.addEventListener("click", startGame);
sumbitBtn.addEventListener("click", () => {
    currentQuiz++;
    nextQuestion();
});
endGame.addEventListener("click",() =>{
    points.innerText = `${score} poäng`
    points.classList.remove("hide");
    endGame.classList.add("hide");
    questionTitle.style.fontSize = "30px";
    questionTitle.innerText = `Du hade ${score} av ${foxquiz.length * 10} rätt! Bra jobbat!`;

});



//Frågorna till vårt quiz.
const foxquiz = [
    {
        question: '1. Vad heter rödräv på latin?',
        answers: [
             {text: "Vulpes vulpes", correct: true},
             {text: "Ulves ulves", correct: false},
             {text: "Foxes foxes", correct: false}
        ],
    },
    {
        question: '2. Hur mycket väger en räv?',
        answers: [
            {text: "5-10kg", correct: true},
            {text: "10-15kg", correct: false},
            {text: "15-20kg", correct: false}
        ]
    },

    {
        question: '3. Hur många ungar får en rävhona per kull?',
        answers: [
            {text: "1-3", correct: false},
            {text: "2-5", correct: false},
            {text: "4-7", correct: true}
        ]
    },
    
    {
        question: '4. Vilka är rävens viktigaste sinnen?',
        answers: [
            {text: "Hörselsinnet och luktsinnet", correct: true},
            {text: "Smaksinnet och hörselsinnet", correct: false},
            {text: "Smaksinnet", correct: false}
        ]
    },

    {
        question: '5. Med vilka egenskaper brukar räven benämnas i fabler?',
        answers: [
            {text: "Rolig och smart", correct: false},
            {text: "Snabb och smidig", correct: false},
            {text: "Klok och listig", correct: true}
        ]
    },
    
];

