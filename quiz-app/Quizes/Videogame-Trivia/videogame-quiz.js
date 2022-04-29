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
        question: 'What is the best selling console of all time?',
        answers: [
            { text: 'PS2', correct: true },
            { text: 'PS1', correct: false },
            { text: 'X-BOX', correct: false },
            { text: 'Nintendo Switch', correct: false }
        ]
    },
    {
        question: 'What was the first video game played in space??',
        answers: [
            { text: 'Pac-man', correct: false },
            { text: 'Snake', correct: false },
            { text: 'Tetris', correct: true },
            { text: 'Doom', correct: false }
        ]
    },
    {
        question: 'What is the most played video game of all time?',
        answers: [
            { text: 'Minecraft', correct: false },
            { text: 'Fortnite', correct: true },
            { text: 'CSGo', correct: false },
            { text: 'Call of Duty', correct: false }
        ]
    },
    {
        question: 'Roughly how many people play Roblox each month?',
        answers: [
            { text: '150 million', correct: true },
            { text: '100 million', correct: false },
            { text: '200 million', correct: false },
            { text: '50 million', correct: false }
        ]
    },
    {
        question: 'What was the name of the first video game ever created?',
        answers: [
            { text: 'Jump King', correct: false },
            { text: 'Snake', correct: false },
            { text: 'Tetris', correct: false },
            { text: 'Pong', correct: true }
        ]
    },
    {
        question: 'What is the name of the final course in Mario Kart?',
        answers: [
            { text: 'Rainbow road', correct: true },
            { text: 'Maple Treeway', correct: false },
            { text: 'Bowsers Castle', correct: false },
            { text: 'DK mountain', correct: false }
        ]
    },
    {
        question: 'Solid snake is the protoganist of which video game franchise?',
        answers: [
            { text: 'Metal Gear', correct: true },
            { text: 'James Bond', correct: false },
            { text: 'Call of Duty', correct: false },
            { text: 'Splinter Cell', correct: false }
        ]
    },
    {
        question: 'Which game company published the Assassins Creed series?',
        answers: [
            { text: 'Activison', correct: false },
            { text: 'EA', correct: false },
            { text: 'Ubisoft', correct: true },
            { text: 'Nintendo', correct: false }
        ]
    },
    {
        question: 'Kingdom of Hyrule is the main setting of which classic video game franchise?',
        answers: [
            { text: 'Super Mario', correct: false },
            { text: 'Grand Theft Auto', correct: false },
            { text: 'The Legend of Zelda', correct: true },
            { text: 'Uncharted', correct: false }
        ]
    },
    {
        question: 'How do you make obsidian in Minecraft?',
        answers: [
            { text: 'Crafting obsidian nuggets into blocks', correct: false },
            { text: 'Mixing water and milk', correct: false },
            { text: 'Mixing water and lava', correct: true },
            { text: 'Smelting obsidian ore', correct: false }
        ]
    },
    {
        question: 'Blizzard Entertainment is best known for which video game franchise?',
        answers: [
            { text: 'World of Warcraft', correct: true },
            { text: 'Runescape', correct: false },
            { text: 'Overwatch', correct: false },
            { text: 'EVE Online', correct: false }
        ]
    },
    {
        question: 'What is the most expensive game ever made?',
        answers: [
            { text: 'Final Fantasy VII', correct: false },
            { text: 'Call of Duty: Modern Warfare 2', correct: false },
            { text: 'Grand Theft Auto V', correct: true },
            { text: 'Destiny', correct: false }
        ]
    },
]