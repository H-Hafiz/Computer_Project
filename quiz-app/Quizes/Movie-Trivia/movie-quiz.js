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
        question: 'What was the first feature-length animated movie ever released?',
        answers: [
            { text: 'Snow White and the seven dwarfs', correct: true },
            { text: 'Pinocchio', correct: false },
            { text: 'Fantasia', correct: false },
            { text: 'Cinderella', correct: false }
        ]
    },
    {
        question: 'In the matrix, does Neo take the red pill or the blue pill?',
        answers: [
            
            { text: 'The Blue pill', correct: false },
            { text: 'The Red Pill', correct: true },
            
        ]
    },
    {
        question: 'For what movie did Tom Hanks score his first Academy Award nomination?',
        answers: [
            { text: 'Cast Away', correct: false },
            { text: 'Big', correct: true },
            { text: 'Forest Gump', correct: false },
            { text: 'Saving Private Ryan', correct: false }
        ]
    },
    {
        question: 'Whats the name of the skyscraper in Die Hard?',
        answers: [
            { text: 'Nakatomi Plaza', correct: true },
            { text: 'Empire State Building', correct: false },
            { text: 'Chrysler Building', correct: false },
            { text: 'Trump Tower', correct: false }
        ]
    },
    {
        question: 'The head of what kind of animal is front and center in an infamous scene from the Godfather?',
        answers: [
            { text: 'A Rat', correct: false },
            { text: 'A donkey', correct: false },
            { text: 'A pig', correct: false },
            { text: 'A horse', correct: true }
        ]
    },
    {
        question: 'Which James Bond movie featured a villian named Red Grant?',
        answers: [
            { text: 'From Russia with Love', correct: true },
            { text: 'Casino Royal', correct: false },
            { text: 'Gold Finger ', correct: false },
            { text: 'Skyfall', correct: false }
        ]
    },
    {
        question: 'What famous line was said by Jack Nicholson in The Shining?',
        answers: [
            { text: 'Heres Johnny', correct: true },
            { text: 'Heres Daddy', correct: false },
            { text: 'Heres Bonny', correct: false },
            { text: 'Heres Manni', correct: false }
        ]
    },
    {
        question: 'For what movie did Steven Spielberg win his first Oscar for Best Director?',
        answers: [
            { text: 'E.T', correct: false },
            { text: 'Jaws', correct: false },
            { text: 'Schindlers List', correct: true },
            { text: 'Raiders of the Lost Ark', correct: false }
        ]
    },
    {
        question: 'What is the title of the fourth Harry Potter movie?',
        answers: [
            { text: 'The Chamber of Secrets', correct: false },
            { text: 'The Prisoner of Azkaban', correct: false },
            { text: 'The Goblet of Fire', correct: true },
            { text: 'The Order of Phoenix', correct: false }
        ]
    },
    {
        question: 'What hollywood movie star plays himself in the movie Zombieland?',
        answers: [
            { text: 'Johnny Depp', correct: false },
            { text: 'Tom Hanks', correct: false },
            { text: 'Bill Murray', correct: true },
            { text: 'Brad Pitt', correct: false }
        ]
    },
    {
        question: 'What is the highest grossing R-rated movie of all time?',
        answers: [
            { text: 'Joker', correct: true },
            { text: 'Deadpool', correct: false },
            { text: 'The Passion of Christ', correct: false },
            { text: 'American Sniper', correct: false }
        ]
    },
    {
        question: 'Which Alfred Hitchcock thriller is notorious for its shocking shower scene?',
        answers: [
            { text: 'The Ring', correct: false },
            { text: 'Marnie', correct: false },
            { text: 'Psycho', correct: true },
            { text: 'The farmers Wife', correct: false }
        ]
    },
]