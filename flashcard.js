module.exports.BasicCard = function(front, back) {
    if (this instanceof module.exports.BasicCard) {
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
module.exports.ClozeCard = function(text, cloze) {
    if (this instanceof module.exports.ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;
        var tmpText = this.fullText.replace(this.cloze, " ... ");
        this.partial = "";
        if (tmpText === this.fullText) {
            return ("Couldn't find close: " + this.cloze + " in text: " + this.fullText);
        } else {
            this.partial = tmpText;
            return this.partial;
        };
    } else {
        return new ClozeCard(text, cloze);
    }
}
module.exports.ClozeCard.prototype.getPartial = function() {
    return (this.partial) ? this.partial : "Exception: can't find matching cloze in full text.";
}