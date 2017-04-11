# flashcard-class-api
A flash card JS object class api designed for command line applications

## Description
flashcard is a js class constructor which provides two different types of flash card functionality, BasicCard & ClozeCard. In Basic card you pass in a question and an answer in the arguments. In ClozeCard you pass in the full text with the answer and the cloze text which will get replaced in full text by ... 


## Technologies used
- JavaScript
- NodeJS

## Here's an example for that
 ### TEST COMMANDS
```
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

console.log(firstPresidentCloze.getPartial());

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops"); 
```

### Output

```
rutul (master *) flashcard-class-api $ node flashcard.js
Who was the first president of the United States?
George Washington
George Washington
 ...  was the first president of the United States.
George Washington was the first president of the United States.
 ...  was the first president of the United States.
rutul (master *) flashcard-class-api $
```