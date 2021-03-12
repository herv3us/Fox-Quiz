//Deklarera golbala variabler
const startButton = document.getElementById("start-game");
const questionTitle = document.querySelector(".question-title");
const answerButtons = document.querySelector(".answer");
const endGame = document.querySelector(".endGame");
const points = document.querySelector(".result");
const picture = document.getElementById("pic");
const sumbitBtn = document.getElementById('svara');

sumbitBtn.style.fontSize = "30px";
sumbitBtn.style.backgroundColor = "#a1683f";
sumbitBtn.style.color = "#eee";

let currentQuiz = 0; //Hålla räkningen för varv frågor 
let score = 0; //Hålla koll på poäng

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
            // console.log(answer)
            button.classList.add("btn");
            answerButtons.appendChild(button);
            button.setAttribute("answer", answer.correct)
            button.addEventListener("click", chooceAnswer);
            picture.src = `/img/fox--${currentQuiz}.jpg`

        });
    } else {
        endGame.classList.remove("hide");
        questionTitle.innerText = "";
    }
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

//Function för vilken knapp vi valt för svaret
const chooceAnswer = (choice) =>{
    const choosenAnswer = choice.target;
    sumbitBtn.classList.remove("hide");

    // console.log(choice.target.getAttribute("answer")); 
    if (choice.target.getAttribute("answer") === "true") {
        score+= 10;
    }
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

    if(score > 0){
        questionTitle.innerText = `Du fick ${score} av ${foxquiz.length * 10} poäng! Bra jobbat!`;
    } else {
        questionTitle.innerText = `Tyvärr fick du ${score} poäng utav ${foxquiz.length * 10}! Bättre lycka nästa gång.`;
    }

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
            {text: "Smaksinnet och luktsinnet", correct: false}
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

