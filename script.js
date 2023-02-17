let questions = [

    {
        "question": "The < title > element must be located inside:",
        "answer_1": "The < head > element",
        "answer_2": "The < body > element",
        "answer_3": "The < footer > element",
        "answer_4": "The < style > element",
        "correct_answer": "1",

    },
    {
        "question": "What is the HTML element used to display an image?",
        "answer_1": "< image >",
        "answer_2": "< picture >",
        "answer_3": "< pic >",
        "answer_4": "< img >",
        "correct_answer": "4",

    },
    {
        "question": "Who invented HTML?",
        "answer_1": "Tim Berners Lee",
        "answer_2": "Madonna",
        "answer_3": "Bill Gates",
        "answer_4": "Jeff Bezos",
        "correct_answer": "1",

    },
    {
        "question": "What does CSS stand for?",
        "answer_1": "Central Style Sheets",
        "answer_2": "Cascading Simple Sheets",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "Cars, SUV's, Sailboats",
        "correct_answer": "3",

    },
    {
        "question": "What does HTML stand for?",
        "answer_1": "Hyper Text Preprocessor",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Hyper Text Multiple Language",
        "answer_4": "Hyper Tool Markup Language",
        "correct_answer": "2",

    },
    {
        "question": "What does < a > stand for in HTML?",
        "answer_1": "Bold text",
        "answer_2": "Container",
        "answer_3": "A link",
        "answer_4": "Line Break",
        "correct_answer": "3",

    },
];

let currentQuestion = 0;
let sumOfRightAnswers = 0;


function init() {

    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}



function showQuestion() {

    if (currentQuestion >= questions.length) {

        document.getElementById('questions-container').style = 'display: none';
        document.getElementById('results-parrent-container').style = '';
        document.getElementById('total-questions').innerHTML = questions.length;
        document.getElementById('score').innerHTML = sumOfRightAnswers;
    } else {

        let percent = (currentQuestion + 1)/ questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').style = `width: ${percent}%`
        document.getElementById('progress').innerHTML = `${percent} %`
        let question = questions[currentQuestion];
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        document.getElementById('current-question').innerHTML = `${currentQuestion + 1}`
    }
}

function answer(selection) {

    let question = questions[currentQuestion];
    let selectedAnswer = selection.slice(-1);
    let rightAnswer = question['correct_answer'];
    let idOfRightAnswer = `answer_${question['correct_answer']}`;
    if (selectedAnswer == rightAnswer) {
        sumOfRightAnswers ++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('btn-next').disabled = false;
}

function nextQuestion() {

    currentQuestion++;
    showQuestion();
    document.getElementById('btn-next').disabled = true;
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}
function newStart(){

    document.getElementById('questions-container').style = '';
    document.getElementById('results-parrent-container').style = 'display: none';
    sumOfRightAnswers = 0;
    currentQuestion = 0;
    init();
}