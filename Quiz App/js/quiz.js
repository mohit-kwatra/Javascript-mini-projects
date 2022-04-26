"use strict";
window.onload = function() {

    // Array of questions
    let questions = 
    [{
        question: 'Q1. PHP is a language ?',
        options: ['A. Client Side Language','B. Server Side Language','C. A and B both','D. None of the above'],
        correctAnswer: 'B. Server Side Language'
    },
    {
        question: 'Q2. What is Internet ?',
        options: ['A. Network of Networks','B. Network','C. World Wide Web','D. None of the above'],
        correctAnswer: 'A. Network of Networks'
    },
    {
        question: 'Q3. In a scenario where an attacker tries to crack password with a wordlist.This attack is called ?',
        options: ['A. Phishing Attack','B.Bruteforce Attack','C. Social Engineering','D. None of the Above'],
        correctAnswer: 'B.Bruteforce Attack'
    },
    {
        question: 'Q4. Q4D8FG73Hgsjwh2FN2#4n3== ,This is called ?',
        options: ['A. Password','B. Hash','C. Data','D. None of the Above'],
        correctAnswer: 'B. Hash'
    },
    {
        question: 'Q5. How many versions of Internet Protocol exists now ?',
        options: ['A. 1','B. 2','C. 3','D. 4'],
        correctAnswer: 'B. 2'
    }];

    let currentQuestion = 0;
    let userScore = 0;
    let userName = document.querySelector('.user-name');
    let questionNode = document.querySelector('.question');
    let optionsNode = document.querySelectorAll('.option');
    let i;
    let activeNode;
    let rightElement;
    let nextButton = document.querySelector('.next-button');

    // Function to show question to the page
    function showQuestion() {
        if (currentQuestion < questions.length) {
            questionNode.innerText = questions[currentQuestion].question;
            for (let i=0; i<4; i++) {
                optionsNode[i].innerText = questions[currentQuestion].options[i]; 
            }
        } else {
            let output = `🏳️ You scored ${userScore} out of 5.`;
            alert(output);
            localStorage.clear();
            location.assign("./");
        }
    }

    // Function to check correct answer
    function checkAnswer() {
        // picking up the option having .active class
        for(i=0; i<4 ;i++) {
            if(optionsNode[i].getAttribute('class').includes('active')) {
                activeNode = optionsNode[i];
                // removing .active class from all the options
                for(let ele of optionsNode) {
                    if(ele.getAttribute('class').includes('active')) {
                        ele.classList.remove('active');
                    }
                }
                break;
            }
        }

        // checking for correct answer and changing colors accordingly 
        if (activeNode.innerText === questions[currentQuestion].correctAnswer)
        {
            userScore++;
            activeNode.style.backgroundColor = 'green';
            activeNode.style.color = 'white';
        }
        else {
            activeNode.style.backgroundColor = 'red';
            activeNode.style.color = 'white';
            for (i=0;i<4;i++) {
                if (optionsNode[i].innerText == questions[currentQuestion].correctAnswer) {
                    rightElement = optionsNode[i];
                    rightElement.style.backgroundColor = 'green';
                    rightElement.style.color = 'white';
                    break;
                }
            }
            
        }
    
    }

    // inserting username to dom
    userName.innerText = localStorage.getItem('username');

    showQuestion();

    // Adding click event to all the options
    for(let node of optionsNode) {

        node.addEventListener("click", function() {
            for(let ele of optionsNode) {
                if(ele.getAttribute('class').includes('active')) {
                    ele.classList.remove('active');
                }
            }
            this.classList.add('active');
        })
    
    }
    
    // adding click event to next button on the page
    nextButton.addEventListener('click', () => {

        try {
            checkAnswer();
            setTimeout(() => {
    
                for(let ele of optionsNode) {
                    ele.style.backgroundColor = "white";
                    ele.style.color = "black";
                }   
                currentQuestion++;
                showQuestion();    
            
            }, 1000);        
        }
        catch(e) {
            alert(e);  
        }
    
    });
    
};