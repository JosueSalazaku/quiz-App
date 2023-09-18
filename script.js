const questions = [
    {
        question: "Whose body gained the properties of rubber after unintentionally eating a Devil Fruit?",
        answers: [
            {text: "Charlotte Katakuri", correct: false},
            {text: "Mr. 3", correct: false},
            {text: "Monkey D. Luffy", correct: true},
            {text: "Black Beard", correct: false},
        ]
    },
    {
        question: "What anime features a shinigami named Ryuk and a Death Note?",
        answers: [
            {text: "Death Note", correct: true},
            {text: "Naruto", correct: false},
            {text: "One Piece", correct: false},
            {text: "Dragon Ball Z", correct: false},
        ]
    },
    {
        question: "Which anime features a guild of powerful wizards who take on various missions and quests?",
        answers: [
            {text: "Fairy Tail", correct: true},
            {text: "Black Clover", correct: false},
            {text: "Magi: The Labyrinth of Magic", correct: false},
            {text: "The Seven Deadly Sins", correct: false},
        ] 
    },
    {
        question: "In 'Bleach,' what is the name of the soul reaper who becomes a substitute for Ichigo Kurosaki?",
        answer: [
            {text: "Rukia Kuchiki", correct: true},
            {text: "Orihime Inoue", correct: false},
            {text: "Renji Abarai", correct: false},
            {text: "Byakuya Kuchiki", correct: false},
        ]

    },
    {
        question: "What is the name of the underground city where Levi Ackerman grew up?",
        answers: [
            {text: "Shiganshina", correct: false},
            {text: "Trost", correct: false},
            {text: "Sina", correct: false},
            {text: "Underground City", correct: true},
        ]

    },
    {
        question: "What is the name of the group that opposes the Marley government in 'Attack on Titan'?",
        answers: [
            {text: "Warrior Unit", correct: false},
            {text: "Eldian Restorationists", correct: true},
            {text: "Marleyan Rebels", correct: false},
            {text: "Titan Haters", correct: false},
        ]

    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
         button.innerHTML = answer.text;
         button.classList.add("btn");
         answerButtons.appendChild(button);
         if(answer.correct) {
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer() {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
}

StartQuiz()