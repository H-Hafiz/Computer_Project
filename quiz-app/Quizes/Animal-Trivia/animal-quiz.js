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
        question: 'Which mammal is known to have the most powerful bite in the world?',
        answers: [
            { text: 'Hippopotamus', correct: true },
            { text: 'Crocodile', correct: false },
            { text: 'Lion', correct: false },
            { text: 'Polar Bear', correct: false }
        ]
    },
    {
        question: 'What object does a male penguin often gift to a female penguin to win her over?',
        answers: [
            { text: 'A stick', correct: false },
            { text: 'A fish', correct: false },
            { text: 'A pebble', correct: true },
            { text: 'Snow', correct: false }
        ]
    },
    {
        question: 'How long is an elephant pregnant before it gives birth?',
        answers: [
            { text: '25 Months', correct: false },
            { text: '22 Months', correct: true },
            { text: '20 Months', correct: false },
            { text: '40 Months', correct: false }
        ]
    },
    {
        question: 'Why are flamingos pink?',
        answers: [
            { text: 'Because of their diet of algae, shrimps and crustaceans', correct: true },
            { text: 'Evolution', correct: false },
            { text: 'Survival', correct: false },
            { text: 'Friendship', correct: false }
        ]
    },
    {
        question: 'A dog sweats through which part of its body?',
        answers: [
            { text: 'Its tail', correct: false },
            { text: 'Its body', correct: false },
            { text: 'Its ears', correct: false },
            { text: 'Its paws', correct: true }
        ]
    },
    {
        question: 'What is the size of a newborn kangaroo?',
        answers: [
            { text: '1 inch', correct: true },
            { text: '2 inch', correct: false },
            { text: '5 inch', correct: false },
            { text: '7 inch', correct: false }
        ]
    },
    {
        question: 'How far away can a wolf smell its prey?',
        answers: [
            { text: 'Almost 2 miles', correct: true },
            { text: 'Almost 3 miles', correct: false },
            { text: 'Under 1 mile', correct: false },
            { text: 'Half a mile', correct: false }
        ]
    },
    {
        question: 'Which animal is known to spend 90% of its day, sleeping?',
        answers: [
            { text: 'Opossums', correct: false },
            { text: 'Sloths', correct: false },
            { text: 'Koalas', correct: true },
            { text: 'cats', correct: false }
        ]
    },
    {
        question: 'What color is the tongue of a giraffe?',
        answers: [
            { text: 'Orange', correct: false },
            { text: 'Red', correct: false },
            { text: 'Purple', correct: true },
            { text: 'Grey', correct: false }
        ]
    },
    {
        question: 'Which animal stripes are on their skin as well as their fur?',
        answers: [
            { text: 'Zebra', correct: false },
            { text: 'Lion', correct: false },
            { text: 'Tiger', correct: true },
            { text: 'Cats', correct: false }
        ]
    },
    {
        question: 'What is the name of the fastest land animal?',
        answers: [
            { text: 'Cheetah', correct: true },
            { text: 'Tiger', correct: false },
            { text: 'Wildebeest', correct: false },
            { text: 'Hare', correct: false }
        ]
    },
    {
        question: 'A baby goat is called what?',
        answers: [
            { text: 'cubs', correct: false },
            { text: 'pups', correct: false },
            { text: 'Kid', correct: true },
            { text: 'Calf', correct: false }
        ]
    },
]