var correctAnswers = ['a','b','b','a','b','a','a','b','a','b'];

function submitQuiz() {
    var score = 0;
    var totalQuestions = 10;

    for (var i = 0; i < totalQuestions; i++) {
        var questionNumber = i + 1;
        var questionName = "q" + questionNumber;

        var allRadios = document.getElementsByName(questionName);
        var selectedAnswer = "";

        for (var j = 0; j < allRadios.length; j++) {
            if (allRadios[j].checked == true) {
                selectedAnswer = allRadios[j].value;
                break;
            }
        }

        if (selectedAnswer == "") {
            alert("Veuillez répondre à toutes les questions avant de soumettre.");
            return;
        }

        if (selectedAnswer == correctAnswers[i]) {
            score = score + 2;
        }
    }

    alert("Votre score : " + score + " / 20");
    document.getElementById("score").innerHTML = score;
}

var quizForm = document.getElementById("quiz-form");
quizForm.onsubmit = function(e) {
    e.preventDefault();
    submitQuiz();
};
