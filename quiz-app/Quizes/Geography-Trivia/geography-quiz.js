const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0  
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e)  {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')

}
const questions = [
    {
        question: 'What is the name of the tallest mountain in the world?',
        answers: [
            { text: 'Mount Everest', correct: true },
            { text: 'K2', correct: false },
            { text: 'kangchenjunga', correct: false },
            { text: 'Makalu', correct: false }
        ]
    },
    {
        question: 'Which country has the largest population in the world?',
        answers: [
            { text: 'USA', correct: false },
            { text: 'India', correct: false },
            { text: 'China', correct: true },
            { text: 'Russia', correct: false }
        ]
    },
    {
        question: 'What is the name of the longest river in Africa?',
        answers: [
            { text: 'The Amazon River', correct: false },
            { text: 'The Nile River', correct: true },
            { text: 'The Yangtze River', correct: false },
            { text: 'The Mississippi River', correct: false }
        ]
    },
    {
        question: 'What American city is the Golden Gate Bridge located in?',
        answers: [
            { text: 'San Francisco', correct: true },
            { text: 'New York', correct: false },
            { text: 'Chicago', correct: false },
            { text: 'Las Vegas', correct: false }
        ]
    },
    {
        question: 'What is the largest country in the world?',
        answers: [
            { text: 'China', correct: false },
            { text: 'USA', correct: false },
            { text: 'India', correct: false },
            { text: 'Russia', correct: true }
        ]
    },
    {
        question: 'What is the capital city of Canada?',
        answers: [
            { text: 'Ottawa', correct: true },
            { text: 'Toronto', correct: false },
            { text: 'Vancouver', correct: false },
            { text: 'Quebec', correct: false }
        ]
    },
    {
        question: 'What is the name of the largest ocean in the world?',
        answers: [
            { text: 'The Pacific Ocean', correct: true },
            { text: 'The Atlantic Ocean', correct: false },
            { text: 'The Indian Ocean', correct: false },
            { text: 'The Artic Ocean', correct: false }
        ]
    },
    {
        question: 'What country are the Great Pyramids of Giza located in?',
        answers: [
            { text: 'Libya', correct: false },
            { text: 'Morocco', correct: false },
            { text: 'Egypt', correct: true },
            { text: 'Saudi Arabia', correct: false }
        ]
    },
    {
        question: 'What is the capital of Thailand?',
        answers: [
            { text: 'Nakhin Ratchasima', correct: false },
            { text: 'Nonthaburi', correct: false },
            { text: 'Bangkok', correct: true },
            { text: 'Chiang Mai', correct: false }
        ]
    },
    {
        question: 'What is the name of the smallest country in the world?',
        answers: [
            { text: 'Nauru', correct: false },
            { text: 'Monaco', correct: false },
            { text: 'The Vatican City', correct: true },
            { text: 'San Marino', correct: false }
        ]
    },
    {
        question: 'Which country is also called the Netherlands?',
        answers: [
            { text: 'Holland', correct: true },
            { text: 'Belgium', correct: false },
            { text: 'Denmark', correct: false },
            { text: 'Switzerland', correct: false }
        ]
    },
    {
        question: 'What is the coldest place on earth?',
        answers: [
            { text: 'Greenland', correct: false },
            { text: 'South Pole', correct: false },
            { text: 'Antarctica', correct: true },
            { text: 'Russia', correct: false }
        ]
    },
]