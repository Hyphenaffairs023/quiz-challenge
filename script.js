
// Prompt for name FIRST
let quizTakerName = prompt("Please enter your name:") || "Anonymous";

// Track quiz timing
let quizStartTime = new Date();
let quizEndTime = null;
let quizDuration = null;

// Quiz data
const quizData = [
    // ... your quizData array ...
   
     {
        question: "Which of the following is a JavaScript data type?",
        options: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Object",
            e: "All of the above",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["e"]
    },
    {
        question: "Select all primitive data types in JavaScript.",
        options: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Object",
            e: "Undefined",
            f: "Null",
            g: "Symbol",
            h: "BigInt",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a", "b", "c", "e", "f", "g", "h"]
    }

    ,
    {
        question: "What is the output of: console.log(typeof null);",
        options: {
            a: "'object'",
            b: "'null'",
            c: "'undefined'",
            d: "'number'",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a"]
    },
    {
        question: "Which of the following are valid ways to declare a variable in JavaScript?",
        options: {
            a: "var",
            b: "let",
            c: "const",
            d: "int",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a", "b", "c"]
    },
    {
        question: "Which method can be used to convert a string to an integer in JavaScript?",
        options: {
            a: "parseInt()",
            b: "parseFloat()",
            c: "Number()",
            d: "toString()",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a", "c"]
    }

    ,
    {
        question: "Which of the following is NOT a reserved word in JavaScript?",
        options: {
            a: "interface",
            b: "throws",
            c: "program",
            d: "enum",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["c"]
    },
    {
        question: "What will be the output of: console.log(2 + '2');",
        options: {
            a: "'22'",
            b: "4",
            c: "NaN",
            d: "undefined",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a"]
    },
    {
        question: "Which of the following is used to comment a single line in JavaScript?",
        options: {
            a: "// comment",
            b: "/* comment */",
            c: "<!-- comment -->",
            d: "# comment",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a"]
    },
    {
        question: "Which of the following are falsy values in JavaScript?",
        options: {
            a: "0",
            b: "'' (empty string)",
            c: "null",
            d: "undefined",
            e: "NaN",
            f: "false",
            g: "[]",
            h: "{}",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a", "b", "c", "d", "e", "f"]
    },
    {
        question: "Which of the following is the correct way to write a function in JavaScript?",
        options: {
            a: "function myFunc() {}",
            b: "def myFunc() {}",
            c: "func myFunc() {}",
            d: "function:myFunc() {}",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a"]
    },
    {
        question: "Which of the following array methods does NOT modify the original array?",
        options: {
            a: "map()",
            b: "push()",
            c: "pop()",
            d: "splice()",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a"]
    },
    {
        question: "What is the result of: Boolean('false')",
        options: {
            a: "true",
            b: "false",
            c: "undefined",
            d: "null",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a"]
    },
    {
        question: "Which of the following statements will throw an error?",
        options: {
            a: "const x = 5; x = 10;",
            b: "let y = 3; y = 4;",
            c: "var z = 2; z = 3;",
            d: "let a = 1; a++;",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            j: "",
            k: "",
            l: "",
            m: "",
            n: "",
            o: "",
            p: "",
            q: "",
            r: "",
            s: "",
            t: ""
        },
        correct: ["a"]
    },

];



// DOM elements
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart');

let currentQuiz = 0;
let score = 0;

// Utility: format date/time
function formatDateTime(dt) {
    return dt.toLocaleString();
}
function formatTime(dt) {
    return dt.toLocaleTimeString();
}
function formatDuration(ms) {
    const s = Math.floor(ms / 1000);
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}m ${sec}s`;
}

// Clear all answers
function clearAnswers() {
    answerEls.forEach(answerEl => {
        if (answerEl.type === "radio" || answerEl.type === "checkbox") {
            answerEl.checked = false;
        }
    });
}

// Load current quiz question
function loadQuiz() {
    clearAnswers();
    resultEl.style.display = "none";
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    // Set options
    Object.keys(currentQuizData.options).forEach(key => {
        const input = document.getElementById(key);
        const label = document.getElementById(`${key}_text`);
        if (!input || !label) return;
        if (currentQuizData.options[key]) {
            input.parentElement.style.display = '';
            label.innerText = currentQuizData.options[key];
            input.disabled = false;
        } else {
            input.parentElement.style.display = 'none';
            label.innerText = '';
            input.disabled = true;
        }
        input.type = currentQuizData.correct.length > 1 ? "checkbox" : "radio";
    });
}

// Get selected answers
function getSelected() {
    const selected = [];
    answerEls.forEach(answerEl => {
        if (!answerEl.disabled && answerEl.checked) {
            selected.push(answerEl.id);
        }
    });
    return selected;
}

// Save user's answers after each submit
function saveUserAnswer(selected) {
    quizData[currentQuiz].userSelected = selected;
}

// Submit button event
submitBtn.addEventListener('click', () => {
    const selected = getSelected();
    if (selected.length === 0) return;
    saveUserAnswer(selected);

    const correct = quizData[currentQuiz].correct;
    const isCorrect = correct.length === selected.length &&
        correct.every(ans => selected.includes(ans));

    if (isCorrect) score++;

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quizEndTime = new Date();
        quizDuration = quizEndTime - quizStartTime;
        showResult();
    }
});

// Show result and export PDF button only
function showResult() {
    questionEl.innerText = '';
    answerEls.forEach(el => el.parentElement.style.display = 'none');
    submitBtn.style.display = 'none';
    resultEl.style.display = 'block';

    // Show score
    scoreEl.innerText = `${score} / ${quizData.length}`;

    // Export PDF only
    if (!document.getElementById('export-pdf')) {
        const pdfBtn = document.createElement('button');
        pdfBtn.id = 'export-pdf';
        pdfBtn.innerText = 'Export PDF';
        pdfBtn.onclick = exportPDF;
        resultEl.appendChild(pdfBtn);
    }
}

restartBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    submitBtn.style.display = '';
    quizData.forEach(q => delete q.userSelected);
    const pdfBtn = document.getElementById('export-pdf');
    if (pdfBtn) pdfBtn.remove();
    quizStartTime = new Date();
    quizEndTime = null;
    quizDuration = null;
    loadQuiz();
});

window.onload = loadQuiz;

// Export PDF with colored info
function exportPDF() {
    if (typeof window.jspdf === 'undefined' && typeof window.jsPDF === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = generatePDF;
        document.body.appendChild(script);
    } else {
        generatePDF();
    }

    function generatePDF() {
        const { jsPDF } = window.jspdf || window;
        const doc = new jsPDF();
        let y = 15;

        // Title
        doc.setFontSize(18);
        doc.setTextColor(21, 101, 192); // blue
        doc.text('Quiz Results', 10, y);
        y += 10;

        // Name
        doc.setFontSize(12);
        doc.setTextColor(67, 160, 71); // green
        doc.text(`Name: ${quizTakerName}`, 10, y);
        y += 7;

        // Date
        doc.setTextColor(255, 143, 0); // orange
        doc.text(`Date: ${formatDateTime(quizStartTime)}`, 10, y);
        y += 7;

        // Start Time
        doc.setTextColor(30, 136, 229); // blue
        doc.text(`Quiz Start: ${formatTime(quizStartTime)}`, 10, y);
        y += 7;

        // End Time
        doc.setTextColor(239, 83, 80); // red
        doc.text(`Quiz End: ${quizEndTime ? formatTime(quizEndTime) : '-'}`, 10, y);
        y += 7;

        // Duration
        doc.setTextColor(123, 31, 162); // purple
        doc.text(`Duration: ${quizDuration ? formatDuration(quizDuration) : '-'}`, 10, y);
        y += 10;

        // Score
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(`Score: ${score} / ${quizData.length}`, 10, y);
        y += 10;

        // Questions and answers
        quizData.forEach((q, idx) => {
            if (y > 270) {
                doc.addPage();
                y = 15;
            }
            doc.setFont(undefined, 'bold');
            doc.setTextColor(21, 101, 192);
            doc.text(`${idx + 1}. ${q.question}`, 10, y);
            y += 7;
            doc.setFont(undefined, 'normal');
            Object.keys(q.options).forEach(optKey => {
                const optText = q.options[optKey];
                if (!optText) return;
                let marker = '';
                let fillColor = null;
                let isUser = q.userSelected && q.userSelected.includes(optKey);
                let isCorrect = q.correct.includes(optKey);

                if (isUser && isCorrect) {
                    marker = '✔️ (Correct)';
                    fillColor = [200, 255, 200];
                } else if (isUser) {
                    marker = '✔️';
                    fillColor = [255, 236, 179];
                } else if (isCorrect) {
                    marker = '(Correct)';
                    fillColor = [200, 255, 200];
                }

                if (fillColor) {
                    doc.setFillColor(...fillColor);
                    doc.rect(10, y - 4, 190, 7, 'F');
                }
                doc.setTextColor(0, 0, 0);
                doc.text(`   ${optKey.toUpperCase()}: ${optText} ${marker}`, 12, y);
                y += 6;
            });
            y += 2;
        });

        doc.save('quiz_result.pdf');
    }
}

