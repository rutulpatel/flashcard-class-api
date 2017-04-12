var inquirer = require("inquirer");
var card = require("./flashcard");

var askQuestion = function(card) {
    var type;
    if (card.hasOwnProperty("front")) {
        type = "basic";
        que = card.front;
        ans = card.back;
    } else if (card.hasOwnProperty("cloze")) {
        type = "cloze";
        que = card.partial || false;
        ans = card.fullText;
    }
    if (que) {
        inquirer.prompt([{
            name: 'ans',
            message: que,
            validate: function(i) {
                return !(i == "");
            }
        }]).then(function(a) {
            if (a.ans === ans) {
                console.log("Correct");
            } else {
                if (type === "basic") {
                    console.log("That's wrong, correct answer is '" + ans + "'")
                } else {
                    console.log(ans);
                }
            }
        });
    } else {
        console.log(card.getPartial());
    }
}



// /**
//  * TEST COMMANDS
//  */
var testType = process.argv[2].trim().toLowerCase();
if (testType == "basic") {
    var firstPresident = new card.BasicCard("Who was the first president of the United States?", "George Washington");
    askQuestion(firstPresident);
} else if (testType == "cloze") {
    var firstPresidentCloze = new card.ClozeCard("George Washington was the first president of the United States.", "George Washington");
    askQuestion(firstPresidentCloze);
} else if (testType == "broken") {
    var brokenCloze = new card.ClozeCard("This doesn't work", "oops");
    askQuestion(brokenCloze);
}
// // "Who was the first president of the United States?"
// console.log(firstPresident.front);

// // "George Washington"
// console.log(firstPresident.back);


// // "George Washington"
// console.log(firstPresidentCloze.cloze);

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);

// // George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

// console.log(firstPresidentCloze.getPartial());

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");