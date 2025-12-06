// ----------- QUIZ -----------

let quizData = [
    {
        question: "HTML stands for?",
        options: ["HyperText Markup Language", "HighText Machine Language"],
        answer: 0
    },
    {
        question: "CSS is mainly used for?",
        options: ["Styling", "Storing Data"],
        answer: 0
    },
    {
        question: "JavaScript is used for?",
        options: ["Interactivity", "Painting"],
        answer: 0
    }
];

let index = 0;
let userAnswers = [];

function loadQuestion() {
    document.getElementById("question").innerText = quizData[index].question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    quizData[index].options.forEach((opt, i) => {
        optionsDiv.innerHTML += `<button onclick="selectOption(${i})">${opt}</button>`;
    });
}

function selectOption(i) {
    userAnswers[index] = i;
}

function nextQuestion() {
    if (index < quizData.length - 1) {
        index++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (index > 0) {
        index--;
        loadQuestion();
    }
}

function submitQuiz() {
    let score = 0;

    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].answer) score++;
    }

    document.getElementById("result").innerText =
        "Your Score: " + score + " / " + quizData.length;
}

loadQuestion();


// ----------- JOKE API -----------

function getJoke() {
    document.getElementById("jokeBox").innerText = "Loading...";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            document.getElementById("jokeBox").innerText =
                data.setup + " — " + data.punchline;
        });
}
