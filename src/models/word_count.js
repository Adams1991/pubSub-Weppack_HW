const PubSub = require('../../helpers/pub_sub.js');

const WordCounter = function() {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:text-inputted', (event) => {
    const inputtedtext = event.detail;
    const result = this.wordCount(inputtedtext);
    PubSub.publish('WordCounter:result', result);
  });
};

WordCounter.prototype.wordCount = function (words) {
  const stringArray = words.split(' ');
  return stringArray.length;
};

module.exports = WordCounter;
