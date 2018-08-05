const PubSub = require('../../helpers/pub_sub.js');

const WordCounter = function() {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (event) => {
    const inputtedtext = event.detail;
    const result = this.wordCount(inputtedtext);
    PubSub.publish('WordCounter:result', result);
  });
};

WordCounter.prototype.wordCount = function (words) {
  let stringArray = words.split(' ').filter(function(n) { return n != '' });
  return stringArray.length;
};



module.exports = WordCounter;
