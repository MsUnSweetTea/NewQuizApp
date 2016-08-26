var question = [
{
   text: "What was the first Nintendo game Mario appeared in ",
   choices: ["Mario Brothers","Donkey Kong","Metroid", "Zelda"],
   correctAnswer : 1
},{
  text: "What is the name of Mario's Brother",
  choices: ["Wario","Waluigi","Luigi","Toad" ],
  correctAnswer : 2
},{
  text: "What was the first multi-game Console",
  choices: ["Atari 5300","NES","Atari 2600","Gameboy" ],
  correctAnswer : 2
},{
  text: "What was the first Pokemon Game",
  choices: ["Yellow","Red","Gold","Blue" ],
  correctAnswer : 3
},{
  text: "When was Nintendo founded",
  choices: ["1980","1975","1973","1889" ],
  correctAnswer : 3
},{
  text: "In what game does your character try and cross the road while dodging cars",
  choices: ["Duck Hunt","Cross the Road","Chicken","Frogger" ],
  correctAnswer : 3
},{
  text: "What was the sequel to Tron",
  choices: ["Tron Strikes Back","Return of the Tron","Discs of Tron","Back to the Tron" ],
  correctAnswer : 2
},{
  text: "What was one of the names of the Ghosts in Pac-Man",
  choices: ["Clyde","Boo","Casper","Pinkguy" ],
  correctAnswer : 0
},{
  text: "Who is the Hero of the Zelda",
  choices: ["Zelda","Mario","Link","Samus" ],
  correctAnswer : 2
},{
  text: "In what country was Tetris Developed",
  choices: ["Japan","China","'Murica","Russia" ],
  correctAnswer : 3
}
];

$(document).ready(function() {
    $("#Feedback").hide();
    $("#Final-Tally").hide();
    var questionKey = 0;
    fillInInfo(questionKey);
    var counter = 0;
    var totalQuestionCounter = 1;
    $("#questionCounter").text(totalQuestionCounter);
    //each time the user gets a correct answer, counter+=1;
    $("#send").click(function(event){
        event.preventDefault();
        var correctChoice = $("input[name='usersanswer']:checked").val();
        if(correctChoice == question[questionKey].correctAnswer) {
            console.log("yeehaw");
            $("#Feedback").show();
            $("#Questions").hide();
            counter+=1;
            $(".scoreCounter").text(counter);
            $(".feedback-message").text("Fuck yeah. Woot.");
        }
        else {
            //question incorrect
            console.log("ya dun fucked up");
            $("#Feedback").show();
            $("#Questions").hide();
            //If it's incorrect, they should be shown the correct answer.
            $(".feedback-message").text("Psh. Dummy. The correct answer is: "
                + question[questionKey].choices[question[questionKey].correctAnswer]);

        }
    });
    
    $("#next-question").click(function() {
        //check if the game is over
        if(questionKey == 9) {
            $("#Final-Tally").show();
            $("#Feedback").hide();
            $("#Questions").hide();
            $(".hide-this").hide();
            return;
        }
        $("#Feedback").hide();
        $("#Questions").show();
        questionKey += 1;
        fillInInfo(questionKey);
        totalQuestionCounter += 1;
        $("#questionCounter").text(totalQuestionCounter);
        $("input[type='radio']").prop('checked', false);
    });

    $("#restart").click(function() {
        $("#Final-Tally").hide();
        $("#Feedback").hide();
        $("#Questions").show();
        $(".hide-this").show();
        questionKey = 0;
        fillInInfo(questionKey);
        counter = 0;
        totalQuestionCounter = 1;
        $("#questionCounter").text(totalQuestionCounter);
        $(".scoreCounter").text(counter);
        $("input[type='radio']").prop('checked', false);
    });

    
});

function fillInInfo(questionKey) {
    $(".questions").text(question[questionKey].text);
    $("#answer0").text(question[questionKey].choices[0]);
    $("#answer1").text(question[questionKey].choices[1]);
    $("#answer2").text(question[questionKey].choices[2]);
    $("#answer3").text(question[questionKey].choices[3]);
}