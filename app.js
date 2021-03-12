//Deklarera golbala variabler
const startButton = document.getElementById("start-game");
const questionTitle = document.querySelector(".question-title");
const answerButtons = document.querySelector(".answer");
const endGame = document.querySelector(".endGame");
const points = document.querySelector(".result");
const picture = document.getElementById("pic");
const sumbitBtn = document.getElementById('svara');

let button;
let currentQuiz = 0; //Hålla räkningen för varv frågor 
let score = 0; //Hålla koll på poäng
let fact;

sumbitBtn.style.fontSize = "30px";
sumbitBtn.style.backgroundColor = "#a1683f";
sumbitBtn.style.color = "#eee";


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
            button = document.createElement("button");
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
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    questionTitle.innerText = choice.target.getAttribute("answer") === "true" ? "Rätt!!" : "Tyvärr, fel.";

    fact = document.createElement("h1");
    if(currentQuiz === 0){
        answerButtons.appendChild(fact);
        fact.innerHTML = `Latin för rödräv är vulpes vulpes. <br><br> Rödräven introducerades i Australien under 1800-talet.`
    } else if (currentQuiz === 1){
        answerButtons.appendChild(fact);
        fact.innerHTML = `Rävar väger vanligtvis mellan 5-10kg. <br><br> Rävars diet består av möss, kaniner, fiskar, grodor, bär och insekter.`
    } else if (currentQuiz === 2){
        answerButtons.appendChild(fact);
        fact.innerHTML = `Rävarhonor får 4-7 valpar per kull. <br><br>  Rävarna lever ensamma förutom under parningstiden. Rävhonan diar sina ungar under ca en månads tid i en håla i marken. Valparna matas genom att föräldrarna kräks upp halvsmält mat.`
    } else if (currentQuiz === 3){
        answerButtons.appendChild(fact);
        fact.innerHTML = `De viktigaste sinnena för en räv är hörselsinnet och luktsinnet. <br><br> Vilda rävar lever i två år men kan leva upp till 14 år i fångenskap.`
    } else if (currentQuiz === 4){
        answerButtons.appendChild(fact);
        fact.innerHTML = `I fabler benämns egenskaperna klok och listig. <br><br> Rävar förekommer i några klassiska fabler så som "Räven och druvorna" (som blivit ihågkommen med uttrycket surt sa räven).`
    } else{
        fact.classList.add("hide");
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

