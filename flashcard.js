var BasicCard = function(front, back) {
    if (this instanceof BasicCard) {
        if (front !== undefined && back !== undefined && front !== null && back !== null && front && back) {
            this.front = front;
            this.back = back;
        } else {
            console.log("Usage: new BasicCard(front, back)");
            return;
        }
    } else {
        return new BasicCard(front, back);
    }
}
var ClozeCard = function(text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;
        var tmpText = this.fullText.replace(this.cloze, " ... ");
        this.partial = "";
        if (!tmpText) {
            return ("Couldn't find close: " + this.cloze + " in text: " + this.fullText);
        } else {
            this.partial = tmpText;
            return this.partial;
        };
    } else {
        return new ClozeCard(text, cloze);
    }
}
ClozeCard.prototype.getPartial = function() {
    return (this.partial) ? this.partial : "Exception: can't find partial text.";
}




/**
 * TEST COMMANDS
 */
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