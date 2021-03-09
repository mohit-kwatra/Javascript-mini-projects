function startQuiz() {
    if (document.querySelector('.user-name').value == '') 
    {
        alert("Please enter your name before starting!");
    } 
    else {
        localStorage.setItem('user',document.querySelector('.user-name').value);
        location.pathname = '/quiz.html';
    }
}

let startButton = document.querySelector('.start-button');
startButton.addEventListener('click', startQuiz);