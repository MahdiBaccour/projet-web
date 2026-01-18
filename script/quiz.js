
    var correctAnswers = ['a','b','b','a','b','a','a','b','a','b'];

    function submitQuiz() {
        var score = 0;
        
        for (var i = 0; i < 10; i++) {
            var q = "q" + (i + 1);
            var radios = document.getElementsByName(q);
            var answer = "";
            
            for (var j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    answer = radios[j].value;
                    break;
                }
            }
            
            if (answer == "") {
                alert("Veuillez répondre à toutes les questions.");
                return;
            }
            
            if (answer == correctAnswers[i]) {
                score = score + 2;
            }
        }
        
        alert("Score : " + score + "/20");
        document.getElementById("score").innerHTML = score;
        document.getElementById("submit-btn").disabled = true;
    }

    document.getElementById("quiz-form").onsubmit = function(e) {
        e.preventDefault();
        submitQuiz();
    };

