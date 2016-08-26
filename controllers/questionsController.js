// object literal

class QuestionsController {
  fetchQuestions(req, res) { // this is an anonymous function in egmascript 6
    const questions = [
      {
        question: 'Is this a question?',
      },
      {
        question: 'this is another question?'
      }
    ];
    res.json(questions);
  }
};

module.exports = new QuestionsController();
