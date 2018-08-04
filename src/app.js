const InputView = require('./views/input_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const inputView = new InputView();
  inputView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
