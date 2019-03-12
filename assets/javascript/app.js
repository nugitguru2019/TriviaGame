$('#start').on('click', function (){
    game.start();

});
$(document).on('click', '#end', function (){
    game.done();
});


var questions = [{
    question: "What is the capital of Japan?",
    answers: ["Dhaka", "Tokyo", "London", "Bern"],
    corectAnswer: "Tokyo"
}, {
    question: "What is the currency of Finland?",
    answers: ["Taka", "Ringit", "Pound", "Euro"],
    corectAnswer: "Euro"
}, {
    
    question: "What is the longest river in the world?",
    answers: ["The Nile", "Amazon", "Missisipi", "The Ganga"],
    corectAnswer: "The Nile"
}, {
    question: "What is the language of Netherland?",
    answers: ["Bangla", "Hindi", "Dutch", "Mandarin"],
    corectAnswer: "Dutch"
}, {
    question: "The Motor City?",
    answers: ["New York", "Chicago", "Detroit", "Denver"],
    corectAnswer: "Detroit"
}, {
    question: "The biggest country in the world?",
    answers: ["Texas", "Russia", "Canada", "Japan"],
    corectAnswer: "Russia"
}, {
    question: "what is the capital of Ghana?",
    answers: ["Lima", "Paris", "London", "Akra"],
    corectAnswer: "Akra"
}, {
    question: "The tallest mountain in the world?",
    answers: ["K2", "Makalu", "Mount Everest", "Nanga"],
    corectAnswer: "Mount Everest"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function (){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <=0){
            console.log("Time is up!");
            game.done();

        }
    },
    start: function (){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++){
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++){
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>');

    },
    done: function (){
        this.result()
        $.each($('input[name="question-0]":checked'), function (){
            if ($(this).val() === questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function (){
            if ($(this).val() === questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'), function (){
            if ($(this).val() === questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'), function (){
            if ($(this).val() === questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'), function (){
            if ($(this).val() === questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5]":checked'), function (){
            if ($(this).val() === questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'), function (){
            if ($(this).val() === questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7]":checked'), function (){
            if ($(this).val() === questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
    },

    result: function (){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " +this.correct +"</h3>");
        $('#subwrapper').append("<h3>incorrect Answers: " +this.incorrect +"</h3>");
        $('#subwrapper').append("<h3>Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
};
