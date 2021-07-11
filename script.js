const quizData = [
    {
        question: "How old is Akhmadullo?",
        a: "21",
        b: "20",
        c: "19",
        d: "23",
        correct: "b"
    },
    {
        question: "what is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d"
    },
    {
        question: "Who is the current President of US?",
        a: "Donald Trump",
        b: "Joe Biden",
        c: "Barack Obama",
        d: "Bill Clinton",
        correct: "b"
    },
    {
        question: "What is the capital of Poland?",
        a: "Warsaw",
        b: "Milan",
        c: "Katowice",
        d: "Berlin",
        correct: "a"
    },
    {
        question: "What is the distance between the Earth and Moon?",
        a: "400000 km",
        b: "365600 km",
        c: "384400 km",
        d: "659000 km",
        correct: "c"
    }
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deSelectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

