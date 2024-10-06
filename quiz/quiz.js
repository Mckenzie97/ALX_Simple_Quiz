function checkAnswer(event){
    event.preventDefault();
    const correctAnswer = '4';

    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedbackDiv = document.getElementById('feedback');

    if (!selectedAnswer) {
        feedbackDiv.textContent = "Please select an answer.";
        feedbackDiv.style.color ="red";
        return;
    }

    const userAnswer = selectedAnswer.value;

    if (userAnswer === correctAnswer) {
        feedbackDiv.textContent = "Correct! Well done.";
        feedbackDiv.style.color = "green";
    } else {
        feedbackDiv.textContent = "That's incorrect. Try again!";
        feedbackDiv.style.color = 'red';
    }
}
document.getElementById("submit-answer").addEventListener('click', checkAnswer);