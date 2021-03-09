let questions = [{
    question: 'Q1. PHP is a language ?',
    options: ['A. Client Side Language','B. Server Side Language','C. A and B both','D. None of the above'],
    correctAnswer: 'B. Server Side Language'
},{
    question: 'Q2. What is Internet ?',
    options: ['A. Network of Networks','B. Network','C. World Wide Web','D. None of the above'],
    correctAnswer: 'A. Network of Networks'
},{
    question: 'Q3. In a scenario where an attacker tries to crack password with a wordlist.This attack is called ?',
    options: ['A. Phishing Attack','B.Bruteforce Attck','C. Social Engeneering','D. None of the Above'],
    correctAnswer: 'B.Bruteforce Attck'
},{
    question: 'Q4. Q4D8FG73Hgsjwh2FN2#4n3== ,This is called ?',
    options: ['A. Password','B. Hash','C. Data','D. None of the Above'],
    correctAnswer: 'B. Hash'
},{
    question: 'Q5. How many versions of Internet Protocol exists now ?',
    options: ['A. 1','B. 2','C. 3','D. 4'],
    correctAnswer: 'B. 2'
}];

let currentQuestion = 0;
let userScore = 0;

function showQuestion() {
    if (currentQuestion < questions.length) 
    {
        document.querySelector('.question').innerHTML = questions[currentQuestion].question;
        for (let i=0,j=0 ; i<4 ; i++,j++)
        {
            document.querySelectorAll('.option')[i].innerHTML = questions[currentQuestion].options[j]; 
        }
        
    } else {
        console.log(userScore);
    }
}

function checkAnswer() {

    for( i=0; i<4 ;i++) {
        if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
            activeElement = document.querySelectorAll('.option')[i];
            break;
        }
     }
    if (activeElement.innerHTML === questions[currentQuestion].correctAnswer)
    {
        userScore++;
        activeElement.style.backgroundColor = 'green';
        activeElement.style.color = 'white';
    }
    else {
        activeElement.style.backgroundColor = 'red';
        activeElement.style.color = 'white';
        for (i=0;i<4;i++) {
            if (document.getElementsByClassName('option')[i].innerHTML == questions[currentQuestion].correctAnswer) {
                rightElement = document.getElementsByClassName('option')[i];
                rightElement.style.backgroundColor = 'green';
                rightElement.style.color = 'white';
                break;
            }
        }
        
    }
   
}
    
function calculate() {

}

//  Printing user name
let userName = document.querySelector('.user-name');
userName.innerHTML = localStorage.getItem('user');

window.onload = function() {
    showQuestion();
};

document.querySelector('.opt1').addEventListener('click',() => {
    for( i=0; i<4 ;i++) {
       if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
            document.querySelectorAll('.option')[i].classList.remove('active');
       }
    }
    document.querySelector('.opt1').classList.add('active');
});

document.querySelector('.opt2').addEventListener('click',() => {
    for( i=0; i<4 ;i++) {
       if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
            document.querySelectorAll('.option')[i].classList.remove('active');
       }
    }
    document.querySelector('.opt2').classList.add('active');
});

document.querySelector('.opt3').addEventListener('click',() => {
    for( i=0; i<4 ;i++) {
       if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
            document.querySelectorAll('.option')[i].classList.remove('active');
       }
    }
    document.querySelector('.opt3').classList.add('active');
});

document.querySelector('.opt4').addEventListener('click',() => {
    for( i=0; i<4 ;i++) {
       if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
            document.querySelectorAll('.option')[i].classList.remove('active');
       }
    }
    document.querySelector('.opt4').classList.add('active');
});

// document.querySelector('.check-answer-button').addEventListener('click',checkAnswer);

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click',() => {
    try {
        checkAnswer();
        setTimeout(() => {

            for( i=0; i<4 ;i++) {
                document.querySelectorAll('.option')[i].style.color = 'black';
                document.querySelectorAll('.option')[i].style.backgroundColor = 'white';
            }
            /*
            for( i=0; i<4 ;i++) {
                if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
                    activeElement = document.querySelectorAll('.option')[i].classList.remove('active');
                }
            }
            */
           document.querySelector('.opt1').addEventListener('click',() => {
            for( i=0; i<4 ;i++) {
               if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
                    document.querySelectorAll('.option')[i].classList.remove('active');
               }
            }
            document.querySelector('.opt1').classList.add('active');
            });
        
            document.querySelector('.opt2').addEventListener('click',() => {
            for( i=0; i<4 ;i++) {
               if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
                    document.querySelectorAll('.option')[i].classList.remove('active');
               }
            }
            document.querySelector('.opt2').classList.add('active');
            });
        
            document.querySelector('.opt3').addEventListener('click',() => {
            for( i=0; i<4 ;i++) {
               if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
                    document.querySelectorAll('.option')[i].classList.remove('active');
               }
            }
            document.querySelector('.opt3').classList.add('active');
            });
        
            document.querySelector('.opt4').addEventListener('click',() => {
            for( i=0; i<4 ;i++) {
               if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
                    document.querySelectorAll('.option')[i].classList.remove('active');
               }
            }
            document.querySelector('.opt4').classList.add('active');
            });
        
            for( i=0; i<4 ;i++) {
                if(document.querySelectorAll('.option')[i].getAttribute('class').includes('active')) {
                    activeElement = document.querySelectorAll('.option')[i].style.color = 'white';
                    activeElement = document.querySelectorAll('.option')[i].style.backgroundColor = 'blue';
                }
             }

            currentQuestion++;
            showQuestion();    
        }, 500);
        
    }
    catch(e) {
        if(e == 'ReferenceError: activeElement is not defined') {
            alert('Please select any option first!!');
        }  
    }
});





