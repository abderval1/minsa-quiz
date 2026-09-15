// State variables
let activeQuestions = [];
let currentQuestionIndex = 0;
let userSelections = new Set();
let correctCount = 0;
let incorrectCount = 0;
let hasAnswered = false;

// DOM Elements
const screenHome = document.getElementById('home-screen');
const screenQuestion = document.getElementById('question-screen');
const screenResult = document.getElementById('result-screen');
const backHomeBtn = document.getElementById('back-home-btn');
const headerDesc = document.getElementById('header-desc');

const progressFill = document.getElementById('progress-fill');
const questionTracker = document.getElementById('question-tracker');
const questionText = document.getElementById('question-text');
const questionHint = document.getElementById('question-hint');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

const finalScoreEl = document.getElementById('final-score');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const resultMessageEl = document.getElementById('result-message');
const retryBtn = document.getElementById('retry-btn');

// Module Selection
document.querySelectorAll('.module-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const moduleId = e.currentTarget.dataset.module;
        const moduleName = e.currentTarget.innerText;
        startModule(moduleId, moduleName);
    });
});

backHomeBtn.addEventListener('click', goHome);
retryBtn.addEventListener('click', () => {
    // Restart current module
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    screenResult.classList.remove('active');
    screenQuestion.classList.add('active');
    loadQuestion();
});

function goHome() {
    screenQuestion.classList.remove('active');
    screenResult.classList.remove('active');
    screenHome.classList.add('active');
    backHomeBtn.style.display = 'none';
    headerDesc.innerText = "Escolha a sua categoria de exame";
}

function startModule(moduleId, moduleName) {
    if (moduleId === 'misto') {
        // Combine all arrays and shuffle, take 50
        let all = [];
        for (let key in modulesData) {
            all = all.concat(modulesData[key]);
        }
        all.sort(() => Math.random() - 0.5);
        activeQuestions = all.slice(0, 50); // limit to 50
    } else {
        activeQuestions = modulesData[moduleId] || [];
        // Optional: shuffle questions
        activeQuestions.sort(() => Math.random() - 0.5);
    }
    
    if (activeQuestions.length === 0) {
        alert("Em construção!");
        return;
    }

    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    
    screenHome.classList.remove('active');
    screenResult.classList.remove('active');
    screenQuestion.classList.add('active');
    
    backHomeBtn.style.display = 'inline-block';
    headerDesc.innerText = "Módulo: " + moduleName;
    
    loadQuestion();
}

function loadQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    userSelections.clear();
    hasAnswered = false;
    
    const progress = ((currentQuestionIndex) / activeQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionTracker.innerText = `Pergunta ${currentQuestionIndex + 1} de ${activeQuestions.length}`;
    
    questionText.innerText = q.text;
    questionHint.innerText = q.type === 'multiple' 
        ? "(Escolha múltiplas opções corretas)" 
        : "(Escolha apenas uma opção)";
        
    optionsContainer.innerHTML = '';
    
    // Randomize options
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'option-label';
        label.dataset.id = opt.id;
        
        const input = document.createElement('input');
        input.type = q.type === 'multiple' ? 'checkbox' : 'radio';
        input.name = 'quiz-option';
        input.value = opt.id;
        
        input.addEventListener('change', (e) => handleSelection(e, q.type));
        
        const span = document.createElement('span');
        span.innerText = opt.text;
        
        label.appendChild(input);
        label.appendChild(span);
        optionsContainer.appendChild(label);
    });
    
    nextBtn.disabled = true;
    nextBtn.innerText = "Confirmar Resposta";
    nextBtn.onclick = checkAnswer;
}

function handleSelection(e, type) {
    if (hasAnswered) return;
    const value = e.target.value;
    if (type === 'single') {
        userSelections.clear();
        userSelections.add(value);
        document.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
        e.target.parentElement.classList.add('selected');
    } else {
        if (e.target.checked) {
            userSelections.add(value);
            e.target.parentElement.classList.add('selected');
        } else {
            userSelections.delete(value);
            e.target.parentElement.classList.remove('selected');
        }
    }
    nextBtn.disabled = userSelections.size === 0;
}

function checkAnswer() {
    const q = activeQuestions[currentQuestionIndex];
    hasAnswered = true;
    
    const correctAnswers = q.correctAnswers;
    const selectedArr = Array.from(userSelections);
    
    document.querySelectorAll('.option-label input').forEach(input => input.disabled = true);
    
    const isFullyCorrect = correctAnswers.every(ans => selectedArr.includes(ans)) && 
                           selectedArr.every(ans => correctAnswers.includes(ans)) &&
                           selectedArr.length > 0;
                           
    if (isFullyCorrect) {
        correctCount++;
    } else {
        incorrectCount++;
    }
    
    document.querySelectorAll('.option-label').forEach(label => {
        const optId = label.dataset.id;
        if (correctAnswers.includes(optId)) {
            label.classList.add('correct');
        } else if (userSelections.has(optId)) {
            label.classList.add('incorrect');
        }
        label.classList.remove('selected');
    });
    
    nextBtn.innerText = currentQuestionIndex === activeQuestions.length - 1 ? "Ver Resultados" : "Próxima Pergunta";
    nextBtn.onclick = nextQuestion;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    screenQuestion.classList.remove('active');
    screenResult.classList.add('active');
    
    const percentage = Math.round((correctCount / activeQuestions.length) * 100);
    
    finalScoreEl.innerText = `${percentage}%`;
    correctCountEl.innerText = correctCount;
    incorrectCountEl.innerText = incorrectCount;
    
    if (percentage >= 90) {
        resultMessageEl.innerText = "Excelente! Estás muito bem preparado.";
        resultMessageEl.style.color = "var(--correct-text)";
    } else if (percentage >= 60) {
        resultMessageEl.innerText = "Bom trabalho! Mas ainda podes melhorar em alguns tópicos específicos.";
        resultMessageEl.style.color = "#b45309";
    } else {
        resultMessageEl.innerText = "Atenção: Precisas de estudar mais os exames anteriores e os tópicos base.";
        resultMessageEl.style.color = "var(--incorrect-text)";
    }
}
