const PubSub = require('../../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (event) => {
    const result = event.detail;
    this.displayResult(result);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === 1) {
      resultElement.textContent = `You typed ${result} word`;
  } else {
      resultElement.textContent = `You typed ${result} words`;
  }
};

module.exports = ResultView;
