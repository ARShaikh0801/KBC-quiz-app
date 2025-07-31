const questionPool = [
    {
        question: "Which Country has the highest population ?",
        options: ["USA", "China", "India", "Russia"],
        correctIndex: 2
    },

    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctIndex: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Saturn", "Mars", "Venus"],
        correctIndex: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Mark Twain", "Jane Austen", "Charles Dickens"],
        correctIndex: 0
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        correctIndex: 1
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        options: ["Brazil", "South Africa", "Australia", "India"],
        correctIndex: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctIndex: 1
    },
    {
        question: "Which is the smallest continent?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        correctIndex: 1
    },
    {
        question: "What is the hardest natural substance?",
        options: ["Iron", "Gold", "Diamond", "Quartz"],
        correctIndex: 2
    },
    {
        question: "Who was the first person to walk on the moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        correctIndex: 2
    },
    {
        question: "Which organ pumps blood throughout the body?",
        options: ["Liver", "Heart", "Kidney", "Lung"],
        correctIndex: 1
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctIndex: 1
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctIndex: 3
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Denali"],
        correctIndex: 1
    },
    {
        question: "Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Flower", "Leaf"],
        correctIndex: 3
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Marie Curie", "Nikola Tesla"],
        correctIndex: 1
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        options: ["France", "Germany", "Canada", "England"],
        correctIndex: 0
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Mississippi", "Nile"],
        correctIndex: 3
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        correctIndex: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        correctIndex: 0
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctIndex: 2
    },
    {
        question: "Which sport is known as the 'king of sports'?",
        options: ["Basketball", "Cricket", "Soccer", "Tennis"],
        correctIndex: 2
    },
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["China", "Japan", "Brazil", "UK"],
        correctIndex: 1
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "100°C", "-10°C", "32°C"],
        correctIndex: 0
    },
    {
        question: "What is the square root of 144?",
        options: ["11", "12", "14", "16"],
        correctIndex: 1
    },
    {
        question: "Which bird is known for its colorful tail?",
        options: ["Swan", "Parrot", "Peacock", "Owl"],
        correctIndex: 2
    },
    {
        question: "Which planet has the most moons?",
        options: ["Saturn", "Jupiter", "Mars", "Uranus"],
        correctIndex: 0
    },
    {
        question: "Which element is needed for bones to grow?",
        options: ["Iron", "Calcium", "Potassium", "Zinc"],
        correctIndex: 1
    },
    {
        question: "In which country is the Taj Mahal located?",
        options: ["India", "Pakistan", "Bangladesh", "Nepal"],
        correctIndex: 0
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctIndex: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Picasso", "Van Gogh"],
        correctIndex: 0
    },
    {
        question: "What is the main ingredient in sushi?",
        options: ["Bread", "Rice", "Potato", "Corn"],
        correctIndex: 1
    },
    {
        question: "Which country is famous for tulips and windmills?",
        options: ["Belgium", "Switzerland", "Netherlands", "Denmark"],
        correctIndex: 2
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Gold", "Silver", "Lead"],
        correctIndex: 0
    },
    {
        question: "Who discovered gravity?",
        options: ["Galileo", "Newton", "Einstein", "Tesla"],
        correctIndex: 1
    },
    {
        question: "How many legs does a spider have?",
        options: ["6", "8", "10", "12"],
        correctIndex: 1
    },
    {
        question: "Which is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
        correctIndex: 0
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["Italy", "Germany", "France", "Spain"],
        correctIndex: 2
    },
    {
        question: "Which bird can imitate human speech?",
        options: ["Crow", "Sparrow", "Parrot", "Pigeon"],
        correctIndex: 2
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "120°C", "80°C"],
        correctIndex: 1
    },
    {
        question: "Which continent has the most countries?",
        options: ["Africa", "Asia", "Europe", "South America"],
        correctIndex: 0
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Korea", "Thailand"],
        correctIndex: 1
    },
    {
        question: "Which natural satellite orbits Earth?",
        options: ["Sun", "Mars", "Moon", "Venus"],
        correctIndex: 2
    },
    {
        question: "Which is the only mammal capable of flight?",
        options: ["Flying squirrel", "Bat", "Eagle", "Penguin"],
        correctIndex: 1
    },
    {
        question: "Which festival is known as the festival of lights in India?",
        options: ["Holi", "Diwali", "Eid", "Pongal"],
        correctIndex: 1
    },
    {
        question: "Which country is known for the Great Wall?",
        options: ["India", "China", "Japan", "Mongolia"],
        correctIndex: 1
    },
    {
        question: "What is the study of stars and planets called?",
        options: ["Geology", "Astronomy", "Biology", "Physics"],
        correctIndex: 1
    },
    {
        question: "Which fruit is known to keep the doctor away?",
        options: ["Banana", "Apple", "Mango", "Orange"],
        correctIndex: 1
    },
    {
        question: "How many players are there in a football team?",
        options: ["9", "10", "11", "12"],
        correctIndex: 2
    }

]

let questions = [];
let currentIndex = 0;
let score = 0;
const totalQuestions = 10;

const quiz = document.getElementById("quiz");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const scoreBoardEl = document.getElementById("scoreboard");
const scoreMessageEl = document.getElementById("score-message");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const restartButton = document.getElementById("restart-btn");
let userAnswer = [];

window.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
})

function initializeQuiz() {
    questions = shuffleArry(questionPool).slice(0, totalQuestions);
    currentIndex = 0;
    score = 0;
    userAnswer = [];
    quiz.classList.remove("hidden");
    scoreBoardEl.classList.add("hidden");
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentIndex];
    const inAnswered = userAnswer[currentIndex] !== undefined;
    questionNumberEl.textContent = `Question ${currentIndex + 1} of ${totalQuestions}`;
    questionTextEl.textContent = currentQuestion.question;
    clearOptions();
    createOptions(currentQuestion.options);

    if (inAnswered) {
        applyOptionStyles(currentQuestion.correctIndex, userAnswer[currentIndex]);
        disableOptions();
    }

    updateButtonStates();
}

function updateButtonStates() {
    prevButton.disabled = currentIndex === 0;
    const inAnswered = userAnswer[currentIndex] !== undefined;
    nextButton.disabled = !inAnswered;
    if (currentIndex === totalQuestions - 1) {
        nextButton.textContent = "Finish";
    }
    else {
        nextButton.textContent = "Next Question";
    }
}
function applyOptionStyles(correctIndex, selectedIndex) {
    const optionsLi = optionsListEl.querySelectorAll("li");
    optionsLi.forEach((li, index) => {
        if (index === correctIndex) {
            li.classList.add("correct-option");
        }
        if (index === selectedIndex && selectedIndex !== correctIndex) {
            li.classList.add("incorrect-option");
        }
    });
}

function disableOptions() {
    const optionsLi = optionsListEl.querySelectorAll("li");
    optionsLi.forEach(li => {
        li.style.pointerEvents = 'none';
    });
}

function createOptions(options) {
    options.forEach((optionText, index) => {
        const li = document.createElement('li');
        li.textContent = optionText;
        li.addEventListener("click", () => handleOptionsClick(index));
        optionsListEl.appendChild(li)

    });
}

function handleOptionsClick(selectedIndex) {
    const currentQuestion = questions[currentIndex];
    const correctIndex = currentQuestion.correctIndex;

    applyOptionStyles(correctIndex, selectedIndex);
    disableOptions();

    if (selectedIndex === correctIndex) {
        score++;
    }
    nextButton.disabled = false;
    userAnswer[currentIndex] = selectedIndex;

}

function clearOptions() {
    optionsListEl.innerHTML = "";
}

nextButton.addEventListener("click", () => {
    navigateToQuestion('next')
});

prevButton.addEventListener("click", () => {
    navigateToQuestion('prev')
});

function navigateToQuestion(direction) {
    if (direction === 'next' && currentIndex < totalQuestions - 1) {
        currentIndex++;
        displayQuestion();
    }
    else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
        displayQuestion();
    }
    else if (direction === 'next' && currentIndex === totalQuestions - 1) {
        endQuiz();
    }
}

function userAnswerQuestion() {
    clearOptions();

    const currentQuestion = questions[currentIndex];
    questionNumberEl.textContent = `Question ${currentIndex + 1} of ${totalQuestions}`;
    questionTextEl.textContent = currentQuestion.question;
    currentQuestion.options.forEach((optionText, index) => {
        const li = document.createElement('li');
        li.textContent = optionText;
        optionsListEl.appendChild(li)

    });
    if (currentIndex === 0) {
        prevButton.disabled = true;
    }
    else {
        prevButton.disabled = false;
    }
    const correctIndex = currentQuestion.correctIndex;
    const optionsLi = optionsListEl.querySelectorAll("li");

    optionsLi.forEach((li, index) => {
        if (index === correctIndex) {
            li.classList.add("correct-option");
        }
        if (index === userAnswer[currentIndex] && userAnswer[currentIndex] !== correctIndex) {
            li.classList.add("incorrect-option");
        }

        li.style.pointerEvents = "none";
    })
    if (currentIndex === totalQuestions - 1) {
        nextButton.textContent = "Finish";
    }
    else {
        nextButton.textContent = "Next Question";
    }
    nextButton.disabled = false;
}

function endQuiz() {
    quiz.classList.add("hidden");
    scoreBoardEl.classList.remove("hidden");
    scoreMessageEl.textContent = `You scored ${score} out of ${totalQuestions} !`;
}

restartButton.addEventListener("click", () => {
    initializeQuiz();
})

function shuffleArry(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}