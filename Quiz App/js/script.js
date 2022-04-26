"use strict";
window.onload = function() {

    function startQuiz() {

        let userName = document.querySelector('.user-name').value;

        if (userName === '' || userName === null) {
            alert("Please enter your name before starting quiz!");
        } else {
            localStorage.setItem('username', userName);
            location.assign('./quiz.html');
        }

    }
    
    let startButton = document.querySelector('.start-button');
    startButton.addEventListener('click', startQuiz);

};