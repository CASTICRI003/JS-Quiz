var timeEl = document.querySelector('.time');

var secondsLeft = 80;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left';
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //something something ran out of time
        }
    }, 1000);
}

const Questions = [{
    id: 0,
    q: 'Commonly used data types DO NOT include:',
    a: [{ text: 'strings', isCorrect: false},
        { text: 'booleans', isCorrect: false},
        { text: 'alerts', isCorrect: true},
        { text: 'numbers', isCorrect: false}
    ]
},
{
    id: 1,
    q: 'The condition of an if/else statement is enclosed with ____.',
    a: [{ text: 'quotes', isCorrect: false},
        { text: 'paranthesis', isCorrect: true},
        { text: 'curly brackets', isCorrect: false},
        { text: 'square brackets', isCorrect: false}
    ]
},
{
    id: 2,
     q: 'Arrays in JavaScript can be used to store ____.',
     a: [{ text: 'booleans', isCorrect: false},
         { text: 'numbers', isCorrect: false},
         { text: 'other arrays', isCorrect: false},
         { text: 'All of the above', isCorrect: true}
        ]
    },
{
    id: 3,
    q: 'String must be enclosed with ____ to when being assigned to variables.',
    a: [{ text: 'commas', isCorrect: false},
        { text: 'curly brackets', isCorrect: false},
        { text: 'quotes', isCorrect: true},
        { text: 'paranthesis', isCorrect: false}
    ]
},
{
    id: 4,
    q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    a: [{ text: 'for loops', isCorrect: false},
        { text: 'Terminal/Bash', isCorrect: false},
        { text: 'JavaScript', isCorrect: false},
        { text: 'console.log', isCorrect: true}
    ]
}
]

var start = true;

function iterate(id) {
    var result = document.getElementsByClassName('result');

    result[0].innerText = '';

    const question = document.getElementById('question');

    question.innerText = Questions[id].q;

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    const op5 = document.getElementById('op5');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    op5.innerText = Questions[id].a[4].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    op5.value = Questions[id].a[4].isCorrect;

    var selected = '';

    const options = document.getElementsByClassName('option');

    options[0].addEventListener('click', () => {
        if (selected == 'true') {
            result[0].innerHTML = "Correct!";
        } else {
            
        }
    })
}